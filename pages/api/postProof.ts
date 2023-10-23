// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const {proposalId} = req.query; 
    const proof = req.body; // Data sent in the POST request
    const response = await fetch(`${process.env.DATABASEURL}/proposal/${proposalId}/vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: proof,
    });

    const result = await response.json();
    res.status(200).json(result);

  } else {
    // Return an error for unsupported methods
    res.status(405).send('Method Not Allowed');
  }
}
