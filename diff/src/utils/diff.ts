import IResult from '../models/IResult';

const DIFF = (
  X: string[],
  Y: string[],
  m: number,
  n: number,
  dp: number[][],
  diffArray: IResult[],
) => {
  if (m > 0 && n > 0 && X[m - 1] === Y[n - 1]) {
    DIFF(X, Y, m - 1, n - 1, dp, diffArray)
    diffArray.push({ change: "no", content: X[m - 1] })
  }
  else if (n > 0 && (m === 0 || dp[m][n - 1] >= dp[m - 1][n])) {
    DIFF(X, Y, m, n - 1, dp, diffArray)
    diffArray.push({ change: "add", content: Y[n - 1] })
  }
  else if (m > 0 && (n === 0 || dp[m][n - 1] < dp[m - 1][n])) {
    DIFF(X, Y, m - 1, n, dp, diffArray)
    diffArray.push({ change: "sub", content: X[m - 1] })
  }

  return diffArray;
}

export default DIFF