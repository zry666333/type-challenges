type Omit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

type MyReadonly2<T, K extends keyof T> = Omit<T,K> & {
  readonly [key in K]:T[key]
}