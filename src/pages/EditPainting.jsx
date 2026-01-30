import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './EditPainting.css';

const EditPainting = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [painting, setPainting] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [paintingName, setPaintingName] = useState('');
    const [paintingDescription, setPaintingDescription] = useState('');
    const [paintingCategory, setPaintingCategory] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (location.state && location.state.painting) {
            const { painting: initialPainting } = location.state;
            setPainting(initialPainting);
            setSelectedImage(initialPainting.image);
            setPaintingName(initialPainting.title);
            setPaintingDescription(initialPainting.description);
            setPaintingCategory(initialPainting.category);
        } else {
            navigate('/admin/manage-paintings');
        }
    }, [location, navigate]);

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedImage || !paintingName) {
            alert('Please select an image and enter a painting name');
            return;
        }

        const updatedPainting = {
            ...painting,
            title: paintingName,
            description: paintingDescription,
            image: selectedImage,
            category: paintingCategory
        };

        // Save to backend
        const updateArtwork = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/artworks/${painting._id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                    },
                    body: JSON.stringify(updatedPainting)
                });

                if (response.ok) {
                    setShowSuccess(true);
                } else {
                    alert('Error updating painting');
                }
            } catch (error) {
                console.error('Error updating painting:', error);
                alert('Error updating painting');
            }
        };

        updateArtwork();

        // Reset success message after 2 seconds
        setTimeout(() => {
            setShowSuccess(false);
        }, 2000);
    };

    const handleBack = () => {
        navigate('/admin/manage-paintings');
    };

    if (!painting) return null;

    return (
        <div className="edit-painting">
            <div className="admin-container">
                <header className="admin-header">
                    <div className="header-content">
                        <div className="logo-section">
                            <i className="fas fa-edit"></i>
                            <h1>Edit Painting</h1>
                        </div>
                        <div className="header-actions">
                            <button className="back-btn" onClick={handleBack}>
                                <i className="fas fa-arrow-left"></i>
                                <span>Back to Gallery</span>
                            </button>
                            <button className="logout-btn" onClick={() => {
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
                    {showSuccess && (
                        <div className="success-message">
                            <i className="fas fa-check-circle"></i>
                            <div>
                                <h3>Success!</h3>
                                <p>Painting updated successfully</p>
                            </div>
                        </div>
                    )}

                    <form className="edit-painting-form" onSubmit={handleSubmit}>
                        <div className="form-section">
                            <div className="form-header">
                                <i className="fas fa-images"></i>
                                <h2>Update Image</h2>
                            </div>
                            <div className="image-upload-section">
                                <label className="image-upload-label">
                                    {selectedImage ? (
                                        <div className="image-preview">
                                            <img src={selectedImage.startsWith('http') ? selectedImage : `http://localhost:5000${selectedImage}`} alt="Preview" />
                                            <button type="button" className="remove-image" onClick={() => setSelectedImage(null)}>
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="upload-placeholder">
                                            <i className="fas fa-cloud-upload-alt"></i>
                                            <p>Click to select image</p>
                                            <span>Supports JPG, PNG, GIF up to 10MB</span>
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageSelect}
                                        style={{ display: 'none' }}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="form-section">
                            <div className="form-header">
                                <i className="fas fa-info-circle"></i>
                                <h2>Details</h2>
                            </div>

                            <div className="form-group">
                                <label htmlFor="paintingName">
                                    <i className="fas fa-paint-brush"></i>
                                    Painting Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="paintingName"
                                    value={paintingName}
                                    onChange={(e) => setPaintingName(e.target.value)}
                                    placeholder="Enter painting name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="paintingCategory">
                                    <i className="fas fa-tag"></i>
                                    Category
                                </label>
                                <select
                                    id="paintingCategory"
                                    value={paintingCategory}
                                    onChange={(e) => setPaintingCategory(e.target.value)}
                                >
                                    <option value="">Select Category</option>
                                    <option value="acrylic">Acrylic</option>
                                    <option value="oil">Oil</option>
                                    <option value="watercolor">Watercolor</option>
                                    <option value="digital">Digital</option>
                                    <option value="mixed">Mixed Media</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="paintingDescription">
                                    <i className="fas fa-align-left"></i>
                                    Description
                                </label>
                                <textarea
                                    id="paintingDescription"
                                    value={paintingDescription}
                                    onChange={(e) => setPaintingDescription(e.target.value)}
                                    placeholder="Enter short description"
                                    rows={4}
                                />
                            </div>
                        </div>

                        <div className="form-actions">
                            <button type="button" className="cancel-btn" onClick={handleBack}>
                                <i className="fas fa-times"></i>
                                <span>Cancel</span>
                            </button>
                            <button type="submit" className="save-btn">
                                <i className="fas fa-save"></i>
                                <span>Save Changes</span>
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default EditPainting;