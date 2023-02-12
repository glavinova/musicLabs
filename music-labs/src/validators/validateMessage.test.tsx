import validateMessage from "./validateMessage";

describe("Validate message function", () => {
  it("should test the message regex", () => {
    const resTrue = validateMessage(
      "I would like to request the music sheets for the song 'Easy on me' by Adele, please !"
    );
    expect(resTrue).toBe(true);
  });
});
