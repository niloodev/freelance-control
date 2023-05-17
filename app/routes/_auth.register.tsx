import type { V2_MetaFunction } from '@remix-run/react'
import { Link } from '@remix-run/react'

import { motion } from 'framer-motion'

export const meta: V2_MetaFunction = () => [
    {
        title: 'Cadastro - Mei Invoices',
    },
]

export default function Register() {
    return (
        <motion.form
            className="auth__form"
            action="POST"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Link to="/login">IR PARA LOGIN</Link>
        </motion.form>
    )
}
