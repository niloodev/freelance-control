import { V2_MetaFunction } from '@remix-run/node'

import { Link } from '@remix-run/react'
import { TextField, Button } from '@mui/material'

import { motion } from 'framer-motion'

export const meta: V2_MetaFunction = () => [
    {
        title: 'Entrar - Mei Invoices',
    },
]

export default function Login() {
    return (
        <motion.form className="auth__form" action="POST">
            <TextField
                variant="outlined"
                type="email"
                label="Email"
                InputProps={{ style: { fontSize: '1.4rem' } }}
                InputLabelProps={{ style: { fontSize: '1.4rem' } }}
            ></TextField>
            <TextField
                variant="outlined"
                type="password"
                label="Senha"
                InputProps={{ style: { fontSize: '1.4rem' } }}
                InputLabelProps={{ style: { fontSize: '1.4rem' } }}
            ></TextField>
            <Button variant="contained">Entrar</Button>
            <span>Não tem uma conta?</span>
            <Link to="/register">Cadastre-se agora!</Link>
        </motion.form>
    )
}
