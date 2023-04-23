describe('Calls.mostRecent', () => {
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

    it('deve demonstrar o uso do calls.mostRecent', () => {
      Calculadora.somar(1, 1);
      Calculadora.somar(2,2);
      const retorno = Calculadora.somar.calls.mostRecent();
      expect(retorno.object).toEqual(Calculadora);
      expect(retorno.args).toEqual([2,2]);
      expect(retorno.returnValue).toEqual(10);
    }); 


});