import { memo, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Sections.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getDataSections, getErrorSections, getIsLoadingSections, getSections } from '@/entites/Sections';
import { useSelector } from 'react-redux';
import { SectionItem } from '../SectionItem/SectionItem';
import { VStack } from '@/shared/ui/Stack';

interface SectionsProps {
    className?: string;
}

export const Sections = memo(({ className }: SectionsProps) => {
    const sections = useSelector(getDataSections);
    const isLoading = useSelector(getIsLoadingSections);
    const error = useSelector(getErrorSections);

    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(sections);
    }, [sections])

    useEffect(() => {
        dispatch(getSections());
    }, [dispatch, getSections])

    //TODO 
    if (error) {
        return (
            <div>
                Ошибка
            </div>
        )
    }

    //TODO 
    if (isLoading) {
        return (
            <div>
                Загрузка
            </div>
        )
    }

    return (
        <VStack
            className={classNames(cl.Sections, {}, [className])}
            gap='16'
            max
        >
            {
                sections.map((sec) => (
                    <SectionItem key={sec.title} section={sec} />
                ))
            }
        </VStack>
    );
});
