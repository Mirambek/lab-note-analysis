import { WordSimilar } from "./word-similar";
import { autoinject } from "aurelia-framework";
import { WordInfo } from "shared/types/word-info";

@autoinject
export class WordAnalyzer {
  
  constructor(private wordSimilar: WordSimilar) {}

  getAnalysis(xWord: string, content: string): WordInfo {
    const result: WordInfo = {
      word: xWord,
      frequency: 0,
      similarWords: new Array<String>(),
    };
    for (let val of content?.replace(/(\r?\n|\r\n?)/g,' ').split(" ")) {
      const word = val.trim();
      const distance: number = this.wordSimilar.calculateDistance(xWord, word);
      if (distance === 0) {
        result.frequency += 1;
      } else if (distance === 1) {
        result.similarWords.push(word);
      }
    }
    return result;
  }
}
