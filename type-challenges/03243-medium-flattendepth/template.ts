
type FlattenDepth<T extends any[], U extends number = 1, Count extends unknown[] = []> = 
    Count['length'] extends U
    ? T
    : T extends [infer F, ...infer R]
        ? F extends unknown[]
            ? [
                ...FlattenDepth<F,U, [...Count, unknown]>,
                ...FlattenDepth<R,U,Count>
            ] 
            : [
                F,
                ...FlattenDepth<R, U, Count>
              ]
        : []
    

