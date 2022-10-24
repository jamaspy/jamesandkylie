import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {

    if (req.method === 'POST') {
        return await createRsvp(req, res)
    } else {
        return res.status(405).json({message: 'Method not allowed', success: false})
    }
}

async function createRsvp(req, res) {
    let nodemailer = require("nodemailer");
    const body = req.body
    try {
        const newEntry = await prisma.rsvp.create({
            data: {
                name: body.name,
                rsvp: body.rsvp,
                dietReqs: body.dietReqs,
                message: body.message
            }
        })
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
            },
            secure: true,
        });
        const mailData = {
            from: `dontreply@dontreply.com`,
            to: `${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`,
            subject: `Wedding RSVP from ${req.body.name}`,
            text: req.body.message + " | Sent from website",
            html: `    <p> <strong>Wedding RSVP from:</strong> ${body.name}</p>
                       <p>RSVP Status: ${body.rsvp}</p>
                       <p>RSVP Dietary Requirements: ${body.dietReqs}</p>
                       <p>Message: ${body.message}</p>
                   `,
        };
        transporter.sendMail(mailData, function (err, info) {
            if (err)
                res.status(500).json({status: "Email Failed", data: req.body, err});
            else res.status(200).json({status: "Email Sent", data: req.body, info});
        });
        return res.status(200).json(newEntry, {success: true})
    } catch (error) {
        console.error('Request error', error)
        res.status(500).json({error: 'Error creating question', success: false})
    }
}
