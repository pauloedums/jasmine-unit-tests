
describe('CreateSpy', function() {
    var somar;

    beforeEach(() => {
        somar = jasmine.createSpy("somar");
    });

    
    it('deve demonstrar o uso do jasmine.createSpy', function() {
        somar(1,2);
        expect(somar).toHaveBeenCalled();
        expect(somar).toHaveBeenCalledWith(1,2);
    });
        
});
    