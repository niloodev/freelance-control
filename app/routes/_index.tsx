import { json, LoaderArgs, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { checkToken } from '~/actions/auth.actions'

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
    const { session, decodedToken } = await checkToken(
        request.headers.get('Cookie')
    )
    if (decodedToken) return json({ logged: true })
    return json({ logged: false })
}

export default function Home() {
    const data = useLoaderData()

    return <p>{data.logged.toString()}</p>
}
