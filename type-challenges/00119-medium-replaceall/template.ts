// type Replace<S extends string, From extends string, To extends string> =From extends '' ? S : S extends `${infer A}${From}${infer B}` ? `${A}${To}${B}` : S;

type ReplaceAll<S extends string, From extends string, To extends string> = S extends `${infer A}${From}${infer B}` ? From extends '' ? S : `${A}${To}${ReplaceAll<`${B}`, From, To>}` : S;