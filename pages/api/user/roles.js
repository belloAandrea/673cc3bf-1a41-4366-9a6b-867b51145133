import { getUserRoles } from 'your-database-manager';

export default async function handler(req, res) {
  const { userId } = req.query;
  const roles = await getUserRoles(userId);
  res.status(200).json({ roles });
};