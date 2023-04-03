type Flip<T extends Record<PropertyKey, string  | number | boolean>> = {
  [K in keyof T as `${T[K]}`]:K
}

