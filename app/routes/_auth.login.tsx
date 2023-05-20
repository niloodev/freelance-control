import {
    ActionFunction,
    HeadersFunction,
    json,
    LoaderArgs,
    LoaderFunction,
    redirect,
    V2_MetaFunction,
} from '@remix-run/node'
import { createValidator } from '~/utils/validation/validation.boilerplate'
import {
    loginUser,
    createToken,
    checkToken,
    getSession,
    commitSession,
} from '~/actions/auth.actions'

import { ValidatedForm } from 'remix-validated-form'
import { Link, useActionData, useNavigation } from '@remix-run/react'
import { Button, Checkbox, FormControlLabel } from '@mui/material'
import { TextField } from '~/components/form'

const validator = createValidator(new Set(['email', 'password']))

export const meta: V2_MetaFunction = () => [
    {
        title: 'Entrar - Mei Invoices',
    },
]

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
    const { decodedToken } = await checkToken(request.headers.get('Cookie'))
    if (decodedToken) throw redirect('/')
    return null
}

export const action: ActionFunction = async ({ request }) => {
    const { session, decodedToken } = await checkToken(
        request.headers.get('Cookie')
    )
    if (decodedToken) redirect('/dashboard')
    const formData = await request.formData()
    const validate = await validator.validate(formData)
    if (!validate.data)
        return json(
            { message: 'Verifique seus campos.', logged: false },
            { status: 406 }
        )
    try {
        const { email } = await loginUser(
            validate.data as { email: string; password: string }
        )
        const token = await createToken(email)
        session.set('__auth', token)
    } catch (e) {
        return json(
            { message: 'Login inválido.', logged: false },
            { status: 401 }
        )
    }
    throw redirect('/', {
        headers: {
            'Set-Cookie': await commitSession(session),
        },
    })
}

export default function Login() {
    const action = useActionData()
    const navigation = useNavigation()

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
                disabled={navigation.state == 'submitting'}
            ></TextField>
            <TextField
                variant="outlined"
                type="password"
                label="Senha"
                name="password"
                disabled={navigation.state == 'submitting'}
            ></TextField>
            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Manter autenticado"
                disabled={navigation.state == 'submitting'}
            />
            <Button
                variant="contained"
                disabled={navigation.state == 'submitting'}
                type="submit"
            >
                Entrar
            </Button>
            <span>Não possui uma conta?</span>
            <Link to="/register">Cadastre-se</Link>
        </ValidatedForm>
    )
}
