const fs = require('fs')
const path = require('path')
const { basename } = require('path')

const readableStream = fs.createReadStream('./text.txt', 'utf-8')
const writeableStream = fs.createWriteStream('./text2.txt')

fs.open('./text.txt', 'r+', (err, fd) => {
  if (err) return console.log(err)
  console.log(fd)
})

fs.watchFile('./text.txt', {}, (curr, prev) => {
  console.log(curr.ctime.toLocaleString())
})

const allfile = fs
  .readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  })
  .forEach((f) => {
    console.log(f.slice(0, -3))
  })

console.log(allfile)

// readableStream.on('data', (chunk) => {
//   const regex = /mfitrah/
//   console.log(regex.test(chunk))
// })

const family = {
  name: 'salidjo',
  children: [
    {
      name: 'yono',
      children: [
        {
          name: 'rama',
          children: [{ name: 'x', children: [] }],
        },
        {
          name: 'lia',
          children: [],
        },
      ],
    },
    {
      name: 'pur',
      children: [
        {
          name: 'mida',
          children: [
            { name: 'A', children: [] },
            { name: 'B', children: [] },
          ],
        },
        {
          name: 'yeni',
          children: [
            { name: 'C', children: [] },
            { name: 'D', children: [] },
          ],
        },
      ],
    },
  ],
}

function we(family) {
  if (family.children.length === 0) {
    return
  }
  family.children.forEach((child) => {
    console.log(child.name)
    we(child)
  })
}

fs.stat('./img.JPEG', (err, stats) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(stats.size)
})
