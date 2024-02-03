import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import Noselected from "../assets/Noselected.svg";
import modify from "../assets/modify.svg";
import edit from "../assets/edit.svg";
import deletee from "../assets/deletee.svg";
import ConfirmationModal from './ConfirmationModal';
import axios from "axios";


function DashboardModer() {
  const [moderateurs, setmoderateurs] = useState([]);
  const [selectedModerator, setSelectedModerator] = useState(null);
  const [editableName, setEditableName] = useState('');
  const [editableEmail, setEditableEmail] = useState('');
  const [editableId, setEditableId] = useState('');
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editableMode, setEditableMode] = useState(false);
  const [addMode, setaddMode] = useState(false);
   // Inside your component function
  const [newModeratorName, setNewModeratorName] = useState('');
  const [newModeratorEmail, setNewModeratorEmail] = useState('');
  const [newModeratorId, setNewModeratorId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [originalModerateurs, setOriginalModerateurs] = useState([]);  
            
    const [records,setrecords]=useState(moderateurs) ;   
        

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
      useEffect(() => {
        fetchmoderateurs();
      }, []); 

      
      const fetchmoderateurs = async () => {
        try {
          const response = await axios.get(
            "http://127.0.0.1:5000/Authentification/get_moderateurs"
          );
          setmoderateurs(response.data.data_from_db);
          setOriginalModerateurs(response.data.data_from_db);
        } catch (error) {
          console.error("Error fetching articles:", error);
        }
      };

      const addmoderateurs = async () => {
        try {
          const response = await axios.post(
            "http://127.0.0.1:5000/Authentification/AjouterMod",
            {
              "id": newModeratorId,
              "name": newModeratorName,
              "email": newModeratorEmail,
            }
          );
          fetchmoderateurs();
          console.log("cc");
          

        } catch (error) {
          console.error("Error adding moderateur :", error);
        }
      };

      const deletemoderateurs = async () => {
        try {
          await axios.delete(
            "http://127.0.0.1:5000/Authentification/remove_moderator",
            { data: { "id": selectedModerator.id } }
          );
      
          // Fetch the updated list of moderators after deletion
          fetchmoderateurs();

        } catch (error) {
          console.error("Error removing moderateur:", error);
        }
      };
      
      const modifyModerateurs = async () => {
        try {
          const requestData = {
            "id": editableId ,
            "name": editableName , // Include only if newName is not empty
            "email": editableEmail , // Include only if newEmail is not empty
          };
    
          const response = await axios.put(
            "http://127.0.0.1:5000/Authentification/update_account",
            requestData
          );
          fetchmoderateurs();
          console.log("User updated successfully:",editableId, response.data);
          
          // Additional logic after successful update
        } catch (error) {
          console.error("Error updating user:", error);
        }
      };
      
       console.log(moderateurs);

        //******************************** handle the add click ********************************//
        const handleaddClick = () => {
          // Clear existing editable fields
          setEditableName('');
          setEditableEmail('');
          setEditableId('');
          // Toggle add mode
          setaddMode(!addMode);
          setEditableMode(!editableMode);
         };
         //******************************** handle the approove add click ********************************//
         const handleapprouveaddClick = () => {
          // Validate input fields
          if (!newModeratorName || !newModeratorEmail || !newModeratorId) {
            setErrorMessage("Veuillez remplir tous les champs !");
            return;
          }
          // Vérifier si l'ID existe déjà
            const idExists = moderateurs.some(moderateur => moderateur.id === newModeratorId);
            if (idExists) {
             setErrorMessage("Cet ID existe déjà !");
            return;
            }
          // Add new moderator
          addmoderateurs()
            .then(() => {
              // Fetch the updated list of moderators
              return fetchmoderateurs();
            })
            .then(() => {
              // Clear input fields or reset state as needed
              setNewModeratorName('');
              setNewModeratorEmail('');
              setNewModeratorId('');
              // Clear error message if operation is successful
              setErrorMessage('');
            })
            .catch((error) => {
              console.error("Error approving addition of moderator:", error);
              // Handle error if necessary
            });
        };
        
        //******************************** handle the modify click ********************************//
        const handleModifyClick = () => {
          // Toggle editable mode
          setEditableMode(!editableMode);
        };
      
        //******************************** handle the approove modify click ********************************//
        const handleapprouveModifyClick = () => {
          // Modify moderator
          modifyModerateurs()
            .then(() => {
              // Fetch the updated list of moderators
              return fetchmoderateurs();
            })
            .then(() => {
              // Additional logic after successful modification
              console.log("Moderator modified successfully");
            })
            .catch((error) => {
              console.error("Error approving modification of moderator:", error);
            });
            setSelectedModerator(!selectedModerator);
        };
        //******************************** handle the delete click ********************************//
      
        const handleDeleteClick = (row) => {
            // setSelectedModerator(row);
            setDeleteModalOpen(true);
          };
        //******************************** handle the confirm delete click ********************************//
          const handleConfirmDelete = (confirm) => {
            if (confirm) {
              deletemoderateurs();
            }
            setDeleteModalOpen(false);
            setSelectedModerator(!selectedModerator);
          };
        //******************************** handle the cancel delete click ********************************//
          const handleCancelDelete = () => {
            setDeleteModalOpen(false);
          };
          const  handleCancelnodifyeClick = () => {
            setSelectedModerator(!selectedModerator);
          };
        //******************************** handle the crow click ********************************// 
        const handleRowClicked = (row) => {
          // Handle row click here
          setSelectedModerator(row);
          setEditableName(row.name);
          setEditableEmail(row.email);
          
          setEditableId(row.id);
          // Switch off editable mode when clicking a new row
          setEditableMode(false);
          setaddMode(false);
        };
      
       //******************************** handle the search function ********************************// 
    function handleRechercheMod(event) {
      const inputValue = event.target.value.toLowerCase();
    
      // If the search input is empty, reset the data to the original array
      if (inputValue === '') {
        setmoderateurs(originalModerateurs);
      } else {
        // Use originalModerateurs for filtering
        const newData = originalModerateurs.filter(row => {
          return row.name.toLowerCase().includes(inputValue);
        });
        setmoderateurs(newData);
      }
    }
    
        
  return (
    
        <div className='rounded-[30px]  mx-[30px] bg-white p-8'>
         
          <div className='sm:flex gap-5 rounded-[20px] '>
            <div className='flex-grow border-[3px] p-[5px]  border-blue-100 rounded-[20px]'>
              <div className='flex '>
                <input className='ml-[8px] w-full h-[30.78px] px-[17.78px] py-[14.22px] bg-white rounded-[13px] justify-between items-center inline-flex focus:outline-none border-[2px] border-blue-100 text-[13px]' 
                type='text' 
                placeholder="Search..."
                onChange={handleRechercheMod}
                 />
                 <button className='bg-[#1B9DF0] h-[30.78px] text-white border rounded-[13px] shadow-sm p-1 ml-2 sm:px-[70px] px-[20px] text-[14px]' onClick={handleaddClick}> Add </button>
              </div>
              <DataTable
                className='border-blue-100 rounded-[20px]'
                columns={columns}
                data={moderateurs}
                selectableRows
                onRowClicked={handleRowClicked}
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 7, 10]}
                fixedHeader
              />
            
            </div>
            <div className='bg-white border-[3px] border-blue-100 rounded-[20px] sm:w-[300px] sm:mt-[0px] mt-[20px] items-center'>
              {(selectedModerator || addMode )? (
                <div className='items-center px-[30px] pt-[15px] '>
                  <div>
                  <div className="text-slate-400 text-base font-medium text-[10px] pt-[10px]">Individual moderator</div> 
                  {(editableMode || addMode )? (
                   <input
                   type="text"
                   value={addMode ? newModeratorName : editableName}
                   onChange={(e) => addMode ? setNewModeratorName(e.target.value) : setEditableName(e.target.value)}
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
                     value={addMode ? newModeratorEmail : editableEmail}
                     onChange={(e) => addMode ? setNewModeratorEmail(e.target.value) : setEditableEmail(e.target.value)}
                     className="w-full p-1 rounded-[8px] focus:outline-none border-[0.5px] border-blue-200 text-[13px]"
                     placeholder="Enter the moderator's mail"
                     />
                   ) : (
                    <div className="text-sky-950 text-sm font-normal tracking-tight pt-[10px]">{selectedModerator.email}</div>
                    )}
                
                <div className="border-b mt-[10px] w-full h-[0px] border-0 border-gray-200"></div>

                  </div>
                  
                  <div>
                  <div className="text-slate-400 text-base font-medium text-[10px] pt-[10px]">ID</div>  
                  {(editableMode || addMode )? (
                   <input
                     type="text"
                     value={addMode ? newModeratorId : editableId  }
                     onChange={(e) => addMode ? setNewModeratorId(e.target.value) : setEditableId(e.target.value)}
                     className="w-full p-1 rounded-[8px] focus:outline-none border-[0.5px] border-blue-200 text-[13px]"
                     placeholder="Enter the moderator's ID"
                     />
                   ) : (
                    <div className="text-sky-950 text-sm font-normal tracking-tight pt-[10px]">{selectedModerator.id}</div>
                    )}
                  </div>
                  {(editableMode || addMode )? (
                  <div className='flex justify-between py-[20px] '> 
                  <button className=' h-[30px] px-[35px]  rounded-[10px] shadow border border-[#1B9DF0] text-[#1B9DF0]  text-[13px] justify-center items-center ' onClick={addMode ? handleapprouveaddClick : handleapprouveModifyClick }>Approve</button>
                  <button className=' h-[30px] px-[35px]  rounded-[10px] shadow border border-[#1B9DF0] bg-[#1B9DF0] text-white text-[13px] justify-center items-center'  onClick={handleCancelnodifyeClick}>Cancel</button>
                </div>
                   ) : (
                    <div className='flex justify-between py-[20px] '> 
                     <button className=' h-[30px] px-[35px]  rounded-[10px] shadow border border-[#1B9DF0] text-[#1B9DF0]  text-[13px] justify-center items-center ' onClick={handleModifyClick}>Modify</button>
                     <button className=' h-[30px] px-[35px]  rounded-[10px] shadow border border-[#1B9DF0] bg-[#1B9DF0] text-white text-[13px] justify-center items-center'  onClick={handleDeleteClick}>Delete</button>
                   </div>
                    )}
                  
                  
                </div>
              ) : ( 
                <div className='flex flex-col items-center '>
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
              {/* Error message */}
             {errorMessage && (
             <div className="pl-4 text-sm text-red-500">{errorMessage}</div>
             )}   
            </div>
          </div>
          <ConfirmationModal isOpen={isDeleteModalOpen} onClose={handleCancelDelete} onConfirm={handleConfirmDelete} />
          
        </div>
      );
 
}

export default DashboardModer

