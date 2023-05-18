import mongoose from 'mongoose'

let db: typeof mongoose
async function connect() {
    if (db) return db

    try {
        if (process.env.NODE_ENV === 'production') {
            db = await mongoose.connect(process.env.MONGODB_URI as string)
        } else {
            if (!global.__db) {
                global.__db = await mongoose.connect(
                    process.env.MONGODB_URI as string
                )
            }
            db = global.__db
        }
        console.log('Connected to database.')
    } catch (e) {
        throw new Error(e as string)
    }
    return db
}
export { mongoose, connect }
