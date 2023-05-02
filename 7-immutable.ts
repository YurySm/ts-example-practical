interface User {
    username: string
}

const obj: User = {
    username: 'John'
}

// Readonly не даст изменить объек
function userFn(user: Readonly<User>) {
    user.username = '111' // ошибка
}
userFn(obj)
