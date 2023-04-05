type FirstUniqueCharIndex<T extends string, Prefix extends string[] =[]> = T extends `${infer A}${infer R}` ?
A extends Prefix[number] ?
  FirstUniqueCharIndex<R, [...Prefix, A]>  
:
R extends `${string}${A}${string}` ?
    FirstUniqueCharIndex<R, [...Prefix, A]> : Prefix['length']
  : -1;
