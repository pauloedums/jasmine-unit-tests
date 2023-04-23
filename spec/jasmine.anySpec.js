
describe('jasmine.any', function() {
    var dobro;

    beforeAll(() => {
        dobro = jasmine.createSpy("dobro");
    });

    
    it('deve demonstrar o uso do jasmine.any', function() {
        dobro(10);

        expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));
        
    });
        
});
    