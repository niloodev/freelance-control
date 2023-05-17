import { LinksFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'

import { AnimatePresence } from 'framer-motion'

import auth from '../assets/css/layout/auth.css'

export const links: LinksFunction = () => [
    {
        href: auth,
        rel: 'stylesheet',
    },
]

export default function AuthLayout() {
    return (
        <main>
            <section className="auth">
                <h1>Mei Invoices</h1>
                <AnimatePresence initial={false}>
                    <Outlet />
                </AnimatePresence>
            </section>
        </main>
    )
}
