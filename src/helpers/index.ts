import { Dictionary } from "../types/types";
import { capitalizeTextAndEndWithPeriod } from "../utils/util";

export const getWords = async (entries: Dictionary[]) => {
  const wordsData = await Promise.all(
    entries?.map(async (item, i) => {
      const partOfSpeech = item?.meanings[0].partOfSpeech;
      const id = `${item.word}-${i}`;

      // Simulating an asynchronous operation with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return {
        id,
        partOfSpeech,
        title: capitalizeTextAndEndWithPeriod(item?.word),
        description: partOfSpeech,
        content: item.meanings[0]?.definitions,
        ...item,
      };
    })
  );

  return wordsData;
};
