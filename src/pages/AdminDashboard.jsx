import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = ({
    isLoggedIn,
    onLogout,
    gallery,
    onAddArtwork,
    onUpdateArtwork,
    onDeleteArtwork,
    services,
    onUpdateServices,
    aboutContent,
    onUpdateAbout,
    termsContent,
    onUpdateTerms,
    whatsAppNumber,
    onUpdateWhatsAppNumber
}) => {
    const [activeSection, setActiveSection] = useState('dashboard');
    const [newArtwork, setNewArtwork] = useState({
        title: '',
        description: '',
        image: null
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    if (!isLoggedIn) {
        navigate('/admin/login');
        return null;
    }

    const handleLogout = () => {
        onLogout();
        navigate('/admin/login');
    };

    const handleAddArtwork = (e) => {
        e.preventDefault();
        const artwork = {
            id: Date.now(),
            title: newArtwork.title,
            description: newArtwork.description,
            image: newArtwork.image || 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&h=800&fit=crop'
        };
        onAddArtwork(artwork);
        setNewArtwork({ title: '', description: '', image: null });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setNewArtwork(prev => ({ ...prev, image: e.target.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdateAbout = (e) => {
        e.preventDefault();
        onUpdateAbout(e.target.aboutContent.value);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    const handleUpdateTerms = (e) => {
        e.preventDefault();
        onUpdateTerms(e.target.termsContent.value);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    const handleUpdateWhatsAppNumber = (e) => {
        e.preventDefault();
        onUpdateWhatsAppNumber(e.target.whatsappNumber.value);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    const handleDeleteArtwork = (id) => {
        if (window.confirm('Are you sure you want to delete this artwork?')) {
            onDeleteArtwork(id);
        }
    };

    const handleUpdateArtworkInfo = (id, field, value) => {
        const artwork = gallery.find(art => art.id === id);
        if (artwork) {
            onUpdateArtwork(id, { ...artwork, [field]: value });
        }
    };

    const sections = [
        { id: 'dashboard', label: 'Dashboard', icon: 'fa-home' },
        { id: 'add-painting', label: 'Add New Painting', icon: 'fa-plus-circle' },
        { id: 'manage-paintings', label: 'Manage Paintings', icon: 'fa-images' },
        { id: 'edit-about', label: 'Edit About Page', icon: 'fa-user' },
        { id: 'edit-services', label: 'Edit Services', icon: 'fa-briefcase' },
        { id: 'edit-terms', label: 'Edit Terms', icon: 'fa-file-contract' },
        { id: 'edit-whatsapp', label: 'Change WhatsApp', icon: 'fa-whatsapp' },
        { id: 'preview', label: 'Preview Website', icon: 'fa-eye' }
    ];

    return (
        <div className="admin-dashboard">
            <div className="dashboard-container">
                <aside className="dashboard-sidebar">
                    <div className="sidebar-header">
                        <div className="admin-logo">
                            <i className="fas fa-crown"></i>
                            <span>Admin Dashboard</span>
                        </div>
                    </div>

                    <nav className="sidebar-nav">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                                onClick={() => setActiveSection(section.id)}
                            >
                                <i className={`fas ${section.icon}`}></i>
                                <span>{section.label}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="sidebar-footer">
                        <button className="logout-button" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                        </button>
                    </div>
                </aside>

                <main className="dashboard-main">
                    <div className="main-header">
                        <h1 className="page-title">
                            {sections.find(sec => sec.id === activeSection)?.label}
                        </h1>
                        {showSuccess && (
                            <div className="success-message">
                                <i className="fas fa-check-circle"></i>
                                <span>Changes saved successfully!</span>
                            </div>
                        )}
                    </div>

                    <div className="main-content">
                        {activeSection === 'dashboard' && (
                            <div className="dashboard-content">
                                <div className="stats-grid">
                                    <div className="stat-card">
                                        <div className="stat-icon">
                                            <i className="fas fa-images"></i>
                                        </div>
                                        <div className="stat-content">
                                            <h3>{gallery.length}</h3>
                                            <p>Artworks in Gallery</p>
                                        </div>
                                    </div>

                                    <div className="stat-card">
                                        <div className="stat-icon">
                                            <i className="fas fa-briefcase"></i>
                                        </div>
                                        <div className="stat-content">
                                            <h3>{services.length}</h3>
                                            <p>Services Offered</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="quick-actions">
                                    <h2>Quick Actions</h2>
                                    <div className="quick-actions-grid">
                                        <button onClick={() => setActiveSection('add-painting')} className="quick-action-btn">
                                            <i className="fas fa-plus-circle"></i>
                                            <span>Add New Painting</span>
                                        </button>
                                        <button onClick={() => setActiveSection('manage-paintings')} className="quick-action-btn">
                                            <i className="fas fa-images"></i>
                                            <span>Manage Paintings</span>
                                        </button>
                                        <button onClick={() => setActiveSection('edit-about')} className="quick-action-btn">
                                            <i className="fas fa-user"></i>
                                            <span>Edit About Page</span>
                                        </button>
                                        <button onClick={() => setActiveSection('edit-whatsapp')} className="quick-action-btn">
                                            <i className="fab fa-whatsapp"></i>
                                            <span>Update WhatsApp</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'add-painting' && (
                            <div className="form-section">
                                <form onSubmit={handleAddArtwork} className="artwork-form">
                                    <div className="form-group">
                                        <label>Artwork Title</label>
                                        <input
                                            type="text"
                                            value={newArtwork.title}
                                            onChange={(e) => setNewArtwork(prev => ({ ...prev, title: e.target.value }))}
                                            required
                                            placeholder="Enter painting title"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea
                                            value={newArtwork.description}
                                            onChange={(e) => setNewArtwork(prev => ({ ...prev, description: e.target.value }))}
                                            required
                                            placeholder="Enter short description"
                                            rows="4"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Image Upload</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                        />
                                        {newArtwork.image && (
                                            <div className="image-preview">
                                                <img src={newArtwork.image} alt="Preview" />
                                            </div>
                                        )}
                                    </div>

                                    <button type="submit" className="submit-btn">
                                        <i className="fas fa-save"></i>
                                        Save Painting
                                    </button>
                                </form>
                            </div>
                        )}

                        {activeSection === 'manage-paintings' && (
                            <div className="manage-paintings-section">
                                <div className="paintings-list">
                                    {gallery.map((artwork) => (
                                        <div key={artwork.id} className="painting-item">
                                            <div className="painting-thumbnail">
                                                <img src={artwork.image} alt={artwork.title} />
                                            </div>
                                            <div className="painting-info">
                                                <input
                                                    type="text"
                                                    value={artwork.title}
                                                    onChange={(e) => handleUpdateArtworkInfo(artwork.id, 'title', e.target.value)}
                                                    className="painting-title"
                                                />
                                                <textarea
                                                    value={artwork.description}
                                                    onChange={(e) => handleUpdateArtworkInfo(artwork.id, 'description', e.target.value)}
                                                    className="painting-description"
                                                    placeholder="Description"
                                                />
                                            </div>
                                            <div className="painting-actions">
                                                <button
                                                    className="action-btn delete"
                                                    onClick={() => handleDeleteArtwork(artwork.id)}
                                                >
                                                    <i className="fas fa-trash"></i>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeSection === 'edit-about' && (
                            <div className="form-section">
                                <form onSubmit={handleUpdateAbout} className="content-form">
                                    <div className="form-group">
                                        <label>About Page Content</label>
                                        <textarea
                                            name="aboutContent"
                                            defaultValue={aboutContent}
                                            rows="15"
                                            placeholder="Enter about page content..."
                                        />
                                    </div>

                                    <button type="submit" className="submit-btn">
                                        <i className="fas fa-save"></i>
                                        Save Changes
                                    </button>
                                </form>
                            </div>
                        )}

                        {activeSection === 'edit-terms' && (
                            <div className="form-section">
                                <form onSubmit={handleUpdateTerms} className="content-form">
                                    <div className="form-group">
                                        <label>Terms & Conditions</label>
                                        <textarea
                                            name="termsContent"
                                            defaultValue={termsContent}
                                            rows="15"
                                            placeholder="Enter terms and conditions..."
                                        />
                                    </div>

                                    <button type="submit" className="submit-btn">
                                        <i className="fas fa-save"></i>
                                        Save Changes
                                    </button>
                                </form>
                            </div>
                        )}

                        {activeSection === 'edit-whatsapp' && (
                            <div className="form-section">
                                <form onSubmit={handleUpdateWhatsAppNumber} className="content-form">
                                    <div className="form-group">
                                        <label>WhatsApp Number</label>
                                        <input
                                            type="text"
                                            name="whatsappNumber"
                                            defaultValue={whatsAppNumber}
                                            placeholder="Enter WhatsApp number (without +)"
                                        />
                                        <p className="form-hint">Example: 919876543210</p>
                                    </div>

                                    <button type="submit" className="submit-btn">
                                        <i className="fas fa-save"></i>
                                        Save Number
                                    </button>
                                </form>
                            </div>
                        )}

                        {activeSection === 'preview' && (
                            <div className="preview-section">
                                <h2>Website Preview</h2>
                                <div className="preview-iframe-container">
                                    <iframe
                                        src="/"
                                        title="Website Preview"
                                        className="preview-iframe"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
