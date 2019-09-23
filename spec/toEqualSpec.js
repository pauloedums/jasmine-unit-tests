/*
 *  Realiza a comparação de dois elementos
 de modo muito similar ao 'toBe'
 * 
 * A única diferenção em relação ao 'toBe' é
 * que ele não compara o tipo do objeto,
 * somento seu valor
 * 
 * É recomendado seu uso para comparação
 * de valores literais
*/
describe('ToEqual', () => {
    it('deve validar o uso do toEqual', () => {
        const obj1 = { valor: true };
        const obj2 = { valor: true };
        expect(true).toEqual(true);
        expect(obj1).toEqual(obj2);
    });
});