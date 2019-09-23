/*
 * Função Javascript global do Jasmine que é
 * executada antes de cada teste
 * 
 * Por ser executada antes de cada teste,
 * serve para inicializar ou reiniciar um status
 * 
 * Pode também executar uma ação antes de cada teste
 * 
*/
describe('BeforeEach', () => {

    let contador = 0;
    
    beforeEach(() => {
        contador++;
    });
        
    it('deve incrementar o contador para 1', () => {
        expect(contador).toEqual(1);
    });
    
    it('deve incrementar o contador para 2', () => {
        expect(contador).toEqual(2);
    });
});