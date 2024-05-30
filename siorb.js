const fs = require('fs')

const chars = ['alisa', 'asuka', 'azucena', 'bryan', 'claudio', 'devil-jin', 'dragunov', 'eddy', 'feng', 'hwoarang', 'jack-8', 'jin', 'jun', 'kazuya', 'king', 'kuma', 'lars', 'law', 'lee', 'leo', 'leroy', 'lili', 'nina', 'panda', 'paul', 'raven', 'reina', 'shaheen', 'steve', 'victor', 'xiaoyu', 'yoshimitsu', 'zafina']
const url = ''

let responses = {}

chars.forEach( async (char) =>
{
    fetch(`https://tekkendocs.com/api/t8/${char}/framedata`)
    .then(res => res.text())
    .then(text => fs.writeFileSync(`${char}.json`, text))
    // fs.writeFile(`${char}.json`, JSON.stringify(await response.text()))
})
