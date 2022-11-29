//! E2E Tests
import { cy } from "cypress";

describe("Site visit", () => {
	it("visits the website and checks it loads up", () => {
		cy.visit("http://localhost:3000/");

		cy.get("#author").type("Ash").should("have.value", "Ash");
		cy.get("#title").type("CSS Tricks").should("have.value", "CSS Tricks");
		cy.get("#url").type("https://css-tricks.com/").should("have.value", "https://css-tricks.com/");
		cy.get("#summary").type("CSS Tricks").should("have.value", "CSS Tricks");
	});
});
