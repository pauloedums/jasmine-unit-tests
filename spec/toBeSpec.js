/*
 *  Realiza a comparação com o operador
 * '===', que compara o valor e também o tipo
 * do objeto
 * 
 * Deve ser utilizado para comparar valores
 * de forma mais efetiva pelo fato de também
 * verificar o tipo do objeto
*/
describe("ToBe", () => {
    it('deve validar o uso do toBe()', () => {
        const obj1 = { valor: true };
        const obj2 = { valor: true };

        expect(true).toBe(true);
        expect("Teste").toBe("Teste");

        expect(obj1).not.toBe(obj2);
    });
})