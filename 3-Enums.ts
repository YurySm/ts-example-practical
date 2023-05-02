enum UserRoles {
    USER = 'user',
    ADMIN = 'admin'
}


// аналог enum
const UserRoleObj = {
    USER: 'user',
    ADMIN: 'admin'
} as const

type UserRole = typeof UserRoleObj[keyof typeof UserRoleObj] //"admin" | "user"

function fnn(role: UserRole ) {
    ////////
}

fnn('admin')