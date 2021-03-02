const nl2br = function nl2br(value) {
  return value.replace(/\n/g, '<br>')
}

const lowercase = function(value) {
  return (value || value === 0)
    ? String(value).toLowerCase()
    : ''
}

const uppercase = function(value) {
  return (value || value === 0)
    ? String(value).toUpperCase()
    : ''
}

const capitalize = function(value) {
  if (!value && value !== 0) {
    return ''
  }
  value = String(value)
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}

export {
  nl2br,
  lowercase,
  uppercase,
  capitalize,
}
