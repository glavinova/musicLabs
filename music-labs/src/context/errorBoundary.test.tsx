import { render } from "@testing-library/react";
import { ErrorBoundary } from "react-error-boundary";
import "@testing-library/jest-dom";
import ErrorFallback, { myErrorHandler } from "./errorBoundary";

describe("<ErrorBoundary />", () => {
  it("should throw an error", () => {
    const ThrowError = () => {
      throw new Error("Test");
    };

    const { getByTestId } = render(
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(getByTestId("errorboundary")).toBeVisible();
  });
});
