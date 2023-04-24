type RequiredKeys<T, U extends Required<T> = Required<T>> =keyof {
  [P in keyof T as T[P] extends U[P] ? P:never]:any
}
