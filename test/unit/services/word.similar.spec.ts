import { WordSimilar } from "../../../src/services/word-similar";
describe("Distance calculation", () => {
  let wordSimilar: WordSimilar;
  let x:string = "Word";

  beforeEach(() => {
    wordSimilar = new WordSimilar();
    x = "Word";
  });

  afterEach(() => {
    wordSimilar = null;
    x = "";
  });

  it("should return 1 distance for similar word", (done) => {
    try {
      const distance: number = wordSimilar.calculateDistance(x, "Words");
      expect(distance).toBe(1);
      done();
    } catch (e) {
      fail(e);
      done();
    }
  });

  it("should return 1 distance for Wor", (done) => {
    try {
      const distance: number = wordSimilar.calculateDistance(x, "Wor");
      expect(distance).toBe(1);
      done();
    } catch (e) {
      fail(e);
      done();
    }
  });

  it("should return 1 distance for Wor", (done) => {
    try {
      const distance: number = wordSimilar.calculateDistance(x, "word");
      expect(distance).toBe(1);
      done();
    } catch (e) {
      fail(e);
      done();
    }
  });

});
