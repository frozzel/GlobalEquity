const Manager = require('../lib/Manager')

const mngTest =new Manager('Dennis', 1234, 'frozzel@me.com', 'Georgia Tech');



describe('Manager', ()=>{
    it('has name', ()=>{
        expect(mngTest.name).toEqual(expect.any(String));
        
    }) 

    it('has email ', ()=>{
        expect( mngTest.email).toEqual(expect.any(String));
    })

    it('has id', ()=>{
        expect( mngTest.id).toEqual(expect.any(Number));
    })
    
    it('has github username', ()=>{
        expect( mngTest.phone).toEqual(expect.any(String));
    })
})