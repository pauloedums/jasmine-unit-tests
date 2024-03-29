/*
 * Realiza a comparação de um objeto como
 * não sendo 'undefined'
 * 
 * Prefira usar 'toBeUndefined' ao invés de
 * 'not.toBeDefined' para deixar o código de
 * mais fácil compreensõa
 * 
*/
describe('ToBeDefined', () => {
    it('deve validar o uso do toBeDefined', () => {
        let n1 = 10;
        let n2;
        let n3 = undefined;

        expect(n1).toBeDefined();
        expect(null).toBeDefined();
        expect(NaN).toBeDefined();
        
        expect(n2).not.toBeDefined();
        expect(n3).not.toBeDefined();
            
    });
});