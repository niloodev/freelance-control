import { withZod } from '@remix-validated-form/with-zod'
import { Validator } from 'remix-validated-form'
import { z, ZodRawShape } from 'zod'

export const validationLabels = {
    email: z
        .string()
        .min(1, { message: 'Campo obrigatório.' })
        .email('Precisa ser um email válido.'),
    password: z.string().min(1, { message: 'Campo obrigatório.' }),
    tel: z.string().regex(/^\(\d{2}\)\s\d{5}-\d{4}$/, {
        message: 'Não é um número válido.',
    }),
    cnpj: z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, {
        message: 'CNPJ inválido.',
    }),
    meiName: z.string().min(3, { message: 'Mínimo de 3 caracteres.' }),
    name: z
        .string()
        .min(3, { message: 'Mínimo de 5 caracteres.' })
        .regex(/\s/, { message: 'Precisa ser o nome completo.' }),
}

export function createValidator(
    labels: Set<keyof typeof validationLabels>
): Validator<unknown> {
    const validationObject: ZodRawShape = [...labels].reduce(
        (prev: any, cur) => {
            prev[cur] = validationLabels[cur]
            return prev
        },
        {}
    )
    return withZod(z.object(validationObject))
}
