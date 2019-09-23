/*
 * Falha manual permite interromper um teste
 * lançando um erro
 * 
 * O Jasmine possui a função 'fail' para
 * falhar manualmente um teste
 * 
 * Utilizamos a falha manual para certificar
 * que uma operação não desejada não seja
 * executada
 * 
*/
describe('Fail', () => {
    it('deve validar o uso do Fail', () => {
        var operacao = (executar, callback) => {
            if(executar) {
                callback();
            }
        }   

        operacao(false, () => {
            fail("não deve executar função de callback");
        })

    });
});