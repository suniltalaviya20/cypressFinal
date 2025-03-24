class LoginPageObjects {
    static get usernameLocator() { return '[type="text"]' }
    static get passwordLocator() { return '[name="password"]' }
    static get submitButtonLocator() { return '[id="submit"]' }
    static get errorMsgLocator() { return '[id="error"]' }
};

class HomePageObjects {
    static get loginMsg() { return '[class="post-title"]' }
}




module.exports = {
    LoginPageObjects, HomePageObjects
};