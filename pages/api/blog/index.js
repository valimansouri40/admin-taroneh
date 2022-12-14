import { API_URL } from '@/config/index';

export default async function blog(req, res) {
    if (req.method === 'GET') {
        const { page, per_page } = req.query;
            
        const backendRes = await fetch(
            `${API_URL}/api/blog`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        );

        const data = await backendRes.json();
            
        if (backendRes.ok) {
            res.status(200).json({ data });
        } else {
            res
                .status(backendRes.status)
                .json({ message: data.msg || 'Error in getting products!' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}
