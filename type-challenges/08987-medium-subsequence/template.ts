// type Subsequence<T extends any[], U = T[number], K = U> = K extends any ?
//   [] | [K] | [K, ...Subsequence<[], Exclude<U, K>>] : [];
  
type Subsequence<T extends any[], Prefix extends unknown[]=[]> = T extends [infer A, ...infer R] ? 
  Subsequence<R, [...Prefix, A] | Prefix> : Prefix;

type type1 = Subsequence<[1,2]>