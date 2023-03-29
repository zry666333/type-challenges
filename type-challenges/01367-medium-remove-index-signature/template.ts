type RemoveIndexSignature<T extends Record<string | number | symbol, unknown>> = {
    [P in keyof T as string extends P ? never : number extends P ? never : symbol extends P ? never: P] : T[P]
}