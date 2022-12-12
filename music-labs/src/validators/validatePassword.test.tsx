import validatePassword from "./validatePassword";

describe("Validate password function", () => {
  it("should test the password regex", () => {
    const resFalse = validatePassword("aa");
    const resTrue = validatePassword("cityslicka");
    expect(resFalse).toBe(false);
    expect(resTrue).toBe(true);
  });
});