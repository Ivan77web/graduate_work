export interface RegistrationFormSchema {
    name: FormItem,
    age: FormItem,
    education: FormItem,
    varinat: FormItem,
    gender: FormItem,
    login: FormItem,
    password: FormItem,
    repeat_password: FormItem,
}

export interface FormItem {
    value: string;
    errorText: string | null | boolean;
}