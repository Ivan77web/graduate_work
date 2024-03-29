import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { RegistrationFormTwo } from '@/entites/RegistrationForm';
import { Icon } from '@/shared/ui/Icon';
import Arrow from '@/shared/assets/icons/arrow.svg';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Registration } from '@/features/registration';

import { ModalRegistrationActions } from '../model/slices/modalRegistration';
import { REGISTRATION } from '../lib/constants';

import { ErrorBlock } from './ErrorBlock';
import cl from './ModalRegistration.module.scss';

const ModalRegistrationTwo = () => {
    const dispatch = useAppDispatch();

    const onNext = () => {
        dispatch(ModalRegistrationActions.setStep('first'));
    }

    return (
        <VStack
            className={classNames(cl.modalRegistration, {}, [])}
            justify='between'
        >
            <div className={cl.back}>
                <Icon
                    Svg={Arrow}
                    colorSVG='gray'
                    width={20}
                    height={20}
                    clickable
                    onClick={onNext}
                />
            </div>

            <VStack
                max
                align='center'
                gap='40'
            >
                <Text
                    text={REGISTRATION}
                    size='30'
                    color='red'
                    align='center'
                    bold
                />

                <RegistrationFormTwo />

                <HStack max>
                    <ErrorBlock />
                </HStack>
            </VStack>

            <HStack justify='end' max>
                <Registration />
            </HStack>
        </VStack>
    )
}

export default ModalRegistrationTwo