// type Merge2<F extends Record<string, unknown>, S extends Record<string, unknown>> = Omit<F, keyof S> & S

// type Merge3<F extends Record<string, unknown>> = {
//   [P in keyof F]:F[P]
// } 

// type Merge<F extends Record<string, unknown>,  S extends Record<string, unknown>> = Merge3<Merge2<F, S>>;


type Merge<F extends Record<string, unknown>,  S extends Record<string, unknown>> = {
  [P in  (keyof F |keyof S)]: P extends keyof S ? S[P]: P extends keyof F ? F[P] : never;
}