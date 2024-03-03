export enum AppRoutesWithoutAuth {
    'MAIN',
}

export enum AppRoutes {
    'MAIN',
    'SECTIONS',
    'NOT_FOUND_PAGE',
    'LESSON',
}

export const getPathMain = () => '/';
export const getPathSections = () => '/sections';
export const getPathLesson = (id: string) => `/lesson/${id}`;
export const getPathNotFoundPage = () => '*';

