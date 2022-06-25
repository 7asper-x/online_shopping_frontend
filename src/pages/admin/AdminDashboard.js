import React from 'react';
import AdminNav from '../../components/nav/AdminNav';

function AdminDashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="colmd-2">
          <AdminNav />
        </div>
        <div className="col">admin dashboard</div>
      </div>
    </div>
  )
}

export default AdminDashboard