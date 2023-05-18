import { TextFieldProps, TextField as MaterialTextField } from '@mui/material'
import { useField, useControlField } from 'remix-validated-form'
import InputMask from 'react-input-mask'
import { memo } from 'react'

export const TextField: React.FC<
    { name: string; mask?: string } & TextFieldProps
> = memo(
    ({ name, mask = '', ...props }) => {
        const { error, getInputProps, validate } = useField(name)
        const [value, setValue] = useControlField(name)

        return (
            <InputMask
                {...getInputProps({
                    id: name,
                    value: value ?? '',
                    onChange: (e: any) => {
                        setValue(e.target.value)
                        validate()
                    },
                } as any)}
                mask={mask}
                maskPlaceholder={null}
            >
                {
                    ((nextProps: any) => {
                        delete nextProps.mask
                        delete nextProps.maskPlaceholder
                        return (
                            <MaterialTextField
                                InputProps={{
                                    style: { fontSize: '1.4rem' },
                                    ...nextProps,
                                }}
                                InputLabelProps={{
                                    style: { fontSize: '1.4rem' },
                                }}
                                error={!!error}
                                helperText={error}
                                {...props}
                            ></MaterialTextField>
                        )
                    }) as any
                }
            </InputMask>
        )
    },
    (prevProps, nextProps) => prevProps.name == nextProps.name
)
