type IsTuple<T extends (unknown[] | {length: number})> = [T] extends [never] ? false : T extends  readonly unknown[] ? number extends T['length'] ? false : true : false;

type Test<T> = [T] extends [never] ? true : T extends readonly unknown[] ? number extends T['length'] ? '3': '4': '2';

type Test2<T extends unknown[]> = number extends T['length'] ? '1':'2'

type type1 =Test2<number[]>

type type2 = number[]['length']