const { HomePageObjects } = require('../pageobjects/PageObjects')
import { HomePageTexts } from "../enums/PageEnums"

class HomePage {

    verifyLandendOnHomepage() {
        cy.get(HomePageObjects.loginMsg).should('have.text',HomePageTexts.LOGIN_PAGE_TEXT)
    }
}
export default HomePage;