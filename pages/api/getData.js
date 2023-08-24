import db from '../../libs/db';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const query = 'SELECT * FROM data';
        db.query(query, (err, result) => {
            if (err) {
                console.error('Error executing query: ', err);
                return res.status(500).json({ message: 'Internal server error' });
            }
            return res.status(200).json(result);
        });
    } catch (error) {
        console.error('API error: ', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const config = {
    api: {
        responseLimit: false,
    },
}