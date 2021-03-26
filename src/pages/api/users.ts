import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Lucas'},
    { id: 1, name: 'Shae'},
    { id: 1, name: 'Susan'},
  ];

  return response.json(users);
}
