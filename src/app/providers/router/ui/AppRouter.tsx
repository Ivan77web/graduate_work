import { Route, RouteProps, Routes } from "react-router-dom"
import { routeConfig } from "../config/routeConfig"
import { Suspense, memo, useCallback } from "react"
import { useSelector } from "react-redux"
import { getUserAuthData } from "@/entites/User"
import { getPathNotFoundPage } from "@/shared/const/router"
import { MainPage } from "@/pages/MainPage"

const AppRouter = () => {
    const authData = useSelector(getUserAuthData);

    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={<div>LOADING</div>}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, [])

    if (!authData) {
        return (
            <Routes>
                <Route
                    key={getPathNotFoundPage()}
                    path={getPathNotFoundPage()}
                    element={<MainPage />}
                />
            </Routes>
        )
    }

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
}

export default memo(AppRouter);