type UnionToIntersection<U, T = U> = (
  U extends T ? (arg: U) => any : never
) extends (arg: infer I) => void
  ? I
  : never;
