import admin from 'firebase-admin';
import queryCompletion from '@/lib/queryCompletion';
import type { NextApiRequest, NextApiResponse } from 'next';
import { adminDb } from '@/firebaseAdmin';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt, chatId, model, session } = req.body;
  if (!prompt || !chatId || !model || !session) return res.status(400).json({ message: 'Missing fields' });
  const response = await queryCompletion(prompt, model);
  const message: Message = {
    text: response || 'ChatGPT was unable to find an answer for that',
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'ChatGPT',
      avatar: null,
    },
  };

  await adminDb
    .collection('users')
    .doc(session?.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message);

  res.status(200).json({ answer: message.text });
}
