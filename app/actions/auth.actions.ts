import { User } from '~/utils/db/models'
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
