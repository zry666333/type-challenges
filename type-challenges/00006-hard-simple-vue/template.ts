// declare function SimpleVue<D, C, M>(options: {
//   data: () => Record<PropertyKey, unknown>;
//   computed: Record<PropertyKey, () => PropertyKey>;
//   methods: Record<PropertyKey, (...args: unknown[]) => unknown>;
// }): any;

declare function SimpleVue<
  Data,
  Computed extends Record<PropertyKey, (...args: unknown[]) => unknown>,
  Methods
>(options: {
  data: (this: void) => Data;
  computed: Computed & ThisType<Data>;
  methods: Methods &
    ThisType<
      Data &
        Methods & {
          [P in keyof Computed]: ReturnType<Computed[P]>;
        }
    >;
}): unknown;
