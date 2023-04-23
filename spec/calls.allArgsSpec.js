describe('Calls.allArgs', () => {
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
    });

    it('deve demonstrar o uso do calls.allArgs', () => {
      Calculadora.somar(1, 1);
      Calculadora.somar(2,2);
      expect(Calculadora.somar.calls.allArgs()).toEqual([[1,1],[2,2]]);
    }); 


});