type CheckRepeatedChars<T extends string, Prefix extends string = ''> = T extends `${infer A}${infer R}` ?
  A extends Prefix ? 
    true : CheckRepeatedChars<R, Prefix | A> : false