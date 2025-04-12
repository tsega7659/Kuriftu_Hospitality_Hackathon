import { API_BASE_URL, API_ENDPOINTS } from './config';

class UserApi {
  async getAllUsers() {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.users.list}`);
      if (!response.ok) throw new Error('Failed to fetch users');
      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  async getUserById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.users.getById(id)}`);
      if (!response.ok) throw new Error(`Failed to fetch user with id ${id}`);
      return await response.json();
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
      throw error;
    }
  }

  async createUser(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.users.create}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) throw new Error('Failed to create user');
      return await response.json();
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async updateUser(id, userData) {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.users.update(id)}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) throw new Error(`Failed to update user with id ${id}`);
      return await response.json();
    } catch (error) {
      console.error(`Error updating user ${id}:`, error);
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.users.delete(id)}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error(`Failed to delete user with id ${id}`);
      return await response.json();
    } catch (error) {
      console.error(`Error deleting user ${id}:`, error);
      throw error;
    }
  }
}

export const userApi = new UserApi();
