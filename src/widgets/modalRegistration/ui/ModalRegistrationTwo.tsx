import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './ModalRegistration.module.scss';
import { Text } from '@/shared/ui/Text';
import { REGISTRATION } from '../lib/constants';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { RegistrationFormTwo } from '@/entites/RegistrationForm';
import { Icon } from '@/shared/ui/Icon';
import Arrow from '@/shared/assets/icons/arrow.svg';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ModalRegistrationActions } from '../model/slices/modalRegistration';

const ModalRegistrationTwo = () => {
    const dispatch = useAppDispatch();

    const onNext = () => {
        dispatch(ModalRegistrationActions.setStep('first'));
    }

    // TODO валидность инпутов
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
            </VStack>

            {/* TODO Вынести в фичу */}
            <HStack justify='end' max>
                <Button variant='outline_red'>
                    {REGISTRATION}
                </Button>
            </HStack>
        </VStack>
    )
}

export default ModalRegistrationTwo