interface User {
    id: string
    username?: string
    age: number
    birthday: {
        year: number
        day: number
        mount: number
    }
}

// получить поля birthday
type ValueOf<T> = T[keyof T]
type Birthday = ValueOf<Pick<User, 'birthday'>>
const data: Birthday = {
    day: 1,
    mount: 2,
    year: 12
}




// omit удалить из интефейса
type NewUser = Omit<User, 'id' | 'username'>
// Pick берет из интефейса
type NewUser2 = Pick<User, 'id' | 'username'>

type CarBrand = 'bmw' | 'lada' | 'toyota' | 'audi'
// Exclude удалить из union
type GermanyCars = Exclude<CarBrand, 'lada' | 'toyota'>
// Extract получить из union
type GermanyCars2 = Extract<CarBrand, 'bmw' | 'audi'>

// Partial делает поля не обязательнми на первом уровне


// рекурсиная проверка на вложенность
type DeepPartial<T> = T extends object ? {
    [P in keyof T]? : DeepPartial<T[P]>
} : T

const optionalUser: DeepPartial<User> =  {
    birthday: {
        
    }
}
