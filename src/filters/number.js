const number_format = function(value) {
  return (!value && (value !== 0 || value !== '0')) || isNaN(value)
    ? value
    : Number(value).toLocaleString()
}

const remove_comma = function(value) {
  const removed = String(value).replace(/,/g, '')
  return isNaN(removed) ? removed : Number(removed)
}

const toFixed = function(value, length) {
  return (!value && (value !== 0 || value !== '0')) || isNaN(value)
    ? value
    : Number(value).toFixed(length)
}

const zero_padding = function(value, length) {
  if (isNaN(value)) {
    return value
  }

  let negative = false
  if (Number(value) < 0) {
    negative = true
    length--
    value = String(value).slice(1)
  }

  return (negative ? '-' : '') +  ('0'.repeat(length) + String(value)).slice(-length)
}

export {
  number_format,
  remove_comma,
  toFixed,
  zero_padding,
}
