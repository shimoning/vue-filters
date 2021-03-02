const nl2br = function nl2br(value) {
  return value.replace(/\n/g, '<br>')
}

const lowercase = function(value) {
  return (value || value === 0)
    ? value.toString().toLowerCase()
    : ''
}

const uppercase = function(value) {
  return (value || value === 0)
    ? value.toString().toUpperCase()
    : ''
}

const capitalize = function(value) {
  if (!value && value !== 0) {
    return ''
  }
  return value.toString().charAt(0).toUpperCase() +
    value.toString().slice(1).toLowerCase()
}

export {
  nl2br,
  lowercase,
  uppercase,
  capitalize,
}
