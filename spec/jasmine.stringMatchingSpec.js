
describe('jasmine.stringMatching', function() {
    let exibirTexto;

    beforeAll(() => {
        exibirTexto = jasmine.createSpy("exibirTexto");
    });

    
    it('deve demonstrar o uso do jasmine.stringMatching', function() {
        exibirTexto("Curso de Jasmine");
        expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching("Jasmine"));
        expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching(/jasmine/i));
        expect("Curso de Javascript").toEqual(jasmine.stringMatching("Javascript"));
    });
        
});
    