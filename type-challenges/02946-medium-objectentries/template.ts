type ObjectEntries<T> = {
    [P in keyof T]-?:[P, T[P] extends undefined | infer U ? U : T[P]]
}[keyof T]