type False = '' | false | 0 | undefined | null | [] | Record<keyof any, never>;

// type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer Rest] ? F extends False ? AnyOf<Rest> : true  : false;

type AnyOf<T extends readonly any[]> = T[number] extends False ? false : true;