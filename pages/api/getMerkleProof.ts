// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { daoId, memberPublicKey } = req.query;
    const response = await fetch(`http://localhost:3000/dao/${daoId}/merkle-proof/${memberPublicKey}`);
    const merkleProof = await response.json();
    res.status(200).json(merkleProof);
}