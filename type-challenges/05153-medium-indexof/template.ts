type MyEqual<T,U> = T extends U ? U extends T ? true : false : false;

type IndexOf<T extends unknown[], U, Count extends unknown[] = []> = 
  T extends [infer F, ...infer R] ? 
    MyEqual<F, U> extends true ?
     Count['length']
      : IndexOf<R, U, [...Count, unknown]> : -1

type Test<T> = T extends number ? '4': '5';

type type2 = Test<any>