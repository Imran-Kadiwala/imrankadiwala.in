const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'main',
    repo: 'https://github.com/Imran-Kadiwala/imrankadiwala.in',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
