class bookingsApi {
  getBookings() {
    let method = "GET";
    let url = `${Cypress.env("TenantApi")}/booking`;
    return cy.request({ method: method, url: url }).then((response) => {});
  }
  deletBookings(id) {
    let method = "Delete";
    let url = `${Cypress.env("TenantApi")}/booking/${id}`;

    return cy
      .request({
        method: method,
        url: url,
        headers: {
          "Content-Type": "application/json", // Specify JSON format
          Cookie: `token=${Cypress.env("Auth")}`, // Example of a custom header
        },
      })
      .then((response) => {
        expect(response.status).to.be.eq(201);
      });
  }

  createBookings(body) {
    cy.log(body)
    let method = "post";
    let url = `${Cypress.env("TenantApi")}/api/users`;
    return cy
      .request({ method: method, url: url, body: body })
      .then((response) => {
        expect(response.status).to.be.eq(201)
      });
  }
}
export default bookingsApi;
