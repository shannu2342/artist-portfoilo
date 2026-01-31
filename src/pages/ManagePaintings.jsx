import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ManagePaintings.css';
import { resolveImageUrl } from '../utils/api';

const ManagePaintings = ({ gallery, onDeleteArtwork, onUpdateArtwork }) => {
    const navigate = useNavigate();
    const [paintings, setPaintings] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPainting, setSelectedPainting] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    useEffect(() => {
        const sorted = [...gallery].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        setPaintings(sorted);
    }, [gallery]);

    const filteredPaintings = paintings.filter(painting => {
        const matchesSearch = painting.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            painting.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });

    const handleDeleteClick = (painting) => {
        setSelectedPainting(painting);
        setShowDeleteConfirm(true);
    };

    const confirmDelete = () => {
        if (!selectedPainting) return;

        onDeleteArtwork(selectedPainting._id);
        setShowDeleteConfirm(false);
        setSelectedPainting(null);
    };

    const handleEditClick = (painting) => {
        navigate('/admin/edit-painting', { state: { painting } });
    };

    const movePainting = (index, direction) => {
        const targetIndex = index + direction;
        if (targetIndex < 0 || targetIndex >= filteredPaintings.length) return;

        const current = filteredPaintings[index];
        const target = filteredPaintings[targetIndex];

        const currentOrder = current.order ?? 0;
        const targetOrder = target.order ?? 0;

        onUpdateArtwork(current._id, { order: targetOrder });
        onUpdateArtwork(target._id, { order: currentOrder });
    };

    const handleBack = () => {
        navigate('/admin');
    };


    return (
        <div className="manage-paintings">
            <div className="admin-container">
                <header className="admin-header">
                    <div className="header-content">
                        <div className="logo-section">
                            <i className="fas fa-images"></i>
                            <h1>Manage Paintings</h1>
                        </div>
                        <div className="header-actions">
                            <button className="back-btn" onClick={handleBack}>
                                <i className="fas fa-arrow-left"></i>
                                <span>Back to Dashboard</span>
                            </button>
                            <button className="logout-btn" onClick={() => {
                                localStorage.removeItem('adminLoggedIn');
                                localStorage.removeItem('adminToken');
                                localStorage.removeItem('isAdminLoggedIn');
                                navigate('/admin/login');
                            }}>
                                <i className="fas fa-sign-out-alt"></i>
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </header>

                <main className="admin-main">
                    <div className="filter-section">
                        <div className="search-box">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                placeholder="Search paintings..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="paintings-grid">
                        {filteredPaintings.length === 0 ? (
                            <div className="no-paintings">
                                <i className="fas fa-search"></i>
                                <h3>No paintings found</h3>
                                <p>Try adjusting your search or filter</p>
                            </div>
                        ) : (
                            filteredPaintings.map((painting, index) => (
                                <div key={painting._id} className="painting-card">
                                    <div className="painting-image">
                                        <img
                                            src={resolveImageUrl(painting.images ? painting.images[0] : painting.image)}
                                            alt={painting.title}
                                        />
                                        {painting.featured && (
                                            <div className="featured-badge">
                                                <i className="fas fa-star"></i>
                                                Featured
                                            </div>
                                        )}
                                    </div>
                                    <div className="painting-info">
                                        <h3 className="painting-title">{painting.title}</h3>
                                        <p className="painting-description">{painting.description}</p>
                                    </div>
                                    <div className="painting-actions">
                                        <button
                                            className="move-btn"
                                            onClick={() => movePainting(index, -1)}
                                            aria-label="Move up"
                                        >
                                            <i className="fas fa-arrow-up"></i>
                                        </button>
                                        <button
                                            className="move-btn"
                                            onClick={() => movePainting(index, 1)}
                                            aria-label="Move down"
                                        >
                                            <i className="fas fa-arrow-down"></i>
                                        </button>
                                        <button className="edit-btn" onClick={() => handleEditClick(painting)}>
                                            <i className="fas fa-edit"></i>
                                            <span>Edit</span>
                                        </button>
                                        <button
                                            className="feature-btn"
                                            onClick={() => onUpdateArtwork(painting._id, { featured: !painting.featured })}
                                        >
                                            <i className={`fas ${painting.featured ? 'fa-star' : 'fa-star-half-alt'}`}></i>
                                            <span>{painting.featured ? 'Unfeature' : 'Feature'}</span>
                                        </button>
                                        <button className="delete-btn" onClick={() => handleDeleteClick(painting)}>
                                            <i className="fas fa-trash"></i>
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </main>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteConfirm && (
                <div className="confirm-modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <i className="fas fa-exclamation-triangle"></i>
                            <h2>Confirm Delete</h2>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete "<strong>{selectedPainting?.title}</strong>"?</p>
                            <p>This action cannot be undone.</p>
                        </div>
                        <div className="modal-actions">
                            <button className="cancel-modal" onClick={() => setShowDeleteConfirm(false)}>
                                <i className="fas fa-times"></i>
                                <span>Cancel</span>
                            </button>
                            <button className="confirm-delete" onClick={confirmDelete}>
                                <i className="fas fa-check"></i>
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManagePaintings;
