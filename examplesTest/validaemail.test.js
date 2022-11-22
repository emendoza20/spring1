const ValidaEmail = require('./validaemail')

test('email emendoza867@gmail.com -> true',() =>{
    expect(ValidaEmail.isValidEmail('emendoza867@gmail.com')).toBe(true)

});

test('email 1 -> false',() =>{
    expect(ValidaEmail.isValidEmail('1')).toBe(false)

});