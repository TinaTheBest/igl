import React from 'react'
import DataTable from 'react-data-table-component';
import Noselected from "../assets/Noselected.svg";


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
       
        
  return (
    <div className=' rounded-[30px] m-5 mt-10 bg-white p-8'>
            {/* <h1>Moderator Registration</h1> */}
            {/* <ModerInfos/> */}
            <div className='flex gap-5 rounded-[20px] '>
            <div className='flex-grow border-[5px] border-blue-100 rounded-[20px]'>
            <DataTable className=' border-blue-100 rounded-[20px]'
            columns={columns }
              data={data}
              selectableRows
              fixedHeader
              pagination
              paginationPerPage={5} //the default number of rows imitially
              paginationRowsPerPageOptions={[5,7,10]}
        
              >


            </DataTable>
            </div>
            <div className='bg-white border-[5px] border-blue-100 rounded-[20px]'> 
              <div className=' items-center'>
                 <img className='px-[100px] pt-[100px]' src={Noselected} alt="No moderator selected" />
                 <div className="text-center text-blue-200 text-sm font-medium tracking-tight">Select a moderator <br/>to see more more informations</div>
             </div>
            </div>
                
            </div>
            
            
         </div>
  )
}

export default DashboardModer