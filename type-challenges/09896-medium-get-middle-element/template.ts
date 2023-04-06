// type IsOdd<
//   T extends number,
//   Index extends unknown[] = [],
//   Flag extends boolean = false
// > = Index["length"] extends T
//   ? Flag
//   : IsOdd<T, [...Index, unknown], Flag extends true ? false : true>;

// type GetMiddleElement<
//   T extends unknown[],
//   Prefix extends unknown[] = [],
//   Flag extends boolean = IsOdd<T["length"]>,
//   Result extends unknown[] = []
// > = Flag extends true
//   ? T extends [infer A, ...infer R]
//     ? Prefix["length"] extends R["length"]
//       ? [A]
//       : GetMiddleElement<R, [...Prefix, A], Flag>
//     : []
//   : T extends [infer A, ...infer R]
//   ? [...Prefix, unknown]["length"] extends R["length"]
//     ? GetMiddleElement<R, [...Prefix, A], Flag, [A]>
//     : [...R, unknown]["length"] extends Prefix["length"]
//     ? [...Result, A]
//     : GetMiddleElement<R, [...Prefix, A], Flag>
//   : [];

type GetMiddleElement<T extends unknown[]> = T extends [
  infer L,
  ...infer Rest,
  infer R
]
  ? Rest extends []
    ? [L, R]
    : GetMiddleElement<Rest>
  : T;
