var express = require('express');
var router = express.Router();

const ApiService = require('../service/sqlService.js');

//라우터 
router.get('/getMethod/:page', async function(req, res, next) {


    let pageIndex = req.params.page;

    // 디비에서 사용자정보를 가져온다 = 페이징
    let totalUserCount = await ApiService.getUserCount();

    let countPerPage = 3;
    let totalPageCount = Math.ceil(totalUserCount / countPerPage);

    let offset = 0;

    if (pageIndex > totalPageCount) {
        pageIndex = totalPageCount;
    }
    
    if (pageIndex > 1) {
        offset = (pageIndex - 1) * countPerPage;
    }


    // 디비에서 해당페이지의 데이터를 가져온다
    let fetchedUsersPerPage = await ApiService.getUsersPerPage(offset, countPerPage);

    res.send({
        pageIndex: pageIndex,
        countPerPage: countPerPage,
        totalPageCount: totalPageCount,
        totalUserCount: totalUserCount,
        fetchedUsersPerPage: fetchedUsersPerPage
    });

});


/* GET home page. */
router.get('/user', async function(req, res, next) {
    // 뷰를 보여준다.
    // res.render('index', { title: 'Express' });

    // db에서 사용자정보를 가져온다
    let fetchedUsers = await ApiService.getUsers();


    res.send({
        status: 0,
        fetchedUsers: fetchedUsers
    });

});


router.post('/user', async function(req, res) {

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;


    let queryResult = await ApiService.addUser(firstName, lastName, email, password);

    res.send({
        result: queryResult
    });
});

router.put('/user/:id', async function(req, res) {

    let id = req.params.id;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;

    let queryResult = await ApiService.updateUser(id, firstName, lastName, email, password);

    res.send({
        result: queryResult
    });
});

router.delete('/user/:id', async function(req, res) {

    let id = req.params.id;
    console.log("id: " + id);

    let queryResult = await ApiService.deleteUser(id);

    res.send({
        result: queryResult
    });
});

module.exports = router;