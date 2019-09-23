/*
 *  Realiza a busca por determinado item em
 * uma array
 * 
 * Também pode ser utilizado para buscar
 * uma substring dentro de uma string
 * 
 * Não suporta busca por expressões regulares
 * 
*/
describe('ToContain', () => {
    it('deve validar o uso do ToContain', () => {
        let texto = 'Meu nome é Marcio';
        let frutas = ['laranja', 'banana', 'pera'];

        expect(texto).toContain('Marcio');
        expect(texto).not.toContain('marcio');
        
        expect(frutas).toContain('laranja');
        expect(frutas).not.toContain('uva');

    });
});