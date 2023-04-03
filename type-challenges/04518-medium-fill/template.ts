
// ts
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Count extends unknown[] = [],
  IsStart extends boolean = false
> = T extends [infer F, ...infer R] ? 
    Count['length'] extends End ? T :
    Count['length'] extends Start ? [N, ...Fill<R, N, Start, End, [...Count, unknown], true>]
    : IsStart extends true ? [N, ...Fill<R, N, Start, End, [...Count, unknown], IsStart>]
    : [F, ...Fill<R, N, Start, End, [...Count, unknown], IsStart>]
    : [];

// js 尾递归
// function fill(array:any[] = [], startIndex, endIndex, target, currentIndex =  0, isStart = false) {
//     if (!array.length) return []
//     if (currentIndex === endIndex) {
//         return array
//     } else if (currentIndex !== startIndex) {
//         if(isStart === true) {
//             return [target, ...fill(array.slice(currentIndex+ 1), startIndex, endIndex, target, currentIndex + 1, isStart)]
//         } else {
//             return [array[currentIndex], ...fill(array.slice(currentIndex+ 1), startIndex, endIndex, target, currentIndex + 1, isStart)]
//         }
//     } else if (currentIndex === startIndex) {
//         return [target, ...fill(array.slice(currentIndex + 1), startIndex, endIndex, target, currentIndex + 1, true)]
//     }
// }