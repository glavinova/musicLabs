import validateName from "./validateName";

describe("Validate name function", () => {
  it("should test the name regex", () => {
    const resTrue = validateName("Eve Holt");
    const resFalse = validateName(
      "Ajnjknjdnnsmxklsamxlkasmxklsmaxklmkxmasxlkdsadsadsam"
    );
    expect(resTrue).toBe(true);
    expect(resFalse).toBe(false);
  });
});
