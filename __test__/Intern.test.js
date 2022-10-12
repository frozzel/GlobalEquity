const Intern = require('../lib/Intern')

const internTest =new Intern('Dennis', 1234, 'frozzel@me.com', 'Georgia Tech');



describe('Engineer', ()=>{
    it('has name', ()=>{
        expect(internTest.name).toEqual(expect.any(String));
        
    }) 

    it('has email ', ()=>{
        expect( internTest.email).toEqual(expect.any(String));
    })

    it('has id', ()=>{
        expect( internTest.id).toEqual(expect.any(Number));
    })
    
    it('has github username', ()=>{
        expect( internTest.school).toEqual(expect.any(String));
    })
})