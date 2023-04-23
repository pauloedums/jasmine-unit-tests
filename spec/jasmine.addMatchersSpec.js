var meuMatcher = {
    toBeValidEmail: (util, customEqualityTesters) => {
      var emailRegex = /\S+@\S+\.\S+/;
      return {
        compare: (actual, expected) => {
          var result = {};
          if(expected === undefined){
            result.pass = emailRegex.test(actual);
          }else {
            result.pass = expected.test(expected);
          }

          if(result.pass){
            result.message = actual + " é um email válido";
          } else {
            result.message = actual + " não é um email válido";
          }
          return result;
        }
      }
    }
};
describe('jasmine.addMatchers', function() {
    

    beforeEach(() => {
        jasmine.addMatchers(meuMatcher);
    });

    
    it('deve validar se um email é válido', function() {
        expect("email@dominio.com").toBeValidEmail();
        expect("email").not.toBeValidEmail();
    });
        
});
    