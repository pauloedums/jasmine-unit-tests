/*
 *  Realiza uma comparação dizendo se uma
 * variável ou objeto possui um valor inválido
 * 
 * Um valor será considerado inválido caso ele
 * seja 'false', '0', '', 'undefined', 'null', ou 'NaN'
 * 
 * Deve ser utilizado quando a verificação
 * abordar valores inválidos distintos,
 * baseados nas opções citadas acima
 * 
 * Prefira usar 'toBeTruphy' ao invés de
 * 'not.toBeFalsy' para deixar o código mais
 * fácil de compreender
 * 
*/
describe('ToBeFalsy', () => {
    it('deve validar o uso do ToBeFalsy', () => {
        let n2 = undefined;
        let n3 = 0;
        let n4 = '';
        let n5 = null;
        let n6 = NaN;
        let n7;

        expect(n2).toBeFalsy();
        expect(n3).toBeFalsy();
        expect(n4).toBeFalsy();
        expect(n5).toBeFalsy();
        expect(n6).toBeFalsy();
        expect(true).not.toBeFalsy();

    });
});