export enum AppRoutesWithoutAuth {
    'MAIN',
}

export enum AppRoutes {
    'MAIN',
    'SECTIONS',
    'NOT_FOUND_PAGE'
}

export const getPathMain = () => '/';
export const getPathSections = () => '/sections';
export const getPathNotFoundPage = () => '*';

