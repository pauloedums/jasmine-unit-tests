/*
 * spyOn serve para criar um mock (objeto falso) a ser utilizado nos testes
 * 
 * Um objeto spy contém uma série de atributos que serão estudados ao longo do capítulo
 * 
 * A função spyOn recebe como parâmetros o nome do objeto e do método a serem utilizadas como mock
 * 
*/

describe('spyOn', () => {
    var calculadora = {
        somar: (n1, n2) => {
            return n1 + n2;
        }
    };

    beforeAll(() => {
        spyOn(calculadora, 'somar');
    });

    it('deve possuir o método somar como não definido', () => {
        expect(calculadora.somar(1, 1)).toBeUndefined();
    });
});