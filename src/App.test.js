import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import 'mutationobserver-shim';

test("renders App without crashing", () => {
  render(<App />);
});

test ('first name in form', () => {
  const {getByText} = render(<App />);
  const firstName = getByText(/first name*/i);
  expect(firstName).toBeInTheDocument();
});

test ('last name in form', () => {
  const {getByText} = render(<App />);
  const lastName = getByText(/last name*/i);
  expect(lastName).toBeInTheDocument();
});


