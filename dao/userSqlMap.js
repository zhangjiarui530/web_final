var userSqlMap = {
    add: 'insert into user(username, password) values(?, ?)',//注册时用
    getByUsername: 'select username, password from user where username = ?'//登陆时用
};

module.exports = userSqlMap;