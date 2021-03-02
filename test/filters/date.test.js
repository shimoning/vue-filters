import {
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
} from 'src/filters/date'
import dayjs from 'dayjs'

describe('Test of filters about date', () => {
  describe('number2clock', () => {
    it('Simply', () => {
      expect(number2clock('1234')).toBe('20:34')
    })

    it('Only minute is padded', () => {
      expect(number2clock('364')).toBe('6:04')
    })

    it('Zero padded', () => {
      expect(number2clock('364', true)).toBe('06:04')
    })

    it('Over 100 hours', () => {
      expect(number2clock('6503')).toBe('108:23')
    })
  })

  describe('clock2number', () => {
    it('Simply', () => {
      expect(clock2number('12:34')).toBe(754)
    })

    it('Minute with zero padded ', () => {
      expect(clock2number('1:03')).toBe(63)
    })

    it('Without zero padded', () => {
      expect(clock2number('1:3', true)).toBe(63)
    })
  })

  describe('date2ymd', () => {
    it('String', () => {
      expect(date2ymd('2020-01-30')).toBe('2020-1-30')
    })
    it('String with padding', () => {
      expect(date2ymd('2020-01-30', true)).toBe('2020-01-30')
    })
    it('String with time', () => {
      expect(date2ymd('2020-01-30 06:07:08', true)).toBe('2020-01-30')
    })

    it('String broken', () => {
      expect(date2ymd('2020-1-3')).toBe('2020-1-3')
    })
    it('String separated slash', () => {
      expect(date2ymd('2020/1/3')).toBe('2020-1-3')
    })

    it('Slash separating', () => {
      expect(date2ymd('2020-1-3', false, '/')).toBe('2020/1/3')
    })

    it('Date object', () => {
      expect(date2ymd(new Date('2020-01-30'))).toBe('2020-1-30')
    })
    it('Date object to zero padded', () => {
      expect(date2ymd(new Date('2020-01-30'), true)).toBe('2020-01-30')
    })

    it('Dayjs object', () => {
      expect(date2ymd(dayjs('2020-01-30'))).toBe('2020-1-30')
    })
    it('Dayjs object to zero padded', () => {
      expect(date2ymd(dayjs('2020-01-30'), true)).toBe('2020-01-30')
    })
  })

  describe('date2y', () => {
    it('Simply', () => {
      expect(date2y('2020-01-30')).toBe('2020')
    })

    it('String broken', () => {
      expect(date2y('2020-1-3')).toBe('2020')
    })

    it('Date object', () => {
      expect(date2y(new Date('2020-01-30'))).toBe('2020')
    })

    it('Dayjs object', () => {
      expect(date2y(dayjs('2020-01-30'))).toBe('2020')
    })
  })

  describe('date2m', () => {
    it('Simply', () => {
      expect(date2m('2020-01-30')).toBe('1')
    })
    it('Simply to zero padded', () => {
      expect(date2m('2020-01-30', true)).toBe('01')
    })

    it('String broken', () => {
      expect(date2m('2020-1-3')).toBe('1')
    })
    it('String broken to zero padded', () => {
      expect(date2m('2020-1-3', true)).toBe('01')
    })

    it('Date object', () => {
      expect(date2m(new Date('2020-01-30'))).toBe('1')
    })
    it('Date object to zero padded', () => {
      expect(date2m(new Date('2020-01-30'), true)).toBe('01')
    })

    it('Dayjs object', () => {
      expect(date2m(dayjs('2020-01-30'))).toBe('1')
    })
    it('Dayjs object to zero padded', () => {
      expect(date2m(dayjs('2020-01-30'), true)).toBe('01')
    })
  })

  describe('date2d', () => {
    it('Simply', () => {
      expect(date2d('2020-01-03')).toBe('3')
    })
    it('Simply to zero padded', () => {
      expect(date2d('2020-01-03', true)).toBe('03')
    })

    it('String broken', () => {
      expect(date2d('2020-1-3')).toBe('3')
    })
    it('String broken to zero padded', () => {
      expect(date2d('2020-1-3', true)).toBe('03')
    })

    it('Date object', () => {
      expect(date2d(new Date('2020-01-03'))).toBe('3')
    })
    it('Date object to zero padded', () => {
      expect(date2d(new Date('2020-01-03'), true)).toBe('03')
    })

    it('Dayjs object', () => {
      expect(date2d(dayjs('2020-01-03'))).toBe('3')
    })
    it('Dayjs object to zero padded', () => {
      expect(date2d(dayjs('2020-01-03'), true)).toBe('03')
    })
  })

  describe('date2w', () => {
    it('Simply', () => {
      expect(date2w('2020-01-03')).toBe('金')
    })

    it('String broken', () => {
      expect(date2w('2020-1-3')).toBe('金')
    })

    it('Date object', () => {
      expect(date2w(new Date('2020-01-03'))).toBe('金')
    })

    it('Dayjs object', () => {
      expect(date2w(dayjs('2020-01-03'))).toBe('金')
    })
  })

  describe('date2his', () => {
    it('Simply', () => {
      expect(date2his('2020-01-30 06:07:08')).toBe('6:7:8')
    })
    it('Simply to zero padded', () => {
      expect(date2his('2020-01-30 06:07:08', true)).toBe('06:07:08')
    })

    it('String broken', () => {
      expect(date2his('2020-01-30 6:7:8')).toBe('6:7:8')
    })
    it('String broken to zero padded', () => {
      expect(date2his('2020-01-30 6:7:8', true)).toBe('06:07:08')
    })

    it('Date object', () => {
      expect(date2his('2020-01-30 06:07:08')).toBe('6:7:8')
    })
    it('Date object to zero padded', () => {
      expect(date2his('2020-01-30 06:07:08', true)).toBe('06:07:08')
    })

    it('Dayjs object', () => {
      expect(date2his('2020-01-30 06:07:08')).toBe('6:7:8')
    })
    it('Dayjs object to zero padded', () => {
      expect(date2his('2020-01-30 06:07:08', true)).toBe('06:07:08')
    })
  })

  describe('date2hi', () => {
    it('Simply', () => {
      expect(date2hi('2020-01-30 06:07:08')).toBe('6:7')
    })
    it('Simply to zero padded', () => {
      expect(date2hi('2020-01-30 06:07:08', true)).toBe('06:07')
    })

    it('String broken', () => {
      expect(date2hi('2020-01-30 6:7:8')).toBe('6:7')
    })
    it('String broken to zero padded', () => {
      expect(date2hi('2020-01-30 6:7:8', true)).toBe('06:07')
    })

    it('Date object', () => {
      expect(date2hi('2020-01-30 06:07:08')).toBe('6:7')
    })
    it('Date object to zero padded', () => {
      expect(date2hi('2020-01-30 06:07:08', true)).toBe('06:07')
    })

    it('Dayjs object', () => {
      expect(date2hi('2020-01-30 06:07:08')).toBe('6:7')
    })
    it('Dayjs object to zero padded', () => {
      expect(date2hi('2020-01-30 06:07:08', true)).toBe('06:07')
    })
  })

  describe('shortenTime', () => {
    it('Simply', () => {
      expect(shortenTime('06:07:08')).toBe('06:07')
    })
    it('Simply to zero padded', () => {
      expect(shortenTime('06:07:08', true)).toBe('06:07')
    })

    it('Over 24 hours', () => {
      expect(shortenTime('123:07:08')).toBe('123:07')
    })

    it('String broken', () => {
      expect(shortenTime('6:7:8')).toBe('6:07')
    })
    it('String broken to zero padded', () => {
      expect(shortenTime('6:7:8', true)).toBe('06:07')
    })
  })
})
