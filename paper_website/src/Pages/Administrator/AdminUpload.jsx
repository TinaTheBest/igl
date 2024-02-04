import React from 'react'
import NavBarAdmin from '../../Components.jsx/navbarAdmin'
import UploadUrl from '../../Components.jsx/UploadUrl'
/**
 * Page de téléchargement pour l'administrateur.
 * @component
 */
function AdminUpload() {
  return (
    <div>
        <NavBarAdmin/>
        <UploadUrl/>
    </div>
  )
}

export default AdminUpload