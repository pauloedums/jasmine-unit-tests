/*
 * Verifica se uma exceção é lançada por um
 * método
 * 
 * Valida o tipo da exceção lançada
 * 
 * Valida a mensagem de erro contida na exceção
 * 
 * Suporta expressão regular na validação da 
 * mensagem de erro da exceção
 * 
 * Deve ser utilizada para maior controle do erro lançado
 * 
*/
describe('ToThrowError', () => {
    it('deve validar o uso do ToThrowError', () => {
        let somar = (n1, n2) => {
            if(n1 <= 0 || n2 <= 0) {
                throw new TypeError("Deve ser maior que 0");
            }
        };

        expect(() => { somar(0, 0); }).toThrowError();
        expect(() => { somar(0, 0); }).toThrowError("Deve ser maior que 0");
        expect(() => { somar(0, 0); }).toThrowError(/maior que 0/);
        expect(() => { somar(0, 0); }).toThrowError(TypeError);
        expect(() => { somar(0, 0); }).toThrowError(TypeError, "Deve ser maior que 0");
        expect(() => { somar(1, 1); }).not.toThrowError();
        
        
    });
});