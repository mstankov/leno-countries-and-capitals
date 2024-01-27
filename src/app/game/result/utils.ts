export const getResultMessage = (score: number) => {
  if (score <= 29) {
    return "Better luck next time!";
  } else if (score <= 49) {
    return "Good job!";
  } else {
    return "Excellent! You're a geography whiz!";
  }
};
