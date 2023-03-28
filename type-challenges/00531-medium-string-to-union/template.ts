type StringToArray<T extends string> = T extends `${infer A}${infer Rest}` ? [A,...StringToArray<Rest>] : [];

// type StringToUnion<T extends string> = StringToArray<T>[number];

type StringToUnion<T extends string> = T extends `${infer A}${infer Rest}` ? A | StringToUnion<Rest> : never;
