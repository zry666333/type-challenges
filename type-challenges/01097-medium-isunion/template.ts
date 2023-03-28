// type IsUnion<T, U = T> = [T] extends [U] ? T extends U ? true : false : true;

type IsUnion<T, U = T> = [T] extends [never] ? false : T extends U ? [U] extends [T] ? false : true : never