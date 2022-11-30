describe("empty spec", () => {
	it("passes", () => {
		cy.visit("localhost:3000");
		cy.get("#author").type("Ash").should("have.value", "Ash");
		cy.get("#title").type("CSS Tricks").should("have.value", "CSS Tricks");
		cy.get("#url").type("https://css-tricks.com/").should("have.value", "https://css-tricks.com/");
		cy.get("#summary").type("CSS Tricks").should("have.value", "CSS Tricks");
	});
});
