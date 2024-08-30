import { sendPasswordResetEmail } from 'some-auth-library';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    // Logic to send password recovery email
    await sendPasswordResetEmail(email);
    res.status(200).json({ message: 'Recovery email sent' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};