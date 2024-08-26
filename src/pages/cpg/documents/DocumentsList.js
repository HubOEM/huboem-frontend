import React, { useState } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'


const documents = [
  {
    name: 'User Manual',
    machineModel: 'Wrapper',
    serialNumber: '67834',
    company: 'Doverco',
    type: '.pdf',
    url: 'https://www.survivorlibrary.com/library/aunt_carolines_dixieland_recipes-a_rare_collection_of_choice_southern_dishes-1922.pdf', // Add the PDF URL for each document
  },
  {
    name: 'User Manual',
    machineModel: 'Capper',
    serialNumber: '543',
    company: 'G3',
    type: '.pdf',
    url: 'https://www.survivorlibrary.com/library/aunt_carolines_dixieland_recipes-a_rare_collection_of_choice_southern_dishes-1922.pdf',
  },
  {
    name: 'User Manual',
    machineModel: 'Filler',
    serialNumber: '543',
    company: 'Big Packaging Wharehouse',
    type: '.pdf',
    url: 'https://www.survivorlibrary.com/library/aunt_carolines_dixieland_recipes-a_rare_collection_of_choice_southern_dishes-1922.pdf',
  },
  // More documents...
];

function ListView() {
  const openFileWindow = (url) => {
    window.open(url, '_blank');
  };

  return (
    <table className="min-w-full divide-y divide-gray-300 mt-12">
      <thead>
        <tr>
          <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
            Document Name
          </th>
          <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
            Machine Model
          </th>
          <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
            Serial Number
          </th>
          <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
            Company
          </th>
          <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
            Type
          </th>
          <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0">
            <span className="sr-only">View</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {documents.map((document) => (
          <tr key={document.serialNumber}>
            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{document.name}</td>
            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{document.machineModel}</td>
            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{document.serialNumber}</td>
            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{document.company}</td>
            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{document.type}</td>
            <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <button onClick={() => openFileWindow(document.url)} className="text-indigo-600 hover:text-indigo-900">
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}



function Request() {
  return (
    <form className="mt-12">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="col-span-full">
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
              About
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Tell us what document you are looking for.</p>
          </div>
        </div>
      </div>
    </form >
  );
}

function Upload() {
  return (
    <form className="mt-12">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="col-span-full">
            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
              Upload Documents
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form >
  );
}

function DocumentsList() {
  const [view, setView] = useState('list');

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-12 lg:mr-12">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Documents</h1>
          <p className="mt-2 text-sm text-gray-700">
            View a master list of all your documents, request for documents, or upload your own.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <div className="flex">
            <button
              type="button"
              className={`block rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm focus:outline-none ${view === 'list' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleViewChange('list')}
            >
              List View
            </button>
            <button
              type="button"
              className={`block rounded-md ml-2 px-3 py-2 text-center text-sm font-semibold shadow-sm focus:outline-none ${view === 'request' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleViewChange('request')}
            >
              Request
            </button>
            <button
              type="button"
              className={`block rounded-md ml-2 px-3 py-2 text-center text-sm font-semibold shadow-sm focus:outline-none ${view === 'upload' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleViewChange('upload')}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
      {view === 'list' && <ListView />}
      {view === 'request' && <Request />}
      {view === 'upload' && <Upload />}
    </div>
  );
}

export default DocumentsList;
