const signInButtonOnClickHandler = () => {
    AccountService.getInstance().signIn();
};

class AccountService {

    authUsername = "aaa";
    authPassword = "1234";

    // 변수명 앞의 # = private
    static #instance = null;

    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new AccountService();
        }
        return this.#instance;
    }

    signIn() {
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");
        const username = usernameInput.value;
        const password = passwordInput.value;

        if(username !== this.authUsername || password !== this.authPassword) {
            alert("사용자 정보를 확인하세요");
            return;
        }
        alert("로그인 성공!");
    }
}




