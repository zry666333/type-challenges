// type Trunc<T extends string | number> = T extends string ? T extends `${infer L}${'.'}${infer R}` ? `${L extends '' ? '0' : L}` : T : Trunc<`${T}`> 


// your answers
type Trunc<T extends number | string> = 
  `${T}` extends `.${infer X}` 
    ? '0' 
    : `${T}` extends `${infer H}.${infer R}`
      ? H 
      : `${T}`