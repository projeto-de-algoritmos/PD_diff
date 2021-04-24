const lcs = (
  textOne: string[],
  textTwo: string[],
  sizeOne: number,
  sizeTwo: number,
  memoization: number[][],
) => {
  if (sizeOne === 0 || sizeTwo === 0) {
    return 0;
  } if (memoization[sizeOne - 1][sizeTwo - 1] !== -1) {
    return memoization[sizeOne - 1][sizeTwo - 1];
  } if (textOne[sizeOne - 1] === textTwo[sizeTwo - 1]) {
    memoization[sizeOne - 1][sizeTwo - 1] = 1 + lcs(textOne, textTwo, sizeOne - 1, sizeTwo - 1, memoization);
    return memoization[sizeOne - 1][sizeTwo - 1];
  } else {
    memoization[sizeOne - 1][sizeTwo - 1] = Math.max(lcs(textOne, textTwo, sizeOne, sizeTwo - 1, memoization), lcs(textOne, textTwo, sizeOne - 1, sizeTwo, memoization));
    return memoization[sizeOne - 1][sizeTwo - 1];
  }
}

export default lcs;