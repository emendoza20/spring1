const sum=(a,b)=>a+b;
test('sum 1 + 3 equals 4',()=>{
    const result =sum(1,3);
    expect(result).toEqual(4);


});