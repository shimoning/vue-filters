import dayjs from 'dayjs'
import { zero_padding } from './number'

const isDayjsObject = function(value) {
  return (typeof(value) === 'object' && value.constructor.name === 'd')
}

const formatter = function(value, format) {
  return (isDayjsObject(value) ? value : dayjs(value)).format(format)
}

const number2clock = function(value, padding = false) {
  const h = Math.floor(value / 60)
  const m = value % 60
  return (padding ? zero_padding(h, 2) : h) + ':' + zero_padding(m, 2)
}

const clock2number = function(value) {
  if (String(value).indexOf(':') === -1) {
    return value
  }
  const [h, m] = value.split(':')
  return h * 60 + m * 1
}

const date2ymd = function(value) {
  if (!value) {
    return ''
  }
  return formatter(value, 'YYYY-M-D')
}

const date2y = function(value) {
  if (!value) {
    return ''
  }
  return formatter(value, 'YYYY')
}

const date2m = function(value) {
  if (!value) {
    return ''
  }
  return formatter(value, 'M')
}

const date2d = function(value) {
  if (!value) {
    return ''
  }
  return formatter(value, 'D')
}

const date2w = function(value) {
  if (!value) {
    return ''
  }
  return formatter(value, 'dd')
}

const date2his = function(value) {
  if (!value) {
    return ''
  }
  return formatter(value, 'HH:mm:ss')
}

const date2hi = function(value) {
  if (!value) {
    return ''
  }
  return formatter(value, 'HH:mm')
}

const shortenTime = function(his) {
  if (!his) {
    return his
  }
  const [hour, minute] = his.split(':')
  return hour + ':' + minute
}

export {
  number2clock,
  clock2number,
  date2ymd,
  date2y,
  date2m,
  date2d,
  date2w,
  date2his,
  date2hi,
  shortenTime,
}
