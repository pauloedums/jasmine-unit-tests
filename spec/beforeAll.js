/*
 * Função Javascript global do Jasmine que é
 * executada uma única vez antes da
 * execução dos testes
 * 
 * Por ser executada antes de todos os
 * testes, serve para inicializar um status, criar
 * objetos
 * 
 * 
*/
describe('beforeAll', () => {
    let contador = 0;

    beforeAll(() => {
        contador = 10;
    });

    beforeEach(() => {
        contador++;
    });
                
    it('deve garantir o valor 11 para o contador', () => {
        expect(contador).toEqual(11);
    });
    
    it('deve ainda garatir valor 12 para o contador', () => {
        expect(contador).toEqual(12);
    });

});