/*
 * Compara se um valor numérico é menor
 do que outro valor
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
describe('ToBeLessThan', () => {
    it('deve validar o uso do ToBeLessThan', () => {
        let PI = 3.1415;
        expect(3).toBeLessThan(PI);
        expect(3.5).not.toBeLessThan(PI);
    });
});