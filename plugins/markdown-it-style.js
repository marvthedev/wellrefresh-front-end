var Markdown = require('markdown-it')
var markdowStyle = require('markdown-it-style')
var md = new Markdown()
md.use(markdownStyle, {
  'h1': 'font-size:18px;color:red'
})
