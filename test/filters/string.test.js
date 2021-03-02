import { nl2br, lowercase, uppercase, capitalize } from 'src/filters/string'

describe('Test of filters about string', () => {
  it('nl2br', () => {
    expect(nl2br(`あいうえお
かきくけこ`)).toBe('あいうえお<br>かきくけこ')
    expect(nl2br(`
ABCD
EFG
`)).toBe('<br>ABCD<br>EFG<br>')
  })

  it('lowercase', () => {
    expect(lowercase('ABC')).toBe('abc')
    expect(lowercase('eFg')).toBe('efg')
    expect(lowercase('あいうえお')).toBe('あいうえお')
  })

  it('uppercase', () => {
    expect(uppercase('abc')).toBe('ABC')
    expect(uppercase('eFg')).toBe('EFG')
    expect(lowercase('あいうえお')).toBe('あいうえお')
  })

  it('capitalize', () => {
    expect(capitalize('abc')).toBe('Abc')
    expect(capitalize('eFg')).toBe('Efg')
    expect(lowercase('あいうえお')).toBe('あいうえお')
  })
})
