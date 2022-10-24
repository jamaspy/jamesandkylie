import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    try {
        const guests = await prisma.rsvp.findMany()
        return res.status(200).json(guests, { success: true })
    } catch (error) {
        console.error('Request error', error)
        res.status(500).json({ error: 'Error creating question', success: false })
    }
}


