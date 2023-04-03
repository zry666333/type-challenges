// type Reverse<T extends string> = T extends `${infer F}${infer R}` ? `${Reverse<R>}${F}` : ''

// type TrimLeft<S extends string, isStart extends boolean = false> = 
//   S extends `${infer F}${infer R}` ?
//    F extends (' ' | '\n' | '\t') ?
//     isStart extends true ?
//      S : `${TrimLeft<R>}` :
//       `${F}${TrimLeft<R, true>}` : '';

// type TrimRight<S extends string> = Reverse<TrimLeft<Reverse<S>>>

// 你的答案
type TrimRight<S extends string> = S extends `${infer X}${' '|'\n'|'\t'}` ? TrimRight<X> : S
