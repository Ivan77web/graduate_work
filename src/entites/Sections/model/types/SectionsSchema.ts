export interface SectionsSchema {
    isLoading: boolean,
    error?: string,
    data: SectionItem[]
}

export interface SectionItem {
    id: string;
    title: string;
}