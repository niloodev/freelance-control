import {
    ActionFunction,
    json,
    redirect,
    V2_MetaFunction,
} from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import { createValidator } from '~/utils/validation/validation.boilerplate'

import { ValidatedForm } from 'remix-validated-form'
import { Link } from '@remix-run/react'
import { Button } from '@mui/material'
import { TextField } from '~/components/form'

import { registerUser } from '~/actions/auth.actions'

const validator = createValidator(
    new Set(['email', 'password', 'tel', 'cnpj', 'meiName', 'name'])
)

export const meta: V2_MetaFunction = () => [
    {
        title: 'Cadastro - Mei Invoices',
    },
]

export const action: ActionFunction = async ({ request }) => {
    let formData = await request.formData()
    let validate = await validator.validate(formData)
    if (!validate.data)
        return json(
            { message: 'Verifique seus campos.', logged: false },
            { status: 400 }
        )
    let data = validate.data
    try {
        await registerUser(data)
    } catch (e) {
        return json(
            {
                message: 'Erro ao criar usuário ou usuário existente.',
                logged: false,
            },
            { status: 400 }
        )
    }
    throw redirect('/login')
}

export default function Register() {
    const action = useActionData()

    return (
        <ValidatedForm
            className="auth__form auth__form--extended"
            validator={validator}
            method="POST"
        >
            {action?.logged == false ? (
                <p className="auth__error">{action?.message}</p>
            ) : (
                <></>
            )}
            <div className="auth__row">
                <TextField
                    variant="outlined"
                    type="text"
                    label="Nome"
                    name="name"
                ></TextField>
                <TextField
                    variant="outlined"
                    type="text"
                    label="Nome da Empresa"
                    name="meiName"
                ></TextField>
            </div>
            <div className="auth__row">
                <TextField
                    variant="outlined"
                    type="email"
                    label="E-mail"
                    name="email"
                    placeholder="email@example.com"
                ></TextField>
                <TextField
                    variant="outlined"
                    type="text"
                    label="CNPJ"
                    name="cnpj"
                    placeholder="99.999.999/9999-99"
                    mask="99.999.999/9999-99"
                ></TextField>
            </div>
            <div className="auth__row">
                <TextField
                    variant="outlined"
                    type="password"
                    label="Senha"
                    name="password"
                ></TextField>
                <TextField
                    variant="outlined"
                    type="tel"
                    label="Telefone"
                    name="tel"
                    placeholder="(99) 99999-9999"
                    mask="(99) 99999-9999"
                ></TextField>
            </div>
            <Button variant="contained" type="submit">
                Cadastrar-se
            </Button>
            <span>Já tem uma conta?</span>
            <Link to="/login">Entre agora</Link>
        </ValidatedForm>
    )
}
