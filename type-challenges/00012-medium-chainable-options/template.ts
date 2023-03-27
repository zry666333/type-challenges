type UnionOmit<T, K> =  T & Omit<K, keyof T> ;

type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<UnionOmit<{[P in K]: V},T>>
  get(): T;
}