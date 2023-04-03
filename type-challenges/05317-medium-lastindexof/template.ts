type MyEqual<T, U> = T extends U ? U extends T ? true : false : false;

type LastIndexOf<T, U, Index extends unknown[] = []> = T extends [...infer R, infer L] ? MyEqual<L, U> extends true ? R['length'] : LastIndexOf<R, U, [...Index, unknown]> : -1;