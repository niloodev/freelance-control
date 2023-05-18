import { LinksFunction } from '@remix-run/node'
import { useOutlet, useLocation } from '@remix-run/react'

import { AnimatePresence, motion } from 'framer-motion'

import auth from '../assets/css/layout/auth.css'

export const links: LinksFunction = () => [
    {
        href: auth,
        rel: 'stylesheet',
    },
]

export default function AuthLayout() {
    const outlet = useOutlet()
    const location = useLocation()
    return (
        <main>
            <section className="auth">
                <h1>Mei Invoices</h1>
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        className="auth__wrapper"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{
                            duration: 0.15,
                        }}
                        key={location.pathname}
                    >
                        {outlet}
                    </motion.div>
                </AnimatePresence>
            </section>
        </main>
    )
}
