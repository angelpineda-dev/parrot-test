describe("Test happy path", () => {
	it("User should login", () => {
		/* visit login */
		cy.visit("http://localhost:3000/login");

		/* fill and submit form */
		cy.get('[data-testid="login-email"]').type(Cypress.env("username"));
		cy.get('[data-testid="login-password"]').type(Cypress.env("password"));
		cy.get('[data-testid="login-submit"]').click();

		/* confirms home page */
		cy.contains("My Stores").should("be.visible");

		/* navigate to products page and confirm url*/
		cy.get('[data-testid="store-list"] div[role="button"]').click();
		cy.url().should("include", "/store-details");

		/* search first list of products and open it */
		cy.get(
			'[data-testid="store-detail-item"] div[role="button"]:first-child'
		).click();

		/* get first list item and change switch state */
		cy.get('[data-testid="product-list"]')
			.find('[data-testid="switch-element"]')
			.first()
			.then(($switch) => {
				const isChecked = $switch.find("input").prop("checked");

				cy.wrap($switch).click();

				cy.wrap($switch.find("input")).should(
					"have.prop",
					"checked",
					!isChecked
				);
			});
	});
});
