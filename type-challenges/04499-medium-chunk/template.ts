type NumberToCuple<T extends number, U extends unknown[] = []> = U['length'] extends T ?  U : NumberToCuple<T, [...U, unknown]>;  

type Chunk<T extends unknown[], U extends number> = 
  T extends [...NumberToCuple<U>, ...infer R]
   ? T extends [...infer A, ...R]
    ? [A, ...Chunk<R, U>]
    :[]
   : T extends []
    ? []
    : [T]