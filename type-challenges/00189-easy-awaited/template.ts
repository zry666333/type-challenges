type MyAwaited<T> = T extends Promise<infer A> ? A extends Promise<any> ? MyAwaited<A> : A : never; 


// type MyAwaited<T> =  
// T extends PromiseLike<infer A> 
//   ? A extends PromiseLike<any> 
//     ? MyAwaited<A> 
//     : A 
//   : never