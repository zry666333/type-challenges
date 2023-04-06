import type { Equal, Expect } from '@type-challenges/utils'

type MyEqual<T, U> = T extends U ? U extends T ? true: false:false

type type1= Equal<any, unknown>