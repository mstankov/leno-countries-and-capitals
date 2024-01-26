import { getResultMessage } from "./utils";

describe("utils", () => {
  it.each([
    [15, "Better luck next time!"],
    [43, "Good job!"],
    [49, "Good job!"],
    [35, "Good job!"],
    [3, "Better luck next time!"],
    [29, "Better luck next time!"],
    [50, "Excellent! You're a geography whiz!"],
    [100, "Excellent! You're a geography whiz!"],
  ])("getResultMessage(%i) returns %s", (score, expected) => {
    expect(getResultMessage(score)).toEqual(expected);
  });
});
