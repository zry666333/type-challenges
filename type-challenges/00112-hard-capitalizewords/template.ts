type CapitalizeWords<
  S extends string,
  Word extends string = '',
  Words extends string = ''
> = S extends `${infer F}${infer R}`
  ? Uppercase<F> extends Lowercase<F>
    ? CapitalizeWords<R, '', `${Words}${Word}${F}`>
    : Word extends ''
    ? CapitalizeWords<R, `${Word}${Uppercase<F>}`, Words>
    : CapitalizeWords<R, `${Word}${F}`, Words>
  : `${Words}${Word}`;