import cl from './App.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/navbar/ui/Navbar';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { initAuthData } from '@/entites/User';

import { AppRouter } from '../providers/router';

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames(cl.app, {}, [])}>
            <Navbar />
            <AppRouter />
        </div>
    )
}