const family = {
  name: 'salidjo',
  child: [
    {
      name: 'yono',
      child: [
        {
          name: 'rama',
          child: [],
        },
        {
          name: 'lia',
          child: [],
        },
      ],
    },
    {
      name: 'pur',
      child: [
        {
          name: 'mida',
          child: [{ name: 'mida a', child: [] }],
        },
        {
          name: 'yeni',
          child: [
            { name: 'yeni a', child: [] },
            { name: 'yeni b', child: [] },
          ],
        },
      ],
    },
  ],
}

function find(fam) {
  if (fam.name == 'mida') {
    fam.child.push({
      name: 'mida b',
      child: [],
    })
    console.log(fam)
  }
  fam.child.forEach((element) => {
    console.log(element.name)
    find(element)
  })
}

const n = 1

const sum = () => n + 1

console.log(typeof sum())
