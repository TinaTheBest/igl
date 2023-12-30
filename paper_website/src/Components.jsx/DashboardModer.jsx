import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import Noselected from "../assets/Noselected.svg";
import modify from "../assets/modify.svg";
import edit from "../assets/edit.svg";
import deletee from "../assets/deletee.svg";
import ConfirmationModal from './ConfirmationModal';


function DashboardModer() {
    const columns=[
        {
          name:'Name',
          selector: row => row.name,
          sortable:true,
      
        },
        {
          name: "Email",
          selector: row => row.email,
          sortable:true,
        },
        {
          name: "password",
          selector: row => row.password
        },
        {
            name: "ID",
            selector: row => row.id
          },
          {
            name: 'Modify',
            cell: (row) => (
              <button onClick={() => handleModifyClick(row)}>
                <img src={edit} alt="modify" />
              </button>
            ),
          },
          {
            name: 'Delete',
            cell: (row) => (
              <button onClick={() => handleDeleteClick(row)}>
                <img src={deletee} alt="delete" />
              </button>
            ),
          },
          
      ];
        const data = [
          {
            id: 1,
            name: 'Alice',
            email: 'alice@example.com',
            password: 'alice123'
           
          },
          {
            id: 2,
            name: 'Bob',
            email: 'bob@example.com',
            password: 'bob456'
          },
          {
            id: 3,
            name: 'Charlie',
            email: 'charlie@example.com',
            password: 'charlie789'
          },
          {
            id: 4,
            name: 'David',
            email: 'david@example.com',
            password: 'david987'
          },
          {
            id: 5,
            name: 'Alice',
            email: 'alice@example.com',
            password: 'alice123'
          },
          {
            id: 6,
            name: 'Bob',
            email: 'bob@example.com',
            password: 'bob456'
          },
          {
            id: 7,
            name: 'Charlie',
            email: 'charlie@example.com',
            password: 'charlie789'
          },
          {
            id: 8,
            name: 'David',
            email: 'david@example.com',
            password: 'david987'
          },
          {
            id: 9,
            name: 'Eva',
            email: 'eva@example.com',
            password: 'eva543'
          },
          {
            id: 10,
            name: 'Bob',
            email: 'bob@example.com',
            password: 'bob456'
          },
          {
            id: 11,
            name: 'Charlie',
            email: 'charlie@example.com',
            password: 'charlie789'
          },
          {
            id: 12,
            name: 'David',
            email: 'david@example.com',
            password: 'david987'
          },
          {
            id: 13,
            name: 'Eva',
            email: 'eva@example.com',
            password: 'eva543'
          },
          {
            id: 14,
            name: 'Bob',
            email: 'bob@example.com',
            password: 'bob456'
          },
          {
            id: 15,
            name: 'Charlie',
            email: 'charlie@example.com',
            password: 'charlie789'
          },
          {
            id: 16,
            name: 'David',
            email: 'david@example.com',
            password: 'david987'
          },
          {
            id: 17,
            name: 'Eva',
            email: 'eva@example.com',
            password: 'eva543'
          }
        ];

        const [selectedModerator, setSelectedModerator] = useState(null);
        const [editableName, setEditableName] = useState('');
        const [editableEmail, setEditableEmail] = useState('');
        const [editablePassword, setEditablePassword] = useState('');
        const [editableId, setEditableId] = useState('');

        const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
        const [editableMode, setEditableMode] = useState(false);
        const [addMode, setaddMode] = useState(false);
        
        const handleDeleteClick = (row) => {
            // setSelectedModerator(row);
            setDeleteModalOpen(true);
          };
        
          const handleConfirmDelete = () => {
            // Implement the logic to delete the moderator
            // You can use selectedModerator.id to identify the moderator to delete
            setDeleteModalOpen(false);
          };
        
          const handleCancelDelete = () => {
            setDeleteModalOpen(false);
          };
      
        const handleRowClicked = (row) => {
          // Handle row click here
          setSelectedModerator(row);
          setEditableName(row.name);
          setEditableEmail(row.email);
          setEditablePassword(row.password);
          setEditableId(row.id);
          // Switch off editable mode when clicking a new row
          setEditableMode(false);
          setaddMode(false);
        };
      
        const handleModifyClick = () => {
            // Toggle editable mode
            setEditableMode(!editableMode);
          };
          const handleaddClick = () => {
            // Toggle editable mode
            setaddMode(!addMode);
          };
        
            
    const [records,setrecords]=useState(data) ;   
    function handleRechercheMod(event)   {
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setrecords(newData)
    }
        
  return (
    
        <div className='rounded-[30px]  mx-[30px] bg-white p-8'>
            
          <div className='flex gap-5 rounded-[20px] '>
            <div className='flex-grow border-[3px] p-[5px]  border-blue-100 rounded-[20px]'>
              <div className='flex '>
                <input className='ml-[8px] w-full h-[30.78px] px-[17.78px] py-[14.22px] bg-white rounded-[13px] justify-between items-center inline-flex focus:outline-none border-[2px] border-blue-100 text-[13px]' 
                type='text' 
                placeholder="Search..."
                onChange={handleRechercheMod}
                 />
                 <button className='bg-[#1B9DF0] h-[30.78px] text-white border rounded-[13px] shadow-sm p-1 ml-2 px-[70px] text-[14px]' onClick={handleaddClick}> Add </button>
              </div>
              <DataTable
                className='border-blue-100 rounded-[20px]'
                columns={columns}
                data={records}
                selectableRows
                onRowClicked={handleRowClicked}
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 7, 10]}
                fixedHeader
              />
            
            </div>
            <div className='bg-white border-[3px] border-blue-100 rounded-[20px] w-[300px] items-center'>
              {(selectedModerator || addMode )? (
                <div className='items-center px-[30px] pt-[15px] '>
                  <div>
                  <div className="text-slate-400 text-base font-medium text-[10px] pt-[10px]">Individual moderator</div> 
                  {(editableMode || addMode )? (
                   <input
                     type="text"
                     value={editableMode ? editableName : ''}
                     onChange={(e) => setEditableName(e.target.value)}
                     className="w-full p-1 rounded-[8px] focus:outline-none border-[0.5px] border-blue-200 text-[13px]"
                     placeholder="Enter the moderator's name"
                     />
                   ) : (
                    <div className="text-sky-950 text-sm font-normal tracking-tight pt-[10px]">{selectedModerator.name}</div>
                    )}
                  <div className="border-b mt-[10px] w-full h-[0px] border-0 border-gray-200"></div>

                  </div>
                  <div>
                  <div className="text-slate-400 text-base font-medium text-[10px] pt-[10px]">Email</div> 
                  {(editableMode || addMode )? (
                   <input
                     type="text"
                     value={editableMode ? editableEmail : ''}
                     onChange={(e) => setEditableEmail(e.target.value)}
                     className="w-full p-1 rounded-[8px] focus:outline-none border-[0.5px] border-blue-200 text-[13px]"
                     placeholder="Enter the moderator's mail"
                     />
                   ) : (
                    <div className="text-sky-950 text-sm font-normal tracking-tight pt-[10px]">{selectedModerator.email}</div>
                    )}
                
                <div className="border-b mt-[10px] w-full h-[0px] border-0 border-gray-200"></div>

                  </div>
                  <div>
                  <div className="text-slate-400 text-base font-medium text-[10px] pt-[10px]">Password</div>  
                  {(editableMode || addMode )? (
                   <input
                     type="text"
                     value={editableMode ? editablePassword : ''}
                     onChange={(e) => setEditablePassword(e.target.value)}
                     className="w-full p-1 rounded-[8px] focus:outline-none border-[0.5px] border-blue-200 text-[13px]"
                     placeholder="Enter the moderator's pwd"
                     />
                   ) : (
                    <div className="text-sky-950 text-sm font-normal tracking-tight pt-[10px]">{selectedModerator.password}</div>
                    )}
                  <div className="border-b mt-[10px] w-full h-[0px] border-0 border-gray-200"></div>

                  </div>
                  <div>
                  <div className="text-slate-400 text-base font-medium text-[10px] pt-[10px]">ID</div>  
                  {(editableMode || addMode )? (
                   <input
                     type="text"
                     value={editableMode ? editableId : ''}
                     onChange={(e) => setEditableId(e.target.value)}
                     className="w-full p-1 rounded-[8px] focus:outline-none border-[0.5px] border-blue-200 text-[13px]"
                     placeholder="Enter the moderator's ID"
                     />
                   ) : (
                    <div className="text-sky-950 text-sm font-normal tracking-tight pt-[10px]">{selectedModerator.id}</div>
                    )}
                  </div>
                  {(editableMode || addMode )? (
                  <div className='flex justify-between py-[20px] '> 
                  <button className=' h-[30px] px-[35px]  rounded-[10px] shadow border border-[#1B9DF0] text-[#1B9DF0]  text-[13px] justify-center items-center ' onClick={handleModifyClick}>Approve</button>
                  <button className=' h-[30px] px-[35px]  rounded-[10px] shadow border border-[#1B9DF0] bg-[#1B9DF0] text-white text-[13px] justify-center items-center'  onClick={handleDeleteClick}>Cancel</button>
                </div>
                   ) : (
                    <div className='flex justify-between py-[20px] '> 
                     <button className=' h-[30px] px-[35px]  rounded-[10px] shadow border border-[#1B9DF0] text-[#1B9DF0]  text-[13px] justify-center items-center ' onClick={handleModifyClick}>Modify</button>
                     <button className=' h-[30px] px-[35px]  rounded-[10px] shadow border border-[#1B9DF0] bg-[#1B9DF0] text-white text-[13px] justify-center items-center'  onClick={handleDeleteClick}>Delete</button>
                   </div>
                    )}
                  
                  
                </div>
              ) : (
                <div className='flex flex-col items-center'>
                  <img
                    className='pt-[100px]'
                    src={Noselected}
                    alt='No moderator selected'
                  />
                  <div className='text-center text-blue-200 text-sm font-medium tracking-tight'>
                    Select a moderator <br /> to see more information<br /> Or press Add to add a moderator
                  </div>
                </div>
              )}
            </div>
          </div>
          <ConfirmationModal isOpen={isDeleteModalOpen} onClose={handleCancelDelete} onConfirm={handleConfirmDelete} />

        </div>
      );
 
}

export default DashboardModer

