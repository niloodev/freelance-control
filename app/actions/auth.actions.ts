import { User } from '~/utils/db/models'
import bcrypt from 'bcryptjs'

export async function registerUser(user: any) {
    try {
        let salt = bcrypt.genSaltSync()
        let hashedPassword = bcrypt.hashSync(user.password, salt)
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
