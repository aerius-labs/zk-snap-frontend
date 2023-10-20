// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch('http://localhost:3000/proposal');
  const proposals = await response.json();
  res.status(200).json(proposals);
}