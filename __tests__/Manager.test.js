const Manager = require("../lib/Manager");

test('verify officeNumber and role from getOfficeNumber()', () => {
    const  manager = new Manager('name', 'id', 'email', 'officeNumber');

    expect(manager.getOfficeNumber()).toBe('officeNumber');
});
