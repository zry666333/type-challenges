// type MyExclude<T, U> = U extends T ? never: U;
type MyExclude<T, U> = T extends U ? never: T;