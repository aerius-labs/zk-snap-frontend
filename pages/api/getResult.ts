// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { proposalId } = req.query;
    const response = await fetch(`${process.env.DATABASEURL}/proposal/${proposalId}/reveal-vote`);
    const results = await response.json();
    res.status(200).json(results);
}
