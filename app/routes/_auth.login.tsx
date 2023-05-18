import { ActionFunction, json, V2_MetaFunction } from '@remix-run/node'
import { createValidator } from '~/utils/validation/validation.boilerplate'

import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'

import { ValidatedForm } from 'remix-validated-form'
import { Link, useActionData } from '@remix-run/react'
import { Button } from '@mui/material'
import { TextField } from '~/components/form'

const validator = createValidator(new Set(['email', 'password']))

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
            <Button variant="contained" type="submit">
                Entrar
            </Button>
            <Button variant="contained" type="submit" name="google-signin">
                Continuar com <GoogleIcon fontSize="large" />
            </Button>
            <Button variant="contained" type="submit" name="facebook-signin">
                Continuar com <FacebookIcon fontSize="large" />
            </Button>
            <span>Não possui uma conta?</span>
            <Link to="/register">Cadastre-se</Link>
        </ValidatedForm>
    )
}
