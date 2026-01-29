import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAdminLoggedIn');
        navigate('/admin/login');
    };

    return (
        <div className="admin-dashboard">
            <div className="admin-container">
                <header className="admin-header">
                    <div className="header-content">
                        <div className="logo-section">
                            <i className="fas fa-crown"></i>
                            <h1>Admin Dashboard</h1>
                        </div>
                        <button className="logout-btn" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                        </button>
                    </div>
                </header>

                <main className="admin-main">
                    <div className="dashboard-grid">
                        <div className="dashboard-card" onClick={() => navigate('/admin/add-painting')}>
                            <div className="card-icon add-painting">
                                <i className="fas fa-plus"></i>
                                <i className="fas fa-palette"></i>
                            </div>
                            <h3>Add New Painting</h3>
                            <p>Upload a new artwork</p>
                            <button className="card-action">
                                <i className="fas fa-arrow-right"></i>
                                <span>Add Now</span>
                            </button>
                        </div>

                        <div className="dashboard-card" onClick={() => navigate('/admin/manage-paintings')}>
                            <div className="card-icon manage-paintings">
                                <i className="fas fa-images"></i>
                            </div>
                            <h3>Manage Paintings</h3>
                            <p>Edit or delete artworks</p>
                            <button className="card-action">
                                <i className="fas fa-arrow-right"></i>
                                <span>Manage</span>
                            </button>
                        </div>

                        <div className="dashboard-card" onClick={() => navigate('/admin/edit-about')}>
                            <div className="card-icon edit-about">
                                <i className="fas fa-user-edit"></i>
                            </div>
                            <h3>Edit About Page</h3>
                            <p>Update artist biography</p>
                            <button className="card-action">
                                <i className="fas fa-arrow-right"></i>
                                <span>Edit Now</span>
                            </button>
                        </div>

                        <div className="dashboard-card" onClick={() => navigate('/admin/edit-services')}>
                            <div className="card-icon edit-services">
                                <i className="fas fa-tools"></i>
                            </div>
                            <h3>Edit Services</h3>
                            <p>Update services offered</p>
                            <button className="card-action">
                                <i className="fas fa-arrow-right"></i>
                                <span>Edit Now</span>
                            </button>
                        </div>

                        <div className="dashboard-card" onClick={() => navigate('/admin/edit-terms')}>
                            <div className="card-icon edit-terms">
                                <i className="fas fa-file-alt"></i>
                            </div>
                            <h3>Edit Terms & Conditions</h3>
                            <p>Update terms of service</p>
                            <button className="card-action">
                                <i className="fas fa-arrow-right"></i>
                                <span>Edit Now</span>
                            </button>
                        </div>

                        <div className="dashboard-card" onClick={() => navigate('/admin/edit-whatsapp')}>
                            <div className="card-icon edit-whatsapp">
                                <i className="fab fa-whatsapp"></i>
                            </div>
                            <h3>Change WhatsApp Number</h3>
                            <p>Update contact information</p>
                            <button className="card-action">
                                <i className="fas fa-arrow-right"></i>
                                <span>Change Now</span>
                            </button>
                        </div>

                        <div className="dashboard-card" onClick={() => navigate('/')} style={{ gridColumn: 'span 2' }}>
                            <div className="card-icon preview-website">
                                <i className="fas fa-globe"></i>
                            </div>
                            <h3>Preview Website</h3>
                            <p>View the live website</p>
                            <button className="card-action">
                                <i className="fas fa-external-link-alt"></i>
                                <span>Open Website</span>
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
