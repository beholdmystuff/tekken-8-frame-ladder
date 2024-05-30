const fs = require('fs');
const path = require('path')

const jsonsInDir = fs.readdirSync('./').filter(file => path.extname(file) === '.json');

let chars = {}
jsonsInDir.forEach(file => {
    console.log(file)
  const fileData = fs.readFileSync(path.join('./', file))
  chars[file.replace(".json", "")] = JSON.parse(fileData.toString())
});

fs.writeFileSync("framedata.js", 'const rawFrameData = ' + JSON.stringify(chars))
