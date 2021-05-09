import { WordSimilar } from "../../../src/services/word-similar";
import { WordAnalyzer } from "../../../src/services/word-analyzer";

describe("Word analyzer analysis", () => {
  let wordSimilar: WordSimilar;
  let wordAnalyzer: WordAnalyzer;
  const contentFirst: string = "Word Words Wor word";
  const contentSecond: string = "Word Word Word word";
  let x: string = "Word";

  beforeEach(() => {
    wordSimilar = new WordSimilar();
    wordAnalyzer = new WordAnalyzer(wordSimilar);
    x = "Word";
  });

  afterEach(() => {
    wordSimilar = null;
    wordAnalyzer = null;
    x = "";
  });

  it(`should return similar 3 and frequenct 1 for ${contentFirst} `, (done) => {
    try {
      const result: any = wordAnalyzer.getAnalysis(x, contentFirst);
      expect(result.frequency).toBe(1);
      expect(result.similarWords?.length).toBe(3);
      done();
    } catch (e) {
      fail(e);
      done();
    }
  });

  it(`should return similar 1 and frequency 3 for ${contentSecond}`, (done) => {
    try {
      const result: any = wordAnalyzer.getAnalysis(x, contentSecond);
      expect(result.frequency).toBe(3);
      expect(result.similarWords?.length).toBe(1);
      done();
    } catch (e) {
      fail(e);
      done();
    }
  });
});
