import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";

describe("<ForgotPassword />", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <Router>
        <ForgotPassword />
      </Router>
    );
  });
  it("should exist the header", () => {
    const header = screen.queryByTestId("header");
    expect(header).toBeTruthy();
  });
  it("should exist the first part of the text", () => {
    const text = screen.queryByTestId("textFirstPart");
    expect(text).toBeTruthy();
  });
  it("should exist the second part of the text", () => {
    const text = screen.queryByTestId("textSecondPart");
    expect(text).toBeTruthy();
  });
  it("should exist the email input", () => {
    const getEmailField = screen.getByPlaceholderText(/email/i);
    expect(getEmailField).toBeTruthy();
  });
  it("should exist the proceed button", () => {
    const getProceedBtn = screen.getByRole("button", {
      name: /Proceed/i,
    });
    expect(getProceedBtn).toBeTruthy();
  });
});

describe("<ForgotPassword /> form behavior", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <Router>
        <ForgotPassword />
      </Router>
    );
  });
  it("should provide valid input and submit successfully", async () => {
    const getEmailField = screen.getByPlaceholderText(/Email/i);

    await act(async () => {
      fireEvent.change(getEmailField, {
        target: { value: "eve.holt@reqres.in" },
      });
    });

    const getProceedBtn = screen.getByRole("button", {
      name: /Proceed/i,
    });

    await act(async () => {
      fireEvent.click(getProceedBtn);
    });

    const getError = screen.queryByText("Invalid email address");
    expect(getError).toBeFalsy();
  });
  it("should provide invalid input and show error message", async () => {
    const getEmailField = screen.getByPlaceholderText(/Email/i);

    await act(async () => {
      fireEvent.change(getEmailField, {
        target: { value: "" },
      });
    });

    const getProceedBtn = screen.getByRole("button", {
      name: /Proceed/i,
    });

    await act(async () => {
      fireEvent.click(getProceedBtn);
    });

    const getError = screen.queryByText("Invalid email address");
    expect(getError).toBeTruthy();
  });
});
