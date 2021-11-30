const validator = require('validator')
const http = require('http')
const os = require('os')
const fs = require('fs')
const url = require('url')
const ee = require('events')

fs.readFile(__dirname + '/about.html', 'utf-8', (err, data) => {})

const renderHTML = function (path, content, res) {
  path = fs.readFileSync(path)
  res.writeHead(200, {
    'Content-Type': content,
  })
  res.write(path)
  return res.end(function () {
    console.log('request end..')
  })
}

http
  .createServer(function (req, res) {
    const url = req.url
    switch (url) {
      case '/about':
        renderHTML('./about.html', 'text/html', res)
        res.end()
        break
      case '/form':
        renderHTML('./form.html', 'text/html', res)
        res.end()
        break
      case '/search':
        console.log(req.query)
        res.end()
        break
      case '/form-input':
        console.log(req.method + req.url + req.httpVersion)
        let data = ''
        res.end()
        break
      default:
        res.writeHead(404, { Connection: 'closed' })
        renderHTML('./404.html', 'text/html', res)
        res.end()
        break
    }
  })
  .listen(8000, function () {
    console.log('listening on port 8000..')
  })

const door = new ee()

door.on('test', () => {
  console.log('this is test event')
})
