export interface LoginFormSchema {
    login: FormItem;
    password: FormItem;
}

export interface FormItem {
    value: string;
    errorText: string | null | boolean;
}