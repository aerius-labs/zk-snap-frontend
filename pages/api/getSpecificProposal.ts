// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { id } = req.query;
    const response = await fetch(`http://localhost:3000/proposal/${id}`);
    const proposalDetails = await response.json();
    res.status(200).json(proposalDetails);
}
