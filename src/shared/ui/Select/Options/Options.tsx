import { memo } from "react";
import cl from './Options.module.scss';

import { SelectItem } from "../SelectItem/SelectItem";

interface OptionsProps {
    isOpen: boolean;
    options: string[];
    onClick: (value: string) => void;

}

export const Options = memo((props: OptionsProps) => {
    const {
        isOpen,
        options,
        onClick
    } = props;

    return (
        <>
            {
                isOpen && (
                    <div className={cl.optionalBlock}>
                        {
                            options.map(option =>
                                <SelectItem
                                    key={option}
                                    option={option}
                                    onClick={onClick}
                                />
                            )
                        }
                    </div>
                )
            }
        </>
    );
});
