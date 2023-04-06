type Filter<T extends any[], P> = T extends [infer A, ...infer R] ?
  A extends P ? [A, ...Filter<R, P>] : Filter<R, P> : []