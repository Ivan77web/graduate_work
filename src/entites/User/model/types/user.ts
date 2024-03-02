export interface User {
    id: number;
    name: string;
    age: string;
    education: string;
    varinat: string;
    gender: string;
    login: string;
    password: string;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
