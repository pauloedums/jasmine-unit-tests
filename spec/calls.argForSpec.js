describe('Calls.argFor', () => {
    var Calculadora = {
        somar: (n1, n2) => {
          return n1 + n2;
        },
        subtrair: (n1, n2) => {
            return n1 - n2;
        }
    }

    beforeAll(() => {
      spyOn(Calculadora, "somar");
      spyOn(Calculadora, "subtrair");
    })


    it('deve demonstrar o uso do calls.argFor', () => {
      Calculadora.somar(1, 1);
      Calculadora.somar(2,2);
      expect(Calculadora.somar.calls.argsFor(0)).toEqual([1,1]);
      expect(Calculadora.somar.calls.argsFor(1)).toEqual([2,2]);
  });


});