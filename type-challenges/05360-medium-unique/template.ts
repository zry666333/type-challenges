type MyEqual<T, U> = T extends U ? U extends T ? true : false : false;

// type MyInclude<T extends unknown[], U> = T extends [infer A, ...infer R] ? MyEqual<A,U> extends true ? true :  MyInclude<R, U>: false;

// type Unique<T, M extends unknown[] = []> = 
//   T extends [infer A, ...infer R] ? 
//     MyInclude<M, A> extends true ? 
//       Unique<R, M>
//      : Unique<R, [...M, A]>
//   : M

// 你的答案
type MyInclude<T extends unknown[], E extends unknown> = 
  T extends [infer X, ...infer Y]
  ? MyEqual<X, E> extends true 
    ? true 
    : MyInclude<Y, E>
  : false 

type Unique<T extends unknown[], Cur extends unknown[] = []> = 
  T extends [infer X, ...infer Y]
  ? MyInclude<Cur, X> extends true 
    ? Unique<Y, Cur>
    : Unique<Y, [...Cur, X]>
  : Cur
  


