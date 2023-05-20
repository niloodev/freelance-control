import {
    TextFieldProps,
    TextField as MaterialTextField,
    InputProps,
} from '@mui/material'
import { useField, useControlField } from 'remix-validated-form'
import InputMask from 'react-input-mask'
import { memo, ReactNode } from 'react'

export const TextField: React.FC<
    { name: string; mask?: string } & TextFieldProps
> = memo(
    ({ name, mask = '', ...props }) => {
        const { error, getInputProps, validate } = useField(name)
        const [value, setValue] = useControlField<string>(name)

        return (
            <InputMask
                {...getInputProps({
                    id: name,
                    value: value,
                    mask: mask,
                    onChange: e => {
                        setValue(e.target.value)
                        validate()
                    },
                })}
                {...(props as React.ComponentProps<typeof InputMask>)}
                mask={mask}
                maskPlaceholder={null}
            >
                {
                    ((
                        nextProps: Partial<InputProps> & {
                            mask?: string
                            maskPlaceholder?: string
                        }
                    ) => {
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
                    }) as unknown as ReactNode
                }
            </InputMask>
        )
    },
    (prevProps, nextProps) => prevProps.name == nextProps.name
)
