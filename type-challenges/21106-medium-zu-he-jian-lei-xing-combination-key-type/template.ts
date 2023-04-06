type ModifierKeys = ['cmd', 'ctrl', 'opt', 'fn']

// 实现 Combs
type Combs<T extends unknown[]=ModifierKeys,Result extends unknown=never> = T extends [infer A extends string, ...infer R extends string[]] ? 
  Combs<R,Result | [`${A} ${R[number]}`][number] >  : Result

type type1 = Combs