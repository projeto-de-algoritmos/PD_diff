import IResult from '../models/IResult';

const DIFF = (
  textOne: string[],
  textTwo: string[],
  sizeOne: number,
  sizeTwo: number,
  memoization: number[][],
  diffArray: IResult[],
) => {
  if (sizeOne > 0 && sizeTwo > 0 && textOne[sizeOne - 1] === textTwo[sizeTwo - 1]) {
    DIFF(textOne, textTwo, sizeOne - 1, sizeTwo - 1, memoization, diffArray)
    diffArray.push({ change: "no", content: textOne[sizeOne - 1] })
  }
  else if (sizeTwo > 0 && (sizeOne === 0 || memoization[sizeOne][sizeTwo - 1] >= memoization[sizeOne - 1][sizeTwo])) {
    DIFF(textOne, textTwo, sizeOne, sizeTwo - 1, memoization, diffArray)
    diffArray.push({ change: "add", content: textTwo[sizeTwo - 1] })
  }
  else if (sizeOne > 0 && (sizeTwo === 0 || memoization[sizeOne][sizeTwo - 1] < memoization[sizeOne - 1][sizeTwo])) {
    DIFF(textOne, textTwo, sizeOne - 1, sizeTwo, memoization, diffArray)
    diffArray.push({ change: "sub", content: textOne[sizeOne - 1] })
  }

  return diffArray;
}

export default DIFF