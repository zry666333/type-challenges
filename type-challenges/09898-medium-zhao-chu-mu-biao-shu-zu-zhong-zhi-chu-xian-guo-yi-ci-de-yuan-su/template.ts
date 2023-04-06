type FindEles<
  T extends any[],
  Prefix extends any[] = [],
  Result extends unknown[] = []
> = T extends [infer A, ...infer R]
  ? A extends R[number]
    ? FindEles<R, [...Prefix, A], Result>
    : A extends Prefix[number]
    ? FindEles<R, Prefix, Result>
    : FindEles<R, Prefix, [...Result, A]>
  : Result;
