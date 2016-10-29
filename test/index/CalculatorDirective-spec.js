describe('calculatorDirective', () => {
  var $compile, $rootScope;

  beforeEach(module('poswebdev'))
  beforeEach(module('js/index/templateDirective.html'))
  beforeEach(inject((_$compile_, _$rootScope_) => {
    $compile = _$compile_
    $rootScope = _$rootScope_
  }))

  describe('Render directive', ()  => {
    it('Render variable and variableTwo', () => {
      $rootScope.newValue = 'LOREM IPSUM'
      var elemento = $compile('<calculator-directive variable="{{newValue}}" variable-two="IPSUM DOLOR"></calculator-directive>')($rootScope)
      $rootScope.$digest()
      expect(elemento.find('h1').text()).toEqual($rootScope.newValue)
      expect(elemento.find('h2').text()).toEqual('IPSUM DOLOR')
    })

    it('Render variable is change', () => {
      $rootScope.newValue = 'LOREM IPSUM'
      var elemento = $compile('<calculator-directive variable="{{newValue}}" variable-two="IPSUM DOLOR"></calculator-directive>')($rootScope)
      $rootScope.$digest()
      expect(elemento.find('h1').text()).toEqual($rootScope.newValue)
      expect(elemento.find('h2').text()).toEqual('IPSUM DOLOR')

      $rootScope.newValue = 'MUÇUM IPSUM'
      $rootScope.$digest()
      expect(elemento.find('h1').text()).toEqual($rootScope.newValue)
    })
  })
})