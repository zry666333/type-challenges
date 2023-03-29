type Flatten<T> = {
  [P in keyof T]: T[P]
}

type PartialByKeys<T, K extends keyof T = keyof T> = Flatten<Omit<T, K> & {
  [P in K]?:T[P]
}>