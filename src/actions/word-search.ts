import { getWords } from "../helpers";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const getDictionaryEntries = async (searchWord: string): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}${searchWord}`);
    if (!response.ok) {
      throw new Error("Failed to fetch dictionary entries");
    }
    const data = await response.json();
    const processedData = await getWords(data);
    return processedData;
  } catch (error) {
    throw new Error("An error occurred while fetching dictionary entries");
  }
};

export default getDictionaryEntries;
