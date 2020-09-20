const fs = require('fs')

const read = (location) => {
  const content = fs.readFileSync(location)
  const words = JSON.parse(content);

  return words
}

module.exports = {
  read,
}
