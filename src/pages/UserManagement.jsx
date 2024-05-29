import React, { useState } from 'react'
import AddUser from '../Components/AddUser';

const UserManagement = () => {
  const [modalOpen,setModalOpen]=useState(false)    
    const participants = [
        { id: 1, name: 'Manasoko Emmanuel', school: 'Higher Height International School', gender: 'F', age: 13, progress: 'Completed' },
        { id: 2, name: 'Wole-Alo Shindara', school: 'Oymekun Grammar School', gender: 'F', age: 11, progress: 'Completed' },
        { id: 3, name: 'Bankole Tiwalola', school: 'FUTA Secondary School', gender: 'M', age: 6, progress: 'Pending' },
        { id: 4, name: 'Alo Hadassah', school: 'Impact International School', gender: 'M', age: 8, progress: 'Rejected' },
        { id: 5, name: 'Folorunso Esther', school: 'Calvary International School', gender: 'F', age: 5, progress: 'Completed' },
      ];

      
      const ProgressBadge = ({ status }) => {
        const statusColors = {
          Completed: 'bg-green-100 text-green-800',
          Pending: 'bg-blue-100 text-blue-800',
          Rejected: 'bg-red-100 text-red-800',
        };
        return (
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[status]}`}>
            {status}
          </span>
        );
      };

    
  return (
    <>
      <div className="bg-slate-200 mx-auto px-4 sm:px-8">
     {modalOpen ?(
       <div>
       <AddUser/>
     </div>
     ):(<div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">User Details</h2>
        </div>
        <div className="my-2 flex sm:flex-row flex-col">
          <div className="flex flex-row mb-1 sm:mb-0">
            <div className="relative">
              <input
                type="text"
                className="appearance-none border border-gray-300 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="block relative">
            <button onClick={()=>{
              setModalOpen(true)

            }} className="ml-3 bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150">
              + Add New
            </button>
          </div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    No.
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    School
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Gender
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Age
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {participants.map((participant, index) => (
                  <tr key={participant.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {index + 1}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {participant.name}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {participant.school}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {participant.gender}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {participant.age}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <ProgressBadge status={participant.progress} />
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 6h18M3 12h18M3 18h18"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
              <span className="text-xs xs:text-sm text-gray-900">
                Showing 5 out of 30 entries
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                <button className="text-sm text-blue-500 bg-white border border-gray-300 py-2 px-4 rounded-l hover:bg-gray-100">
                  Prev
                </button>
                <button className="text-sm text-blue-500 bg-white border border-gray-300 py-2 px-4 rounded-r hover:bg-gray-100">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>)}
      
          
        
          
    </div>
    </>
  )
}

export default UserManagement
