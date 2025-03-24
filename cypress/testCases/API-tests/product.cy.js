import bookingsApi from "../../requests/bookings";
import { ErrorMessages, StatusCode } from "../../pages/enums/APIEnums";

const bookApi = new bookingsApi();

describe("API Tests", function () {
  before(
    "Here you can add anything that need to be run before running test suit",
    function () {}
  );

  beforeEach("Before Each case", function () {
    cy.fixture("API-tests/productTests").then((data) => {
      this.data = data;
      // cy.createToken().then(() => {
      //   cy.log("Auth Token:", Cypress.env("Auth"));
      // });
    });
  });

  after(
    "Here you can add anything that need to be run after running test suit",
    function () {}
  );

  afterEach("Afetr each case", function () {
    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
  });

  it("Test-1 : Get All Product successful", function () {
    const data = this.data;
    bookApi.getBookings().then((response) => {
      Cypress.env("Auth");
      expect(response.status).to.be.eq(StatusCode.OK);
      expect(response.body[0]).to.have.property("bookingid");
    });
  });

  it.only("Test-2 : create and delete Product successful", function () {
    const data = this.data;
    console.log(data.setup)
    bookApi.createBookings(data.setup).then((response) => {
      expect(response.status).to.be.eq(StatusCode.Created);
      expect(response.body).to.have.property("id");
      // id = response.body.bookingid
    })
    // .then(()=>{
    //   bookApi.deletBookings(id).then((response) => {
    //       expect(response.status).to.be.eq(StatusCode.Created);
    //     });
    // })
  });

});
