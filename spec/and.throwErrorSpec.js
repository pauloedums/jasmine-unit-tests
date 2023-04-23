describe('and.throwError', () => {
    var Calculadora = {
        somar: (n1, n2) => {
          return n1 + n2;
        },
        subtrair: (n1, n2) => {
            return n1 - n2;
        }
    }

    beforeAll(() => {
      spyOn(Calculadora, "somar").and.throwError("dados inválidos")
      spyOn(Calculadora, "subtrair");
    })

    
    it('deve lançar um erro ao somar', function() {
        expect(() => {
            Calculadora.somar(5,2);
        } ).toThrowError("dados inválidos");
    });
        
});