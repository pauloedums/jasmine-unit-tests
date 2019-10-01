/*
 * and.returnValue serve para informar ao spy o valor de retorno de determinado método
 * 
 * and.returnValue deve ser aplicado ao objeto spy
 * 
*/

describe('and.returnValue', () => {
    var calculadora = {
        somar: (n1, n2) => {
            return n1 + n2;
        },
        subtrair: (n1, n2) => {
            return n1 - n2;
        }
    };

    beforeAll(() => {
        spyOn(calculadora, 'somar').and.returnValue(10);
        spyOn(calculadora, 'subtrair');
    });

    it('deve retornar 10 para o método somar', () => {
        expect(calculadora.somar(1,2)).toEqual(10);
    });
});