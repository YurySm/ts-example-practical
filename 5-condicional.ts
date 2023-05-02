//условный тип
type Conditional<T> = T extends string ? number : boolean
const value: Conditional<string> = 2