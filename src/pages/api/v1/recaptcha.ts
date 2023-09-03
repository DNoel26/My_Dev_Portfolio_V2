/** @format */

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const result = await fetch(
                'https://www.google.com/recaptcha/api/siteverify',
                {
                    method: 'POST',
                    body: `secret=${process.env.GOOGLE_SECRET_KEY_V3}&response=${req.body.token}`,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                },
            );
            const data = await result.json();

            return res.status(200).json({ ...data });
        } catch (err) {
            console.error(err);

            return res.status(500).json({ error: err });
        }
    }

    return res.status(405).json({ data: 'Method not found' });
}
