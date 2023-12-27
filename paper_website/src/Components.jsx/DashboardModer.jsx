import React from 'react'
import DataTable from 'react-data-table-component';


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
          }
        ];
  return (
    <div className=' rounded-xl m-5'>
            {/* <h1>Moderator Registration</h1> */}
            {/* <ModerInfos/> */}
            <DataTable 
            columns={columns}
              data={data}
              selectableRows
              fixedHeader>


            </DataTable>
            
         </div>
  )
}

export default DashboardModer