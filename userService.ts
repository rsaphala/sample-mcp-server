import type { Order, User } from './products';
import mockUsers from './users';

/**
 * Get all orders for a user by their email address
 * @param email - User's email address
 * @returns Array of orders for the user, or empty array if user not found
 */
export function getOrdersByEmail(email: string): Order[] {
  const user = mockUsers.find(u => u.email === email);
  return user ? user.orders : [];
}

/**
 * Get a specific order by user email and order ID
 * @param email - User's email address
 * @param orderId - Order ID (can be order number, transaction ID, or external order ID)
 * @returns Order details if found, or null if not found
 */
export function getOrderByEmailAndId(email: string, orderId: string): Order | null {
  const user = mockUsers.find(u => u.email === email);
  if (!user) {
    return null;
  }

  const order = user.orders.find(o => 
    o.number === orderId || 
    o.transactionId === orderId || 
    o.externalOrderId === orderId
  );

  return order || null;
}

/**
 * Get user status by email address
 * @param email - User's email address
 * @returns User status string, or null if user not found
 */
export function getUserStatus(email: string): string | null {
  const user = mockUsers.find(u => u.email === email);
  return user ? user.status : null;
}

/**
 * Get user role by email address. Returns 'guest' if email is empty
 * @param email - User's email address (can be empty string)
 * @returns User role string, 'guest' if email is empty, or null if user not found
 */
export function getUserRole(email: string): string | null {
  if (!email || email.trim() === '') {
    return 'guest';
  }

  const user = mockUsers.find(u => u.email === email);
  return user ? user.role : null;
}

