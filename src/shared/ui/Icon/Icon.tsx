import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Icon.module.scss';

type SVGProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

type ColorSVG = 'gray' | 'red' | 'gray-black' | 'green';

interface IconBaseProps extends SVGProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    colorSVG?: ColorSVG;
    isRotate?: boolean;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        colorSVG = 'gray',
        isRotate,
        ...otherProps
    } = props;

    if (clickable) {
        return (
            <button
                type="button"
                className={classNames(cl.button, {}, [className])}
                onClick={props.onClick}
                style={{ height, width }}
            >
                <Svg
                    className={classNames(cl.icon, { [cl.rotate]: isRotate }, [cl[colorSVG]])}
                    width={width}
                    height={height}
                    {...otherProps}
                    onClick={undefined}
                />
            </button>
        );
    }

    return (
        <Svg
            className={classNames(cl.icon, { [cl.rotate]: isRotate }, [className, cl[colorSVG]])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );
});
