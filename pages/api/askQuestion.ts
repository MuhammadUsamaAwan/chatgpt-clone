import queryCompletion from '@/lib/queryCompletion';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt, model } = req.body;
  if (!prompt || !model) return res.status(400).json({ message: 'Missing fields' });
  const response = await queryCompletion(prompt, model);

  res.status(200).json({ answer: response || 'ChatGPT was unable to find an answer for that' });
}
