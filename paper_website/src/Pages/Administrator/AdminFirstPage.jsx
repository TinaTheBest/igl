import React from 'react'
import NavbarAdmin from '../../Components.jsx/navbarAdmin'
import DashboardModer from '../../Components.jsx/DashboardModer'
import UploadUrl from '../../Components.jsx/UploadUrl'
/**
 * Page principale pour l'administrateur.
 * @component
 */
function AdminFirstPage() {
  return (
    <div>
    <NavbarAdmin/>
    <div className="sm:mt-[83px] mt-[72px]">
    <DashboardModer/>
    </div>
    
    </div>
  )
}

export default AdminFirstPage