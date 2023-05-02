import {ChangeEvent, useMemo, useState} from 'react';

export interface SelectOption<T extends string> {
    value: T
    content: string
}
interface SelectProps<T extends string> {
    options?: SelectOption<T>[]
    value?: T
    onChange: (value: string) => void
    readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {options, value, onChange, readonly} = props
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if(onChange) {
            onChange(e.target.value)
        }
    }

    const optionsList = useMemo(
        () =>
            options?.map(opt => (
                <option key={opt.value} value={opt.value}>
                    {opt.content}
                </option>
            ))

        , [options]);

    return (
        <select
            disabled={readonly}
            value={value}
            onChange={onChangeHandler}
            >

            {optionsList}
        </select>
    )
}

enum UserRole {
    ADMIN = 'Админ',
    USER = 'Юзер'
}
const items: SelectOption<UserRole>[]  = [
    {
        content: 'Админ',
        value: UserRole.ADMIN
    },
    {
        content: 'Юзер',
        value: UserRole.USER
    }
]

const App = () => {
    const [role, setRole] = useState(UserRole.USER);

    const onChange = (value: UserRole) => {
        setRole(value)
    }

    return (
        <Select
            value={role}
            options={items}
            onChange={onChange}/>
    )
}



