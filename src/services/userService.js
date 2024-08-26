import axios from 'axios';

const BASE_USERS_URL = 'https://huboem.dev/api/v2/users';

const getUserDetails = async (userId, authToken) => {
  try {
    const response = await axios.get(`${BASE_USERS_URL}/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authToken,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

const userService = {
  // Other functions...
  updateUser: async (userId, userData) => {
    // ...
  },

  deleteUser: async (userId) => {
    // ...
  }
};

// Export getUserDetails separately
export { getUserDetails };

// Export userService as the default export
export default userService;


// import axios from 'axios';

// const BASE_URL = 'http://127.0.0.1:3000/api/v2/users';

// const userService = {
//   fetchUsers: async () => {
//     try {
//       const response = await axios.get(BASE_URL);
//       return response.data;
//     } catch (error) {
//       throw error.response ? error.response.data : error.message;
//     }
//   },

//   updateUser: async (userId, userData) => {
//     try {
//       const response = await axios.put(`${BASE_URL}/${userId}`, userData);
//       return response.data;
//     } catch (error) {
//       throw error.response ? error.response.data : error.message;
//     }
//   },

//   deleteUser: async userId => {
//     try {
//       await axios.delete(`${BASE_URL}/${userId}`);
//     } catch (error) {
//       throw error.response ? error.response.data : error.message;
//     }
//   }
// };

// export default userService;
