const Engineer = require("../lib/Engineer")

test('verify gitHub username from getGitHub()', () => {
    const  engineer = new Engineer('name', 'id', 'email', 'gitHub');

    expect(engineer.getGitHub()).toBe('gitHub');
});

