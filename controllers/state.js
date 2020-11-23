const fs = require('fs');

const contentPath = './content/content.json'

function save(data) {
    const dataStringfy = JSON.stringify(data)
    return fs.writeFileSync(contentPath, dataStringfy)
}


module.exports = {
    save
}