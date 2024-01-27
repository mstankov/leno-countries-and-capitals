/**
 * Shuffles the data at random
 * @param data country or capital array
 * @returns shuffled array
 */
export const shuffleData = <T extends string>(data: T[]) => {
  // Fisher-Yates shuffle
  const shuffledData = [...data];
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }
  return shuffledData;
};
