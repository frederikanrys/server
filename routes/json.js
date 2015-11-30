var faker = require('faker');

var db = function () {

    var users = {users: []};
    for (var i = 0; i < 10; i++) {
        users.users.push({
                id: i,
                name: "name " + i,
                url: faker.internet.avatar()
            }
        );
    }
    return users;

};

module.exports = db();
