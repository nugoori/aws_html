// window.onload = () => {

// }

// 정보를 담을때는 이렇게?
const user = {
    username: null,
    password: null,
    name: null,
    email: null,
    toString: () => {
        return "user(" + user.username + ", " + user.password + ", " + user.name + ", " + user.email + ")"; 
    },
}

user.username = "aaa";
user.password = "1234";
user.name = "김준일";
user.email = "aaa@aaa.com";

console.log(user.toString);
console.log(user);

class User {
    username;
    password;

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    usernameAndPasswodrCheck(username, password) {
        console.log("입력한 아이디: " + username);
        console.log("입력한 비밀번호: " + password);
        if(username !== this.username || password !== this.password) {
            alert("로그인 실패");
        }
        alert("로그인 성공");
    }
}


const bbb = new User("bbb", "1234");
bbb.usernameAndPasswodrCheck("bbb", "1234");



