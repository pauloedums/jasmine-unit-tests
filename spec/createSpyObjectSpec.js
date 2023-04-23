
describe('CreateSpyObj', function() {
    var Calculadora;

    beforeAll(() => {
        Calculadora = jasmine.createSpyObj("Calculadora", 
        ["somar", "subtrair"]);
        Calculadora.somar.and.returnValue(5);
    });

    
    it('deve demonstrar o uso do jasmine.createSpyObj', function() {
        const retorno = Calculadora.somar(1,2);
        expect(Calculadora.somar).toHaveBeenCalled();
        expect(Calculadora.somar).toHaveBeenCalledWith(1,2);
    });
        
});
    