// type AppendToObject<T, U extends PropertyKey, V> = {
//     [K in (keyof T | U)]: K extends keyof T ? T[K] : V;
//   }


type Simplify<T> = { [K in keyof T]: T[K] };
type AppendToObject<T extends object, U extends PropertyKey, V> = Simplify<T & Record<U, V>>;

type Obj = {
    name: 'abc',
    age: 11
}

type type1 = AppendToObject<Obj,'home', boolean>