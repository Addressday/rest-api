const models = require("../models");


// 사용자의 총 카운트를 가져온다
async function getUserCount(){
    console.log("getUserCount() called");
    let userCount;
    await models.User.count()
    .then(count => {
        console.log("There are " + count + " projects!");
        userCount = count
    });

    return userCount;
}

//  db에서 사용자목록을 가져온다 = 페이징
async function getUsersPerPage(offset, limit) {
	console.log(`getUserCount() called / offset: ${offset}/ limit: ${limit}`);
    const users = await models.User.findAll({
        offset: offset,
        limit: limit
    });
    // console.log(users);
    return users;
}


// 함수 정의
// DB에서 사용자 목록을 가져온다.
async function getUsers() {
    const users = await models.User.findAll({
        // attributes: ['id', 'firstName']
    });
    console.log(users);
    return users;
}

// db에 사용자를 추가
async function addUser(firstName, lastName, email, password) {
    console.log(`sqlService.js - addUser() called / firstName: ${firstName}, lastName: ${lastName}, email: ${email}, password: ${password}`);
    const queryResult = await models.User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });
    return queryResult;
}

async function deleteUser(id) {
    console.log(`sqlService.js - deleteUser() called / id: ${id}`);
    const queryResult = await models.User.destroy({
        where: {
            id: id
        }
    });
    return queryResult;
}

async function updateUser(id, firstName, lastName, email, password) {
    console.log(`sqlService.js - addUser() called / firstName: ${firstName}, lastName: ${lastName}, email: ${email}, password: ${password}`);
    const queryResult = await models.User.update({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }, {
        where: {
            id: id
        }
    });
}

module.exports.getUsers = getUsers;
module.exports.addUser = addUser;
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser;

// 페이징 관련
module.exports.getUserCount = getUserCount;
module.exports.getUsersPerPage = getUsersPerPage;