import type { NextApiRequest, NextApiResponse } from 'next'

import { handleRestRequest, CustomError } from '../../lib/handleRestRequest'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => await handleRestRequest(async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getTestResource(req, res)
      break
    default:
      throw new CustomError('Method not allowed', 405)
  }
}, { req, res })

const formatTime = (dateObj = new Date()): string => `${`0${dateObj.getHours()}`.slice(-2)}:${`0${dateObj.getMinutes()}`.slice(-2)}`

const getTestResource = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  // const data = req.body
  // Return results
  res.statusCode = 200
  res.json({ message: `Hello from API at ${formatTime()}` })
}
