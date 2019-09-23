/*
 * Compara se um valor numérico é maior
 * que outro valor
 * 
 * Realiza a conversão para valor numérico
 * antes da comparação, podendo o valor ser 
 * passado em formato texto
 * 
 * Prefira usar 'toBeGreaterThan' ao invés de
 * 'not.toBelessThan', para deixar o código
 * de mais fácil compreensão
 * 
 * Para valores iguais utilize o 'toEqual'
 * 
*/
describe('ToBeGreaterThan', () => {
    it('deve validar o uso do ToBeGreaterThan', () => {
        let PI = 3.1415;
        expect(4).toBeGreaterThan(PI);
        expect("5").toBeGreaterThan(PI);
        expect(3).not.toBeGreaterThan(PI);
    });
});