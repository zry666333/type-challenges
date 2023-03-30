

type BEM<B extends string, E extends string[], M extends string[]> = `${B}${E extends [] ? '' : '__'}${E[number] extends never ? '' : E[number]}${M extends [] ? '':'--'}${M[number] extends never ? '':M[number]}`