type ReplaceFirst<T extends readonly unknown[], S, R, Prefix extends unknown[] =[]> = T extends [infer A, ...infer Rest] ?
  A extends S ? [...Prefix, R, ...Rest]
              : ReplaceFirst<Rest, S, R, [...Prefix, A]> 
              : [...Prefix]