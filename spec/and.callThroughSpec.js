/*
 * and.callThrough serve para informar ao spy que o método original deve ser executado
 * 
 * and.callThrough deve ser aplicado ao objeto spy
 * 
 * Nesse caso o método original será executado, e todos os recursos do spy serão mantidos e estarão disponíveis para verificação
 * 
*/

describe('and.callThrough', () => {
    var calculadora = {
        somar: (n1, n2) => {
            return n1 + n2;
        },
        subtrair: (n1, n2) => {
            return n1 - n2;
        }
    };

    beforeAll(() => {
        spyOn(calculadora, 'somar').and.callThrough();
        spyOn(calculadora, 'subtrair');
    });

    it('deve executar o método somar original', () => {
        expect(calculadora.somar(1,1)).toEqual(2);
        expect(calculadora.subtrair(2,1)).toBeUndefined();
    });
});