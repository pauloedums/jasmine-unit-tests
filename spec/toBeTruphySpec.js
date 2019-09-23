/*
 *  Realiza uma comparação dizendo se uma
 * variável ou objeto possui um valor válido
 * 
 * Um valor será considerado válido caso ele
 * possua um valor diferente de 'false', '0', '', 
 * 'undefined', 'null', ou 'NaN'
 * 
 * Deve ser utilizado quando a verificação
 * abordar valores inválidos distintos,
 * baseados nas opções citadas acima
 * 
 * Prefira usar 'toBeFalsy' ao invés de
 * 'not.toBeTruphy' para deixar o código mais
 * fácil de compreender
 * 
*/
describe('ToBeTruphy', () => {
    it('deve validar o uso do ToBeTruphy', () => {
        let n1 = 10;
        let n2 = undefined;
        let n3 = 0;
        let n4 = '';
        let n5 = null;
        let n6 = NaN;
        let n7;

        expect(n1).toBeTruthy();
        expect('teste').toBeTruthy();
        expect(true).toBeTruthy();

        expect(n2).not.toBeTruthy();
        expect(n3).not.toBeTruthy();
        expect(n4).not.toBeTruthy();
        expect(n5).not.toBeTruthy();
        expect(n6).not.toBeTruthy();
        expect(n7).not.toBeTruthy();
        expect(false).not.toBeTruthy();

    });
});