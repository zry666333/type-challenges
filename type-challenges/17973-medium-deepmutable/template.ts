type DeepMutable<T extends Record<PropertyKey, any>> = T extends Function ? T : T extends object ? 
  {
    -readonly [P in keyof T]: DeepMutable<T[P]>
  } : T

  type type1 = DeepMutable<{
    readonly a: () => 1
    readonly b: string
    readonly c: {
      readonly d: boolean
      readonly e: {
        readonly g: {
          readonly h: {
            readonly i: true
            readonly j: 's'
          }
          readonly k: 'hello'
        }
        readonly l: readonly [
          'hi',
          {
            readonly m: readonly ['hey']
          },
        ]
      }
    }
  }>