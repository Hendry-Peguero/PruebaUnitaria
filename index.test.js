const helloWorld = require('./index');

test('Retorna "Hola Mundo"', () => {
    expect(helloWorld()).toBe("Hola Mundo");
});
