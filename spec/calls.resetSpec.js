describe('Calls.reset', () => {
    var Calculadora = {
        somar: (n1, n2) => {
          return n1 + n2;
        },
        subtrair: (n1, n2) => {
            return n1 - n2;
        }
    }

    beforeAll(() => {
      spyOn(Calculadora, "somar").and.returnValue(10);
      spyOn(Calculadora, "subtrair");
    });

    it('deve demonstrar o uso do calls.reset', () => {
      Calculadora.somar(1, 1);
      Calculadora.somar(2,2);
      expect(Calculadora.somar.calls.any()).toBeTruthy();
      Calculadora.somar.calls.reset();
      expect(Calculadora.somar.calls.any()).toBeFalsy();
    }); 


});