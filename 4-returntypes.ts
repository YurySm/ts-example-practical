interface User {id: string, data: string}

function fn(arg1: number, arg2: string): User {
   //

    return {id: '1', data: 'string'}
}

// получить тип который ф-ция должна вернуть
type FnRes = ReturnType<typeof fn>

const obj: FnRes = {
    id: '3',
    data: 'value'
}

// получить типы аргумектов функции // array
type FnArg = Parameters<typeof fn>
const args: FnArg = [1, 'str']  // const args: [arg1: number, arg2: string]