const  googleSearch = require('./script');

dbMock =[
'dog.com',
'cheesepuff.com',
'disney.com',
'dogpictures.com'
];
it('is a silly test', ()=>{
	expect('hello').toBe('hello');
	//make an assertion using this function
	//googleSearch('testest',dbMock )
})
it('is searching google', () => {
	console.log(googleSearch)
	expect(googleSearch('testtest',dbMock)).toEqual([])
	expect(googleSearch('dog',dbMock)).toEqual(['dog.com'])
})