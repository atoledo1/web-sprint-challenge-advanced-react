import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/first name:/i);
  const lastNameInput = screen.getByLabelText(/last name:/i);
  const addressInput = screen.getByLabelText(/address:/i);
  const cityInput = screen.getByLabelText(/city:/i);
  const stateInput = screen.getByLabelText(/state:/i);
  const zipCodeInput = screen.getByLabelText(/zip:/i);

  fireEvent.change(firstNameInput, {
    target: { name: "firstName", value: "adriana" },
  });
  fireEvent.change(lastNameInput, {
    target: { name: "lastName", value: "toledo" },
  });
  fireEvent.change(addressInput, {
    target: { name: "address", value: "74 plaza del pino" },
  });
  fireEvent.change(cityInput, {
    target: { name: "city", value: "trujillo alto" },
  });
  fireEvent.change(stateInput, {
    target: { name: "state", value: "puerto rico" },
  });
  fireEvent.change(zipCodeInput, {
    target: { name: "zip", value: "00976" },
  });

  const checkoutButton = screen.getByRole("button");
  act(() => {
    fireEvent.click(checkoutButton);
  });

  screen.findByText(/adriana toledo 74 plaza del pino puerto rico 00976/i);
});
