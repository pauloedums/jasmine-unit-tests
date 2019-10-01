/*
 * toHaveBeenCalledWith serve para verificar quais parâmetros um método do spy foi chamado
 * 
 * toHaveBeenCalledWith recebe como parâmetro os valores da chamada do método do spy, separados por vírgula
 * 
*/

describe('toHaveBeenCalledWith', () => {
    var calculadora = {
        somar: (n1, n2) => {
            return n1 + n2;
        }
    };

    beforeAll(() => {
        spyOn(calculadora, 'somar');
    });

    it('deve chamar o método somar com os parâmetros válidos', () => {
        calculadora.somar(1, 1);
        calculadora.somar(1, 2);
        expect(calculadora.somar).toHaveBeenCalledWith(1, 1);
        expect(calculadora.somar).toHaveBeenCalledWith(1, 2);
    });
});