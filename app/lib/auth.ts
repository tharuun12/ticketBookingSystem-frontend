import { jwtVerify } from 'jose';

export async function getUser() {
  try {
    //Retrieves a JWT token from 
    const token = localStorage.getItem('token');
    if (!token) return null;

    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    return payload;
  } catch (error) {
    return null;
  }
}

// Checks if a token exists in localStorage
export function isAuthenticated() {
  return !!localStorage.getItem('token');
}

// Removes the token from localStorage
export function logout() {
  localStorage.removeItem('token');
  window.location.href = '/signin';
}