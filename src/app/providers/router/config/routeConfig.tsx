import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { SectionsPage } from "@/pages/SectionsPage";
import { AppRoutes, AppRoutesWithoutAuth, getPathMain, getPathNotFoundPage, getPathSections } from "@/shared/const/router";
import { RouteProps } from "react-router";

export const routeConfigNotAuth: Record<AppRoutesWithoutAuth, RouteProps> = {
    [AppRoutesWithoutAuth.MAIN]: {
        path: getPathMain(),
        element: <MainPage />
    },
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getPathMain(),
        element: <SectionsPage />
    },
    [AppRoutes.SECTIONS]: {
        path: getPathSections(),
        element: <SectionsPage />
    },
    [AppRoutes.NOT_FOUND_PAGE]: {
        path: getPathNotFoundPage(),
        element: <NotFoundPage />
    },
}