/*
 * Função Javascript global do Jasmine que é
 * executada antes de cada teste
 * 
 * Por ser executada depois de cada teste,
 * serve para reiniciar um status
 * 
 * Pode também executar uma ação depois de cada teste
 * 
*/
describe('AfterEach', () => {
    let contador = 0;

    beforeEach(() => {
        contador++;
    });
        
    afterEach(() => {
        contador = 0;
    });
        
    it('deve garantir o valor 1 para o contador', () => {
        expect(contador).toEqual(1);
    });
    
    it('deve ainda garatir o contador com valor 1', () => {
        expect(contador).toEqual(1);
    });
});