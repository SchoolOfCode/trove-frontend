import { it } from "@jest/globals";
import { render } from "@testing-library/react";
import App from "./App";

it("renders the app", () => {
	render(<App />);
});