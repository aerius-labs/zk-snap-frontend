// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch('http://localhost:3000/dao/info');
  const daos = await response.json();
  res.status(200).json(daos);
}
