import db from '../../libs/db';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        /* const query = 'SELECT * FROM ( SELECT * FROM data ORDER BY dataId DESC LIMIT 50 )Var1 ORDER BY dataId ASC'; */
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
        bodyParser: false, // Defaults to true. Setting this to false disables body parsing and allows you to consume the request body as stream or raw-body.
        responseLimit: false, // Determines how much data should be sent from the response body. It is automatically enabled and defaults to 4mb.
        externalResolver: true, // Disables warnings for unresolved requests if the route is being handled by an external resolver like Express.js or Connect. Defaults to false.
    },
}