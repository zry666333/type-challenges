type Flip<T extends Record<PropertyKey, string | number | boolean>> = {
  [K in keyof T as `${T[K]}`]:K;
}

// type Flip<T extends Record<PropertyKey, string | number | bigint | boolean | null | undefined>> = {
//   [K in keyof T as `${T[K]}`]: K;
// }