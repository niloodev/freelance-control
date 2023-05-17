import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction } from '@remix-run/node'
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import main from './assets/css/main.css'

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#666666',
        },
        secondary: {
            main: '#f50057',
        },
        error: {
            main: '#770a0a',
        },
    },
})

const rootLinks = [
    { rel: 'stylesheet', href: main },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
    },
]

export const links: LinksFunction = () => [
    ...(cssBundleHref
        ? [{ rel: 'stylesheet', href: cssBundleHref }, ...rootLinks]
        : [...rootLinks]),
]

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1"
                    />
                    <Meta />
                    <Links />
                </head>
                <body>
                    <Outlet />
                    <ScrollRestoration />
                    <Scripts />
                    <LiveReload />
                </body>
            </html>
        </ThemeProvider>
    )
}
