import cl from './App.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/navbar';
import { NavbarAuth } from '@/widgets/navbar_auth';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { getUserAuthData, initAuthData } from '@/entites/User';
import { useSelector } from 'react-redux';

import { AppRouter } from '../providers/router';

export const App = () => {
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cl.app_auth, {}, [])}>
                <NavbarAuth />
                <AppRouter />
            </div>
        )
    }

    return (
        <div className={classNames(cl.app, {}, [])}>
            <Navbar />
            <AppRouter />
        </div>
    )
}