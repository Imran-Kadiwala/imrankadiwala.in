const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'main',
    repo: 'https://github.com/Imran-Kadiwala/Imran-Kadiwala.github.io',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
