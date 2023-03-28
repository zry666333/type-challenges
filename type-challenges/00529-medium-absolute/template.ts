type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}` ? U : `${T}` 


type type1 = Absolute<9_999n>