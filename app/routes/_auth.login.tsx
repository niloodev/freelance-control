import {
    ActionFunction,
    HeadersFunction,
    json,
    V2_MetaFunction,
} from '@remix-run/node'
import { createValidator } from '~/utils/validation/validation.boilerplate'

import { ValidatedForm } from 'remix-validated-form'
import { Link, useActionData } from '@remix-run/react'
import { Button, Checkbox, FormControlLabel } from '@mui/material'
import { TextField } from '~/components/form'

const validator = createValidator(new Set(['email', 'password']))

export const headers: HeadersFunction = () => ({
    'Cache-Control': 'private, max-age=604800',
})

export const meta: V2_MetaFunction = () => [
    {
        title: 'Entrar - Mei Invoices',
    },
]

export const action: ActionFunction = async ({ request }) => {
    let formData = await request.formData()
    let validate = await validator.validate(formData)
    if (!validate.data)
        return json(
            { message: 'Verifique seus campos.', logged: false },
            { status: 406 }
        )
    let data = validate.data
    return true
}

export default function Login() {
    const action = useActionData()

    return (
        <ValidatedForm
            validator={validator}
            className="auth__form"
            method="POST"
        >
            {action?.logged == false ? (
                <p className="auth__error">{action?.message}</p>
            ) : (
                <></>
            )}
            <TextField
                variant="outlined"
                type="email"
                label="E-mail"
                name="email"
                placeholder="email@example.com"
            ></TextField>
            <TextField
                variant="outlined"
                type="password"
                label="Senha"
                name="password"
            ></TextField>
            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Manter autenticado"
            />
            <Button variant="contained" type="submit">
                Entrar
            </Button>
            <span>Não possui uma conta?</span>
            <Link to="/register">Cadastre-se</Link>
        </ValidatedForm>
    )
}
