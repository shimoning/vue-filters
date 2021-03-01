const number_format = function(value) {
  return (!value && (value !== 0 || value !== '0')) || isNaN(value)
    ? value
    : Number(value).toLocaleString()
}

const remove_comma = function(value) {
  return Number(String(value).replace(/,/g, ''))
}

const toFixed = function(value, length) {
  return isNaN(value) ? value : Number(value).toFixed(length)
}

const zero_padding = function(value, length) {
  return ('0'.repeat(length) + value).slice(-length)
}

export {
  number_format,
  remove_comma,
  toFixed,
  zero_padding,
}
