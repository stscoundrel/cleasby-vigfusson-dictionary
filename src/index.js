const { read } = require('./services/reader.js')
const { CLEASBY_VIGFUSSON_JSON } = require('./constants/paths')

const getDictionary = () => {
  const words = read(CLEASBY_VIGFUSSON_JSON)

  return words
}

module.exports = {
  getDictionary,
}
