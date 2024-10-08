import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../../actions/userActions';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  const loading = useSelector(state => state.user.loading);
  const error = useSelector(state => state.user.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="m-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users within HubOEM.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add User
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full">
              <thead className="bg-white">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    User Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Group Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  {/* <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th> */}
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {users.map(user => (
                  <tr key={user.id} className="border-t border-gray-200">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {user.first_name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.group_name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.email}</td>
                    {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.role}</td> */}
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                      <a href={`/users/${user.id}`} className="text-indigo-600 hover:text-indigo-900">
                        View<span className="sr-only">, {user.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
