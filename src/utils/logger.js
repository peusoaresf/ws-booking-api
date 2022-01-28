/* eslint-disable no-console */
const log = (level) => ({
  message,
  ...rest
}) => {
  console.log(level, message, rest)
}

module.exports = {
  info: log('INFO'),
  error: log('ERROR'),
}
