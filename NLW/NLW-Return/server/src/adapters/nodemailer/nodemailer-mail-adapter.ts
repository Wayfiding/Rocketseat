import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "08d6b8c76bd8d8",
      pass: "bda37c8aaf3857"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget<oi@feedget.com>',
            to: 'Alberto Junior<albertojr11@hotmail.com>',
            subject,
            html: body,
        })



    }
}