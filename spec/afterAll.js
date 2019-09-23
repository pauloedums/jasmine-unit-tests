/*
 * Função Javascript global do Jasmine que é
 * executada uma única vez depois da
 * execução dos testes
 * 
 * Por ser executada depois de todos os
 * testes, serve para limpar algum status global
 * 
 * 
*/
describe('beforeAll', () => {
    let contador = 0;

    beforeAll(() => {
        contador = 10;
    });
    
    afterAll(() => {
        contador = 0;
    });
                
    it('deve exibir o contador com valor 10', () => {
        expect(contador).toEqual(10);
    });
    
    it('deve manter o contador com valor 10', () => {
        expect(contador).toEqual(10);
    });

});