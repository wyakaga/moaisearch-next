export const fetchWordList = async (): Promise<string[]> => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/SMenigat/thousand-most-common-words/master/words/id.json"
    );
    const data = await response.json();

    return data.words.map((word: { targetWord: string }) => word.targetWord);
  } catch (error) {
    console.log(error);
    return [];
  }
};
