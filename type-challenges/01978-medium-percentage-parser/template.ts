type SignParser<A extends string> = A extends `${infer S extends '-' | '+'}${infer M}` ? [S, M]:['', A];

type PercentageParser<A extends string> = A extends `${infer S}%` ? [...SignParser<S>, '%'] : [...SignParser<A>, ''];