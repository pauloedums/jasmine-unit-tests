
describe('jasmine.clock', function() {
    
    beforeEach(() => {
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    })

    let dobro;

    beforeAll(() => {
      dobro = jasmine.createSpy("dobro");
    })

    
    it('deve demonstrar o uso o setTimeout', function() {
        setTimeout(() => {
          dobro(10);
        }, 1000);
        jasmine.clock().tick(1000);
        expect(dobro).toHaveBeenCalled();
    });

    it('deve demonstrar o uso o setInterval', function() {
        setInterval(() => {
          dobro(2);
        }, 500);
        jasmine.clock().tick();
        expect(dobro).toHaveBeenCalled();
    });
        
});
    