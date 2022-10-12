const Engineer = require('../lib/Engineer')

const engineerTest =new Engineer('Dennis', 1234, 'frozzel@me.com', 'frozzel');



describe('Engineer', ()=>{
    it('has name', ()=>{
        expect( engineerTest.name).toEqual(expect.any(String));
        
    }) 

    it('has email ', ()=>{
        expect( engineerTest.email).toEqual(expect.any(String));
    })

    it('has id', ()=>{
        expect( engineerTest.id).toEqual(expect.any(Number));
    })
    
    it('has github username', ()=>{
        expect( engineerTest.github).toEqual(expect.any(String));
    })
})