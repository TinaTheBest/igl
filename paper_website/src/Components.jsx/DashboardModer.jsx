import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import Noselected from "../assets/Noselected.svg";
import modify from "../assets/modify.svg";
import edit from "../assets/edit.svg";
import deletee from "../assets/deletee.svg";


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
      
        const handleRowClicked = (row) => {
          // Handle row click here
          setSelectedModerator(row);
          setEditableName(row.name);
          setEditableEmail(row.email);
          setEditablePassword(row.password);
          setEditableId(row.id);
        };
      
        const handleModifyClick = () => {
          // Handle modify button click here
          // You can access editableName, editableEmail, editablePassword, editableId here
          // Implement the logic to update the data or perform other actions
        };
        const handleDeleteClick = () => {
            // Handle modify button click here
            // You can access editableName, editableEmail, editablePassword, editableId here
            // Implement the logic to update the data or perform other actions
          };
            
    const [records,setrecords]=useState(data) ;   
    function handleRechercheMod(event)   {
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setrecords(newData)
    }
        
  return (
    
        <div className='rounded-[30px] m-5 mt-10 bg-white p-8'>
          <div className='flex gap-5 rounded-[20px] '>
            <div className='flex-grow border-[5px] p-[5px]  border-blue-100 rounded-[20px]'>
              <div className='flex '>
                <input className='w-full h-[30.78px] px-[17.78px] py-[14.22px] bg-white rounded-[13px] justify-between items-center inline-flex focus:outline-none border-[2px] border-blue-100' 
                type='text' 
                placeholder="Search..."
                onChange={handleRechercheMod}
                 />
                 <button className='bg-[#1B9DF0] h-[30.78px] text-white border rounded-[13px] shadow-sm p-1 ml-2'>Add</button>
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
            <div className='bg-white border-[5px] border-blue-100 rounded-[20px]'>
              {selectedModerator ? (
                <div className='items-center'>
                  <div>
                    <strong>Name:</strong> {selectedModerator.name}
                  </div>
                  <div>
                    <strong>Email:</strong> {selectedModerator.email}
                  </div>
                  <div>
                    <strong>Password:</strong> {selectedModerator.password}
                  </div>
                  <div>
                    <strong>ID:</strong> {selectedModerator.id}
                  </div>
                  <button onClick={handleModifyClick}>Modify</button>
                </div>
              ) : (
                <div className='items-center'>
                  <img
                    className='px-[100px] pt-[100px]'
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
        </div>
      );
 
}

export default DashboardModer

