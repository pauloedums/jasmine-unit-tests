/*
 *  Realiza a comparação utilizando
 * expressões regulares
 * 
 * Caso seja passada uma string como,
 * parâmetro, o comparador tentará encontrar
 * o texto passado dentro do valor a ser
 * comparado
 * 
*/
describe('ToMatch', () => {
    it('deve validar o uso do toMatch', () => {
        const texto = "teste do Jasmine";

        expect(texto).toMatch('Jasmine');
        expect(texto).toMatch(/jasmine/i);
        expect("12345-986").toMatch(/^\d{5}-\d{3}$/);

    });
});