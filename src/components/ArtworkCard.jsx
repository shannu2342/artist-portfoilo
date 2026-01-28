import React from 'react';
import './ArtworkCard.css';

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
                    <i className="fas fa-copyright"></i>
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
