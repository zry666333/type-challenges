// 1
// type LengthOfString<S extends string, I extends string[] = []> = S extends `${infer A}${infer B}` ? LengthOfString<B, [...I, A]> : I['length'] 

// 2 
type Split<S extends string> = S extends `${infer R}${infer Rest}` ? [R, ...Split<Rest>] : []

type LengthOfString<S extends string> = Split<S>['length']