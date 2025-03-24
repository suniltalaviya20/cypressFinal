import  LoginPage  from "../../pages/pagemethods/LoginPage";
import HomePage from "../../pages/pagemethods/homePage";

const login = new LoginPage;
const homePage = new HomePage;

describe("Login Page tests", function () {
    before("Here you can add anything that need to be run before running test suit", function () {

    })

    beforeEach("Before Each case", function () {
        cy.fixture("UI-tests/loginTests").then((data)=>{
            this.data = data
            cy.visit(Cypress.env('TenantUrl'))
        })
    })

    after("Here you can add anything that need to be run after running test suit", function () {
      
    })
    
    afterEach("Afetr each case", function () {
        cy.clearLocalStorage();
        cy.clearAllSessionStorage();
    })

    it("Test-1 : Successfull login", function(){
        const data = this.data
        const LoginPage = data.TS1.loginPage;
        login.enterUsername(LoginPage.username)
        login.enterPassword(LoginPage.password)
        login.clickSubmitButton();
        homePage.verifyLandendOnHomepage();
    })

    it("Test-2 : wrong usename", function(){
        const data = this.data
        const LoginPage = data.TS2.loginPage;
        login.enterUsername(LoginPage.username)
        login.enterPassword(LoginPage.password)
        login.clickSubmitButton();
        login.verifyPasswordError();
    })

    it("Test-3 : wrong password", function(){
        const data = this.data
        const LoginPage = data.TS3.loginPage;
        login.enterUsername(LoginPage.username)
        login.enterPassword(LoginPage.password)
        login.clickSubmitButton();
        login.verifyUsernameError();
    })
    it("Test-4 : Both Wrong", function(){
        const data = this.data
        const LoginPage = data.TS4.loginPage;
        login.enterUsername(LoginPage.username)
        login.enterPassword(LoginPage.password)
        login.clickSubmitButton();
        login.verifyUsernameError();
    })
})