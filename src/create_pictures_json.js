// 1. Place your favourite pictures into public/images/slick
// 2. Run
//    $ node create_pictures_json.js 

const fs = require('fs')

const targetDir = 'public/images/slick/'
const files = fs.readdirSync(targetDir)
                .filter((file) => {
                  if (file.match(/\.[jJ][pP][gG]$/)) {
                    return true 
                  } else {
                    return false
                  }
                })
                .sort()
const data = files.map(file => { return "images/slick/" + file })
console.log('Found ' + data.length + ' pictures')

fs.writeFile(`${targetDir}/pictures.json`, JSON.stringify(data))
console.log('Created json file: ' + targetDir + 'pictures.json')
