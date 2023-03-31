type Fibonacci<T extends number, Prev extends unknown[] = [unknown], Current extends unknown[] = [], Count extends unknown[] = []> = Count['length'] extends T ? Current['length']
: Fibonacci<T, Current, [...Current, ...Prev], [...Count, unknown]>
