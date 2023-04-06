type ToPrimitive<T> = T extends Function ? Function :
  T extends object ? {
    [P in keyof T]:ToPrimitive<T[P]>
  } : T extends {valueOf(): infer R} ? R 
  : T
