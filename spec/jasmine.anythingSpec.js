
describe('jasmine.anything', function() {
    var dobro;

    beforeAll(() => {
        dobro = jasmine.createSpy("dobro");
    });

    
    it('deve demonstrar o uso do jasmine.anything', function() {
        dobro(10);

        expect(dobro).toHaveBeenCalledWith(jasmine.anything());
        
        expect({}).toEqual(jasmine.anything());
    });
        
});
    