import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditTerms.css';

const EditTerms = () => {
    const navigate = useNavigate();
    const [termsContent, setTermsContent] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        const savedTerms = localStorage.getItem('termsContent');
        if (savedTerms) {
            setTermsContent(savedTerms);
        } else {
            setTermsContent('Terms and conditions for Aurexon');
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('termsContent', termsContent);
        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
        }, 2000);
    };

    const handleBack = () => {
        navigate('/admin');
    };

    return (
        <div className="edit-terms">
            <div className="admin-container">
                <header className="admin-header">
                    <div className="header-content">
                        <div className="logo-section">
                            <i className="fas fa-file-alt"></i>
                            <h1>Edit Terms & Conditions</h1>
                        </div>
                        <div className="header-actions">
                            <button className="back-btn" onClick={handleBack}>
                                <i className="fas fa-arrow-left"></i>
                                <span>Back to Dashboard</span>
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
                                <p>Terms and conditions updated successfully</p>
                            </div>
                        </div>
                    )}

                    <form className="edit-terms-form" onSubmit={handleSubmit}>
                        <div className="form-section">
                            <div className="form-header">
                                <i className="fas fa-info-circle"></i>
                                <h2>Terms & Conditions Content</h2>
                            </div>

                            <div className="form-group">
                                <label htmlFor="termsContent">
                                    <i className="fas fa-align-left"></i>
                                    Terms & Conditions
                                </label>
                                <textarea
                                    id="termsContent"
                                    value={termsContent}
                                    onChange={(e) => setTermsContent(e.target.value)}
                                    placeholder="Write terms and conditions..."
                                    rows={15}
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

export default EditTerms;