/* eslint-disable @typescript-eslint/no-non-null-assertion */
import mail from '@sendgrid/mail'

mail.setApiKey(process.env.SENDGRID_API_KEY!)

export type SendEmailArgs = {
  email: string
  name: string
  message: string
  practiceArea: string
  phone: string
}

const sendEmail = async ({ email, name, message, practiceArea, phone }: SendEmailArgs) => {
  const currentDate = new Date()

  // convert Date to MM/DD/YYYY format
  const sendDate = currentDate.getMonth() + 1 + '/' + currentDate.getDate() + '/' + currentDate.getFullYear()

  // Step 2
  const messageToSend = `Dear Cardinal Law,

  ${message}
  
  Thanks,
  Full Name: ${name}
  Email: ${email}
  Phone: ${phone}
  `

  mail.send({
    to: process.env.DESTINATION_EMAIL,
    from: 'briancilenti@gmail.com',
    subject: practiceArea ? `${name} - ${practiceArea} - ${sendDate}` : `${name} - ${sendDate}`,
    text: messageToSend,
  })
}

export default sendEmail
