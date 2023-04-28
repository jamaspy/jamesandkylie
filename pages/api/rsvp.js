import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
let nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
  secure: true,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    await createRsvp(req, res);
    return res.status(200).json({ status: "RSVP Stored & Email Sent" });
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function createRsvp(req, res) {
  const body = req.body;

  const mailData = {
    from: `dontreply@dontreply.com`,
    to: `${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`,
    subject: `Wedding RSVP from ${req.body.name}`,
    text: req.body.message + " | Sent from website",
    html: `<p> <strong>Wedding RSVP from:</strong> ${body.name}</p>
           <p>RSVP Status: ${body.rsvp}</p>
           <p>RSVP Dietary Requirements: ${body.dietReqs}</p>
           <p>Message: ${body.message}</p>
        `,
  };

  await prisma.rsvp
    .create({
      data: {
        name: body.name,
        rsvp: body.rsvp,
        dietReqs: body.dietReqs,
        message: body.message,
      },
    })
    .then((r) => {
      transporter.sendMail(mailData, function (err, info) {
        if (err)
          return res
            .status(500)
            .json({ status: "Email Failed", data: req.body, err });
        else
          return res
            .status(200)
            .json({ status: "Email Sent", data: res.data, info });
      });
    })
    .catch((error) =>
      res
        .status(500)
        .json({ status: "Error Creating & Sending", data: req.body, error })
    );
}
