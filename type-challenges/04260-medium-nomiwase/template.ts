type StringToUnion<T extends string> = T extends `${infer F}${infer R}` ? F | StringToUnion<R> : '';

type Combination<T extends string, U extends string = T> = U extends T ? U | `${U}${Combination<Exclude<T, U>>}` :never

type AllCombinations<S extends string> = Combination<StringToUnion<S>>;