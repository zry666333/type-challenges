type Diff<O, O1> = {
  [P in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]:(O & O1)[P]
}