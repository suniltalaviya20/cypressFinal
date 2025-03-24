const { LoginPageObjects } = require('../pageobjects/PageObjects')
import { LoginPageTexts } from "../enums/PageEnums"

class LoginPage {

    enterUsername(username) {
        cy.get(LoginPageObjects.usernameLocator).type(username)
    };

    enterPassword(password){
        cy.get(LoginPageObjects.passwordLocator).type(password)
    }

    clickSubmitButton(){
        cy.get(LoginPageObjects.submitButtonLocator).should('be.visible')
        cy.get(LoginPageObjects.submitButtonLocator).click()
    }

    verifyPasswordError(){
        cy.get(LoginPageObjects.errorMsgLocator).should('have.text',LoginPageTexts.PASSWORD_ERROR_TEXT)
    }

    verifyUsernameError(){
        cy.get(LoginPageObjects.errorMsgLocator).should('have.text',LoginPageTexts.USERNAME_ERROR_TEXT)
    }
}
export default LoginPage;