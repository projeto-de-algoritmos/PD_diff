const lcs = (X: string[], Y:string[], m:number, n:number, dp:number[][]) => {
  if (m === 0 || n === 0) {
    return 0;
  } if (dp[m-1][n-1] !== -1) {
    return dp[m-1][n-1];
  } if (X[m-1] === Y[n-1]) {
    dp[m-1][n-1] = 1 + lcs(X,Y, m-1, n-1, dp);
    return dp[m-1][n-1];
  } else { 
    dp[m-1][n-1] = Math.max(lcs(X, Y, m, n-1, dp), lcs(X, Y, m-1, n, dp));
    return dp[m-1][n-1];
  }
}

export default lcs;