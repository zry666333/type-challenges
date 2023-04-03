// type CoupleToUnion<T> = T extends unknown[] ? T[number] : T

// type Without<T extends unknown[], U, K = CoupleToUnion<U>> = T extends [infer F, ...infer R] ? F extends K ? [...Without<R, U,K>]: [F, ...Without<R, U, K>]:[]

type Without<T extends unknown[], U extends number | number[]> =
  T extends [infer X, ...infer Y] ? 
    X extends (U extends number[]? U[number]: U) ?
      Without<Y, U> : [X, ...Without<Y, U>] : [];