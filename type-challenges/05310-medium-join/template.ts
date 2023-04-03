type Join<T extends unknown[], U extends (string | number)> = T extends [infer F extends string, ...infer R] ? R extends never[] ? `${F}` : `${F}${U}${Join<R, U>}` : '';

type type1 = Join<['Hello', 'World'], ' '>