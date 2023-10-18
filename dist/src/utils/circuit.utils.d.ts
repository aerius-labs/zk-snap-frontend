import { Field } from 'o1js';
export declare const mod: (num: Field, mod: Field) => import("o1js/dist/node/lib/field").Field;
export declare const mulMod: (a: Field, b: Field, m: Field) => import("o1js/dist/node/lib/field").Field;
export declare const squareMod: (a: Field, m: Field) => import("o1js/dist/node/lib/field").Field;
export declare const exp: (base: Field, exponent: Field, mod: Field) => import("o1js/dist/node/lib/field").Field;
export declare const convertToField: (num: number | string | bigint) => import("o1js/dist/node/lib/field").Field;
export declare const getRandomNBitNumber: (bits: number) => bigint;
