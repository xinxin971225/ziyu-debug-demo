type Test<T> = T extends number ? 1 : 2;

export type ResType = Test<any>;
