/*
 * toHaveBeenCalled serve para informar se um método do spy foi executado ao menos uma vez
 * 
 * toHaveBeenCalled não possui parâmetros
 * 
*/

describe('toHaveBeenCalled', () => {
    var calculadora = {
        somar: (n1, n2) => {
            return n1 + n2;
        }
    };

    beforeAll(() => {
        spyOn(calculadora, 'somar');
    });

    it('deve chamar o método somar ao menos uma vez', () => {
        expect(calculadora.somar).not.toHaveBeenCalled();
        calculadora.somar(1, 1);
        expect(calculadora.somar).toHaveBeenCalled();
    });
});