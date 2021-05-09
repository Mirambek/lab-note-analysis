export class WordSimilar {
  calculateDistance(firstWord: string, secondWord: string): number {
    const result = Array.from({ length: firstWord.length + 1 }).map(() =>
      Array.from({ length: secondWord.length + 1 }).map(() => 0)
    );
    let n = firstWord.length;
    let m = secondWord.length;
    if (n == 0) return m;
    if (m == 0) return n;

    for (let i = n; i >= 0; i--) result[i][0] = i;
    for (let j = m; j >= 0; j--) result[0][j] = j;

    for (let i = 1; i <= n; i++) {
      let first_i = firstWord.charAt(i - 1);

      for (let j = 1; j <= m; j++) {
        let second_j = secondWord.charAt(j - 1);
        let cost = first_i == second_j ? 0 : 1;

        let mi = result[i - 1][j] + 1;
        let b = result[i][j - 1] + 1;
        let c = result[i - 1][j - 1] + cost;

        if (b < mi) mi = b;
        if (c < mi) mi = c;

        result[i][j] = mi;

        if (
          i > 1 &&
          j > 1 &&
          first_i == secondWord.charAt(j - 2) &&
          firstWord.charAt(i - 2) == second_j
        ) {
          result[i][j] = Math.min(result[i][j], result[i - 2][j - 2] + cost);
        }
      }
    }
    return result[n][m];
  }
}
