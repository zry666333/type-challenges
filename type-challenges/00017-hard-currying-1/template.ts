declare function Currying<F>(fn: F): Curried<F>
type Curried<F> = F extends (args:never) => any ? F :
    F extends (...args: infer A) => infer R
    ? A extends [infer First, ...infer Other]
        ? (arg: First) => Curried<(...args: Other) => R>
       : R
    : never;