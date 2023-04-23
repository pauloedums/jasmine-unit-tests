describe('Calls.all', () => {
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

    it('deve demonstrar o uso do calls.all', () => {
      Calculadora.somar(1, 1);
      Calculadora.somar(2,2);
      const retorno = Calculadora.somar.calls.all();
      expect(retorno[1].object).toEqual(Calculadora);
      expect(retorno[1].args).toEqual([2,2]);
      expect(retorno[1].returnValue).toEqual(10);
    }); 


});