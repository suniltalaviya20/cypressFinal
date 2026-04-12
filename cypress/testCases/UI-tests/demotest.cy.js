// import  LoginPage  from "../../pages/pagemethods/LoginPage";
// import HomePage from "../../pages/pagemethods/homePage";

// const login = new LoginPage;
// const homePage = new HomePage;

// describe("Login Page tests", function () {
//     before("Here you can add anything that need to be run before running test suit", function () {

//     })

//     beforeEach("Before Each case", function () {
//         cy.fixture("UI-tests/loginTests").then((data)=>{
//             this.data = data
//             cy.visit("https://wohnen-in-bayern.com/objekt/studentenwohnheim-allersberger-strasse/")
//         })
//     })

//     after("Here you can add anything that need to be run after running test suit", function () {
      
//     })
    
//     afterEach("Afetr each case", function () {
//         cy.clearLocalStorage();
//         cy.clearAllSessionStorage();
//     })

//     it("Test-1 : Apply for wg ", function(){
//         const data = this.data
//         const LoginPage = data.TS1.loginPage;
//         cy.get('[class="elementor-button-text"]').eq(1).scrollIntoView() 
//         cy.get('[id="BorlabsCookieEntranceA11YHeadline"]').should('be.visible')
//         cy.contains('Ich akzeptiere alle').click()
//         cy.get('[class="elementor-button-text"]').eq(1).scrollIntoView().click()
//         cy.get('[name="input_26"]').select('Herr')
//         cy.get('[name="input_12"]').screenshot().type("Sunil ")
//         cy.wait(2)
//         cy.get('[placeholder="Vorname"]').type('Talaviya')
//         cy.get('[placeholder="Strasse & Hausnr. *"]').type('Pirckheimerstraße 126, Nuremberg')
//         cy.get('[placeholder="PLZ & Ort *"]').type('90409')
//         cy.get('select[name="input_28"]').select('Deutschland')
//         cy.get('select[name="input_41"]').select('Indien')
//         cy.get('select[id="input_1_46_2"]').select('10')
//         cy.get('select[id="input_1_46_1"]').select('10')
//         cy.get('select[id="input_1_46_3"]').select('2000')
//         // cy.get('select[id="input_1_29"]').type('015565702970')
//         cy.get('[id="input_1_29"]').type('015565702970')
//         cy.get('[id="input_1_30"]').type("talaviyas20@gmail.com")
//         cy.get('[id="input_1_17"]').type("B-51, Shreyas  apartment, COD raod Mumbai 40098 ")
//         cy.get('[id="input_1_11"]').type('Technischen Universität Nürnberg (UTN)')
//         cy.get('select[id="input_1_32"]').select('Einzelapartment nach Verfügbarkeit')
//         cy.get('select[id="input_1_33"]').select('nicht gewünscht')
//         cy.get('select[id="input_1_34_2"]').select('25')
//         cy.get('select[id="input_1_34_1"]').select('5')
//         cy.get('select[id="input_1_34_3"]').select('2026')
//         // cy.get('select[id="input_1_34_2"]').select('20')
//         // cy.get('select[id="input_1_34_1"]').select('4')
//         // cy.get('select[id="input_1_34_3"]').select('2026')
//         cy.get('select[id="input_1_36_2"]').select('1')
//         cy.get('select[id="input_1_36_1"]').select('10')
//         cy.get('select[id="input_1_36_3"]').select('2027')
//         cy.get('[id="input_1_48"]').type('400')
//         cy.get('[id="input_1_38"]').type('Ich bin Student und suche eine ruhige Unterkunft, um mich vollständig auf mein Studium konzentrieren zu können. Ich bin zuverlässig, ordentlich und Nichtraucher. Ein respektvoller Umgang und Sauberkeit sind für mich selbstverständlich. Über eine positive Rückmeldung würde ich mich sehr freuen.')
//         cy.get('[id="input_1_39_1"]').click()
//         cy.get('[id="gform_submit_button_1"]').click()
//     })

    
// })