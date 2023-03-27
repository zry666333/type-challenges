type TrimLeft<S extends string> = S extends `${' '|'\t'|'\n'}${infer A}` ? TrimLeft<A> : S

type TrimRight<S extends string> = S extends `${infer A}${' '|'\t'|'\n'}` ? TrimRight<A> : S

type Trim<S extends string> = TrimRight<TrimLeft<S>>