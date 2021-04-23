let diffArray: string[] = [];

let dp: number[][] = []

const X = ['Oi', 'Tudo', 'Bem']
const Y = ['Tchau', 'Tudo', 'Mau']

for(let i=0;i<X.length + 1; i++){
  let aux: number[] = []
  for(let j=0;j<Y.length + 1; j++){
    aux.push(-1);
  }
  dp.push(aux);
}

const DIFF = (X: string[], Y:string[], m:number, n:number
  , dp:number[][]) => {
	if(m > 0 && n > 0 && X[m - 1] == Y[n-1]) {
		DIFF(X, Y, m-1, n-1, dp)
		diffArray.push(" " + X[m - 1], )
  }
	else if (n > 0 && (m == 0 || dp[m][n-1] >= dp[m-1][n])){
		DIFF(X, Y, m, n-1, dp)
		diffArray.push("+" + Y[n-1])
  }
	else if (m > 0 && (n==0 || dp[m][n-1] < dp[m-1][n])){
		DIFF(X, Y, m-1, n, dp)
		diffArray.push("-" + X[m-1], )
  }

}

DIFF(X, Y, X.length, Y.length, dp);
console.log(diffArray);

export default DIFF