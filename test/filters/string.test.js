import { nl2br, lowercase, uppercase, capitalize } from 'src/filters/string'

describe('Test of filters about string', () => {
  describe('nl2br', () => {
    it('Braking simply', () => {
      const testString = `あいうえお
かきくけこ`
      expect(nl2br(testString)).toBe('あいうえお<br>かきくけこ')
    })

    it('Breaking first line and last line', () => {
      const testString = `
ABCD
EFG
`
      expect(nl2br(testString)).toBe('<br>ABCD<br>EFG<br>')
    })

    it('No breaking', () => {
      expect(lowercase('あいうえお')).toBe('あいうえお')
    })
  })
  describe('lowercase', () => {
    it('All uppercase', () => {
      expect(lowercase('ABC')).toBe('abc')
    })

    it('Second character only', () => {
      expect(lowercase('eFg')).toBe('efg')
    })

    it('Japanese', () => {
      expect(lowercase('あいうえお')).toBe('あいうえお')
    })
  })

  describe('uppercase', () => {
    it('All lowercase', () => {
      expect(uppercase('abc')).toBe('ABC')
    })

    it('Second character only', () => {
      expect(uppercase('eFg')).toBe('EFG')
    })

    it('Japanese', () => {
      expect(lowercase('あいうえお')).toBe('あいうえお')
    })
  })

  describe('capitalize', () => {
    it('All lowercase', () => {
      expect(capitalize('abc')).toBe('Abc')
    })

    it('Second character is uppercase', () => {
      expect(capitalize('eFg')).toBe('Efg')
    })

    it('Japanese', () => {
      expect(lowercase('あいうえお')).toBe('あいうえお')
    })
  })
})
