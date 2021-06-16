const Intern = require("../lib/Intern")

test('verify school name from getSchool()', () => {
    const  intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.getSchool()).toBe('school');
});
