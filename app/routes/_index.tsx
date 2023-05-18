import { LoaderFunction, redirect } from 'react-router'

export const loader: LoaderFunction = () => {
    throw redirect('/login')
}
