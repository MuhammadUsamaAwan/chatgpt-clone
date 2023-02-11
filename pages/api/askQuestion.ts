import queryCompletion from '@/lib/queryCompletion';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt, chatId, model, session } = req.body;
  if (!prompt || !chatId || !model || !session) return res.status(400).json({ message: 'Missing fields' });
  const response = await queryCompletion(prompt, model);
}
