type numberLiteral = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

type MinusOneMap = {
    "0": "9";
    "1": "0";
    "2": "1";
    "3": "2";
    "4": "3";
    "5": "4";
    "6": "5";
    "7": "6";
    "8": "7";
    "9": "8";
}

type ReverseString<T extends string> = T extends `${infer F}${infer Rest}` ? `${ReverseString<Rest>}${F}` : T;

type Initial<T extends string> = ReverseString<T> extends `${infer A}${infer R}` ? ReverseString<R>: T;

type RemoveLeadingZeros<T extends string> = T extends '0' ? T : T extends `0${infer R}` ? RemoveLeadingZeros<R> : T;

type ParseInt<T extends string> = RemoveLeadingZeros<T>  extends `${infer Digit extends number}` ? Digit : never;

type MinusOneForString<S extends string> = S extends `${Initial<S>}${infer L extends numberLiteral}`? L extends '0' ? `${MinusOneForString<Initial<S>>}${MinusOneMap[L]}` : `${Initial<S>}${MinusOneMap[L]}`:never; 

type MinusOne<T extends number> = T extends 0 ? -1 : ParseInt<MinusOneForString<`${T}`>> 
