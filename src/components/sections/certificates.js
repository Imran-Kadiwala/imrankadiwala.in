import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig, github } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  position: relative;
`;
const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const StyledContent = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const CertificatesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(140px, 500px));
  overflow: hidden;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
`;
const certificate = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  color: ${colors.green};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${colors.green};
    font-size: ${fontSizes.sm};
    line-height: 12px;
  }
`;

const Certificates = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, certs } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="certificates" ref={revealContainer}>
      <Heading>{title}</Heading>
      <StyledFlexContainer>
        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <CertificatesContainer>
            {certs && certs.map((certificate, i) => <certificate key={i}>{certificate}</certificate>)}
          </CertificatesContainer>
        </StyledContent>
      </StyledFlexContainer>
    </StyledContainer>
  );
};


Certificates.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Certificates;