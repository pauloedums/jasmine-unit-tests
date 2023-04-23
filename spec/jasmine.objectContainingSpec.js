
describe('jasmine.objectContaining', function() {
    var carro;

    beforeAll(() => {
        carro = {
            'ano': 2017
        };
    });

    
    it('deve demonstrar o uso do jasmine.objectContaining', function() {
        expect(carro).toEqual(jasmine.objectContaining({'ano': 2017}));
        expect(carro).not.toEqual(jasmine.objectContaining({'ano': 2016}));
    });
        
});
    