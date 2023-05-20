import {
    createCookieSessionStorage,
    Session,
    SessionData,
} from '@remix-run/node'
import { User } from '~/utils/db/models'
import jwt, { Secret } from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export async function registerUser(user: any) {
    try {
        let salt = await bcrypt.genSalt()
        let hashedPassword = await bcrypt.hash(user.password, salt)
        user.password = hashedPassword
        let nUser = new User(user)
        let alreadyExists = await User.find({ email: user?.email })
        if (alreadyExists.length != 0) throw new Error('User already exists')
        else await nUser.save()
        return nUser
    } catch (e) {
        throw new Error(e as string)
    }
}

export async function loginUser({
    email,
    password,
}: {
    email: string
    password: string
}) {
    try {
        let alreadyExists = await User.find({ email })
        if (alreadyExists.length == 0) throw new Error('Usuário inexistente.')
        let user = alreadyExists[0]
        let validation = await bcrypt.compare(password, user.password)
        if (validation) {
            return { email }
        } else throw new Error('Credenciais incorretas.')
    } catch (e) {
        throw new Error(e as string)
    }
}

export const { getSession, commitSession, destroySession } =
    createCookieSessionStorage({
        cookie: {
            name: '_session',
            maxAge: 604800,
        },
    })

export function createToken(email: string) {
    return new Promise((resolve, reject) => {
        jwt.sign(email, process.env.JWT_KEY as Secret, (err, token) => {
            if (err) {
                reject(err)
                return
            }
            resolve(token)
        })
    })
}

export async function checkToken(cookies: string | null): Promise<{
    session: Session<SessionData, SessionData>
    decodedToken?: string
}> {
    return new Promise((resolve, reject) => {
        getSession(cookies ?? '')
            .then(session => {
                if (!session.has('__auth')) {
                    resolve({ session })
                    return
                }
                const token = session.get('__auth')
                const verify = jwt.verify(token, process.env.JWT_KEY as Secret)
                if (!verify) {
                    resolve({ session })
                    return
                }
                resolve({ session, decodedToken: token })
            })
            .catch(e => reject(e))
    })
}
