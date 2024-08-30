export const fetchUserData = async (userId) => {
  const response = await fetch(`/api/user/${userId}`);
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
};