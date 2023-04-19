type GetRequired<T, U = T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
};

type A = GetRequired<{ foo: number; bar?: string }>;
