//const { test, expect } = require('@jest/globals');
const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('verify name from getname() method', () => {
    const employee = new Employee('name', 'id', 'email');

    expect(employee.getName()).toBe('name');
    expect(employee.getId()).toBe('id');
    expect(employee.getEmail()).toBe('email');
});
