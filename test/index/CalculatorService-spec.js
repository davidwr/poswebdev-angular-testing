describe('CalculatorService', () => {
  var service

  beforeEach(module('poswebdev'))
  beforeEach(inject(($injector) => {
    service = $injector.get('CalculatorService')
  }))

  it('sumTwoValues', () => {
    var a = 1
    var b = 2

    expect(service.sumTwoValues(a, b)).toEqual(3)
  })

  it('multiplyTwoValues', () => {
    var a = 5
    var b = 5

    expect(service.multiplyTwoValues(a, b)).toEqual(25)
  })

  it('subtractTwoValues', () => {
    var a = 4
    var b = 1

    expect(service.subtractTwoValues(a, b)).toEqual(3)
  })

  it('divideTwoValues', () => {
    var a = 25
    var b = 5

    expect(service.divideTwoValues(a, b)).toEqual(5)
  })
})