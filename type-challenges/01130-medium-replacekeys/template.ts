type ReplaceKeys<U extends Record<string, unknown>, T extends string, Y extends Record<string,unknown>> = {
    [key in keyof U ] : key extends T ? key extends keyof Y ? Y[key] :never :U[key];
}