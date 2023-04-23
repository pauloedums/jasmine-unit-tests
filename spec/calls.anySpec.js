describe('Calls.any', () => {
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


    it('deve demonstrar o uso do calls.any', () => {
        Calculadora.somar(1,1);
        expect(Calculadora.somar.calls.any()).toBeTruthy();
    });

});