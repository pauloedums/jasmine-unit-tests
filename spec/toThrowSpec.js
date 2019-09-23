/*
 * Verifica se uma exceção é lançada por um
 * método
 * 
 * Não realiza a validação em detalhe o tipo
 * de exceção lançada, apenas certifica que
 * um erro ocorreu na execução da função
 * 
 * Deve ser utilizada quando deseja apenas
 * certificar que um erro ocorreu, sem seu
 * preocupar com detalhes como tipo ou
 * mensagem de erro
 * 
*/
describe('ToThrow', () => {
    it('deve validar o uso do ToThrow', () => {
        let multiplicar = () => {
            numero * 10;
        };
        let somar = (n1, n2) => {
            return n1 + n2;
        };

        expect(multiplicar).toThrow();
        expect(somar).not.toThrow();
    });
});