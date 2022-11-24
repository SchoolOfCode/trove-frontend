import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders the app", () => {
	render(<App />);
});
