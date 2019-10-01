/*
 * toHaveBeenCalledTimes serve para verificar quantas vezes um método do spy foi chamado
 * 
 * toHaveBeenCalledTimes recebe como parâmetro o número de execuções a ser verificado
 * 
*/

describe('toHaveBeenCalledTimes', () => {
    var calculadora = {
        somar: (n1, n2) => {
            return n1 + n2;
        }
    };

    beforeAll(() => {
        spyOn(calculadora, 'somar');
    });

    it('deve chamar o método somar duas vezes', () => {
        calculadora.somar(1, 1);
        calculadora.somar(1, 2);
        expect(calculadora.somar).toHaveBeenCalledTimes(2);
    });
});