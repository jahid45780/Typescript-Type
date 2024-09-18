var userInfo1;
var userInfo2;
var userInfo34;
userInfo1 = function () {
    console.log("Jahid");
};
userInfo2 = function (userName) {
    console.log("".concat(userName, " this name "));
};
userInfo34 = function (userName, age) {
    return " name ".concat(userName, " he ").concat(age, " year old ");
};
userInfo1();
userInfo2("Jahid");
console.log(userInfo34("korim", 4));
