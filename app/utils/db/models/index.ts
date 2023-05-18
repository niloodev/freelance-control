import { mongoose } from '../db.server'

import { userSchema } from './db.schemas'

export const User = mongoose.models.User || mongoose.model('User', userSchema)
