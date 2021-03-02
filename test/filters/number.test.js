import { number_format, remove_comma, toFixed, zero_padding } from 'src/filters/number'

describe('Test of filters about number', () => {
  describe('number_format', () => {
    it('Natural', () => {
      expect(number_format('1234567')).toBe('1,234,567')
    })

    it('Decimal', () => {
      expect(number_format('1234.567')).toBe('1,234.567')
    })

    it('Negative', () => {
      expect(number_format('-1234567')).toBe('-1,234,567')
    })

    it('Empty', () => {
      expect(number_format('')).toBe('')
    })

    it('0', () => {
      expect(number_format(0)).toBe(0)
    })

    it('Stringified 0', () => {
      expect(number_format('0')).toBe('0')
    })

    it('Alphabet', () => {
      expect(number_format('ABC')).toBe('ABC')
    })

    it('Japanese', () => {
      expect(number_format('あいうえお')).toBe('あいうえお')
    })
  })

  describe('remove_comma', () => {
    it('Natural', () => {
      expect(remove_comma('1,234,567')).toBe(1234567)
    })

    it('Decimal', () => {
      expect(remove_comma('1,234.567')).toBe(1234.567)
    })

    it('Negative', () => {
      expect(remove_comma('-1,234,567')).toBe(-1234567)
    })

    it('Empty', () => {
      expect(number_format('')).toBe('')
    })

    it('Alphabet', () => {
      expect(remove_comma('ABC')).toBe('ABC')
    })

    it('Alphabet with comma', () => {
      expect(remove_comma('ABC,DEF')).toBe('ABCDEF')
    })

    it('Japanese', () => {
      expect(remove_comma('あいうえお')).toBe('あいうえお')
    })

    it('Japanese with comma', () => {
      expect(remove_comma('あいうえお,かきくけこ')).toBe('あいうえおかきくけこ')
    })
  })

  describe('toFixed', () => {
    it('Natural', () => {
      expect(toFixed(1234, 2)).toBe('1234.00')
    })

    it('Decimal', () => {
      expect(toFixed('1.234', 2)).toBe('1.23')
    })

    it('Negative decimal', () => {
      expect(toFixed('-1.234', 2)).toBe('-1.23')
    })

    it('Empty', () => {
      expect(toFixed('', 2)).toBe('')
    })

    it('Alphabet', () => {
      expect(toFixed('ABC', 2)).toBe('ABC')
    })

    it('Japanese', () => {
      expect(toFixed('あいうえお', 2)).toBe('あいうえお')
    })
  })

  describe('zero_padding', () => {
    it('Number', () => {
      expect(zero_padding(12, 3)).toBe('012')
    })
    it('Stringified Number', () => {
      expect(zero_padding('12', 3)).toBe('012')
    })

    it('Decimal', () => {
      expect(zero_padding(1.23, 5)).toBe('01.23')
    })

    it('Negative', () => {
      expect(zero_padding(-123, 5)).toBe('-0123')
    })

    it('Over length', () => {
      expect(zero_padding(1234, 2)).toBe('1234')
    })

    it('Empty', () => {
      expect(zero_padding('', 2)).toBe('00')
    })

    it('Alphabet', () => {
      expect(zero_padding('ABC', 5)).toBe('ABC')
    })

    it('Japanese', () => {
      expect(zero_padding('あいうえお', 7)).toBe('あいうえお')
    })
  })
})
