import mongoose from 'mongoose'

// declaration.d.ts
declare module '*.scss'
declare global {
    var __db: typeof mongoose
}
