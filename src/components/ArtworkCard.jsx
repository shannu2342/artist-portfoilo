import React from 'react';
import './ArtworkCard.css';
import watermarkLogo from '../assets/logo2-removebg-preview.png';

const ArtworkCard = ({ artwork, onWhatsAppClick, onViewClick }) => {
    const handleContextMenu = (e) => {
        e.preventDefault();
        return false;
    };

    const handleDragStart = (e) => {
        e.preventDefault();
        return false;
    };

    return (
        <div className="artwork-card">
            <div className="artwork-image-container">
                <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="artwork-image"
                    onContextMenu={handleContextMenu}
                    onDragStart={handleDragStart}
                    draggable={false}
                />
                <div className="watermark-overlay">
                    <img src={watermarkLogo} alt="Watermark logo" className="watermark-logo" />
                </div>
                <div className="artwork-overlay">
                    <button
                        className="artwork-action-btn"
                        onClick={() => onWhatsAppClick(artwork)}
                    >
                        <i className="fab fa-whatsapp"></i>
                        <span>Interested</span>
                    </button>
                    <button
                        className="artwork-action-btn"
                        onClick={() => onViewClick(artwork)}
                    >
                        <i className="fas fa-eye"></i>
                        <span>View</span>
                    </button>
                </div>
            </div>
            <div className="artwork-info">
                <h3 className="artwork-title">{artwork.title}</h3>
                <p className="artwork-description">{artwork.description}</p>
            </div>
        </div>
    );
};

export default ArtworkCard;
