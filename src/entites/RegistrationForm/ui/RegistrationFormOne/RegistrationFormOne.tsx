import { Input } from "@/shared/ui/Input"
import { Select } from "@/shared/ui/Select"
import { VStack } from "@/shared/ui/Stack"
import { AGE, EDUCATION, GENDER, NAME_FIRSTNAME, VARIANT, education_options, gender_options, variant_options } from "../../lib/constants"
import { useCallback } from "react"
import { useSelector } from "react-redux"
import { getAge, getEducation, getGender, getName, getVarinat } from "../../model/selectors/RegistrationForm"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { RegistrationFormActions } from "../../model/slices/RegistrationFormSlice"

export const RegistrationFormOne = () => {
    const dispatch = useAppDispatch();
    const name_firstname = useSelector(getName);
    const age = useSelector(getAge);
    const education = useSelector(getEducation);
    const variant = useSelector(getVarinat);
    const gender = useSelector(getGender);

    const onChangeName = useCallback((value: string) => {
        dispatch(RegistrationFormActions.setName(value));
    }, [dispatch])

    const onChangeAge = useCallback((value: string) => {
        dispatch(RegistrationFormActions.setAge(value));
    }, [dispatch])

    const onChangeEducation = useCallback((value: string) => {
        dispatch(RegistrationFormActions.setEducation(value));
    }, [dispatch])

    const onChangeVariant = useCallback((value: string) => {
        dispatch(RegistrationFormActions.setVarinat(value));
    }, [dispatch])

    const onChangeGender = useCallback((value: string) => {
        dispatch(RegistrationFormActions.setGender(value));
    }, [dispatch])

    // TODO Добавить аддоны и линию

    return (
        <VStack gap='24' max >
            <Input
                placeholder={NAME_FIRSTNAME}
                value={name_firstname.value}
                onChange={onChangeName}
                errorText={name_firstname.errorText}
            />
            <Input
                placeholder={AGE}
                value={age.value}
                onChange={onChangeAge}
                errorText={age.errorText}
            />
            <Select
                options={education_options}
                value={education.value}
                onChange={onChangeEducation}
                placeholder={EDUCATION}
                isError={education.errorText}
            />
            <Select
                options={variant_options}
                value={variant.value}
                onChange={onChangeVariant}
                placeholder={VARIANT}
                isError={variant.errorText}
            />
            <Select
                options={gender_options}
                value={gender.value}
                onChange={onChangeGender}
                placeholder={GENDER}
                isError={gender.errorText}
            />
        </VStack >
    )
}