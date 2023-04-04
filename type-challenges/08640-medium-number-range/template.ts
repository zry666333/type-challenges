// type NumberRange<L, H, Count extends unknown[] = [], Result extends unknown[] = [], IsStart extends boolean = false> = Count['length'] extends H ?
//     Result[number] | H
//     : IsStart extends true ? 
//         NumberRange<L, H, [...Count, unknown], [...Result, Count['length']], IsStart>
//         : Count['length'] extends L ?
//             NumberRange<L, H, [...Count, unknown], [Count['length']], true>
//             : NumberRange<L, H, [...Count, unknown], Result, IsStart>

// your answers
type MinusOne<T extends number, Count extends unknown[] = []> = 
  Count['length'] extends T 
  ? Count extends [unknown, ...infer Tail] 
    ? Tail['length'] 
    : never 
  : MinusOne<T, [...Count, unknown]>;


type NumberRange<L extends number, H extends number, Res extends number[] = [L]> = 
  L extends H
  ? Res[number] // obtain a union type
  : NumberRange<L, MinusOne<H>, [...Res, H]>