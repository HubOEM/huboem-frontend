import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { sessionActions } from '../actions'; // Import the createSession function from the sessionsService file

import { getUserDetails } from '../services/userService'; // Adjust the import path as needed


const { createSessionRequest } = sessionActions;

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { token, user_id } = useSelector(state => state.session);

  const gotoPage = async () => {
    const userResponseData = await getUserDetails(user_id, token);
    console.log(userResponseData);

    // Check user group elevation and navigate accordingly
    switch (userResponseData.group?.elevation) {
      case 'admin':
        navigate('/admin/');
        break;
      case 'oem_user':
        navigate('/oem/');
        break;
      case 'cpg_user':
        navigate('/cpg/');
        break;
      case 'dist_user':
        navigate('/distributor/');
        break;
      default:
        navigate('/admin/');
        break;
    }
  }

  useEffect(() => {
    if (token && user_id) gotoPage();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the request body
    const requestBody = {
      email: email,
      password: password,
    };


    dispatch(createSessionRequest(requestBody));

    return;


    // try {

    //   // Use the createSession function from the sessionsService file
    //   const data = await createSession(requestBody);
    //   console.log('Sign in successful:', data);

    //   // Use the getUserDetails function from the userService file
    //   const userResponseData = await getUserDetails(data.user_id, data.auth_token);
    //   console.log(userResponseData);

    //   // Check user group elevation and navigate accordingly
    //   switch (userResponseData.group?.elevation) {
    //     case 'admin':
    //       navigate('/admin/');
    //       break;
    //     case 'oem_user':
    //       navigate('/oem/');
    //       break;
    //     case 'cpg_user':
    //       navigate('/cpg/');
    //       break;
    //     case 'dist_user':
    //       navigate('/distributor/');
    //       break;
    //     default:
    //       navigate('/admin/');
    //       break;
    //   }
    // } catch (error) {
    //   console.error('Sign in error:', error);
    //   // Handle error, e.g., display an error message to the user
    // }
  };


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { createSession } from '../redux/actions/sessionActions';
// import { getUserDetails } from '../redux/actions/userActions';

// function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const { userData = null, error = null } = useSelector((state) => state.sessions || {});

//     // Effect to handle navigation based on user data and fetch user details
//     useEffect(() => {
//         if (userData) {
//             // Fetch user details if not already available
//             if (!userData.details) {
//                 dispatch(getUserDetails(userData.id, userData.token));
//             }

//             // Navigate based on user group
//             switch (userData.group?.elevation) {
//                 case 'admin':
//                     navigate('/admin/');
//                     break;
//                 case 'oem_user':
//                     navigate('/oem/');
//                     break;
//                 case 'cpg_user':
//                     navigate('/cpg/');
//                     break;
//                 case 'dist_user':
//                     navigate('/distributor/');
//                     break;
//                 default:
//                     navigate('/admin/');
//                     break;
//             }
//         }
//     }, [userData, navigate, dispatch]);

//     // Handle login form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Construct the request body
//         const requestBody = {
//             email,
//             password,
//         };

//         try {
//             // Call createSession function from sessionService
//             const response = await createSession(requestBody);
//             // Handle navigation or state update based on the response
//             console.log(response);
//         } catch (error) {
//             console.error('Error logging in:', error);
//         }
//     };

//     return (
//         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//             <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//                 <img
//                     className="mx-auto h-10 w-auto"
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                     alt="Your Company"
//                 />
//                 <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//                     Sign in to your account
//                 </h2>
//             </div>

//             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//                 <form className="space-y-6" onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                             Email address
//                         </label>
//                         <div className="mt-2">
//                             <input
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 autoComplete="email"
//                                 required
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <div className="flex items-center justify-between">
//                             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                                 Password
//                             </label>
//                             <div className="text-sm">
//                                 <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                                     Forgot password?
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="mt-2">
//                             <input
//                                 id="password"
//                                 name="password"
//                                 type="password"
//                                 autoComplete="current-password"
//                                 required
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <button
//                             type="submit"
//                             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                         >
//                             Sign in
//                         </button>
//                     </div>
//                 </form>

//                 <p className="mt-10 text-center text-sm text-gray-500">
//                     Not a member?{' '}
//                     <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//                         Start a 14-day free trial
//                     </a>
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default LoginPage;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for redirection

// function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Construct the request body
//     const requestBody = {
//       email: email,
//       password: password
//     };

//     try {
//       const response = await fetch('https://huboem.dev/api/v1/sessions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(requestBody)
//       });

//       if (!response.ok) {
//         throw new Error('Failed to sign in');
//       }

//       const data = await response.json();
//       console.log('Sign in successful:', data);

//       // Redirect user to appropriate dashboard based on user type
//       switch (data.user_type) {
//         case 'admin':
//           navigate('/admin_dashboard');
//           break;
//         case 'cpg':
//           navigate('/cpg_dashboard');
//           break;
//         case 'distributor':
//           navigate('/distributor_dashboard');
//           break;
//         case 'oem':
//           navigate('/oem_dashboard');
//           break;
//         default:
//           navigate('/admin_dashboard');
//           break;
//       }
//     } catch (error) {
//       console.error('Sign in error:', error);
//       // Handle error, e.g., display an error message to the user
//     }
//   };

//   return (
//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//         <img
//           className="mx-auto h-10 w-auto"
//           src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//           alt="Your Company"
//         />
//         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//           Sign in to your account
//         </h2>
//       </div>

//       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//               Email address
//             </label>
//             <div className="mt-2">
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div>
//             <div className="flex items-center justify-between">
//               <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                 Password
//               </label>
//               <div className="text-sm">
//                 <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>
//             <div className="mt-2">
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>

//         <p className="mt-10 text-center text-sm text-gray-500">
//           Not a member?{' '}
//           <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//             Start a 14 day free trial
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
