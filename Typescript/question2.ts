type ReverseString<T extends string, Z extends string = ""> = T extends `${infer A}${infer B}` ?  B extends "" ? `${A}${Z}` : ReverseString<B, `${A}${Z}`> : never

type Rev1 = ReverseString<"kanya is bad">;    