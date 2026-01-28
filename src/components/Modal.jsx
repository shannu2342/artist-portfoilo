import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, artwork, onWhatsAppClick }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleContextMenu = (e) => {
        e.preventDefault();
        return false;
    };

    const handleDragStart = (e) => {
        e.preventDefault();
        return false;
    };

    if (!isOpen || !artwork) return null;

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose} aria-label="Close">
                    <i className="fas fa-times"></i>
                </button>

                <div className="modal-body">
                    <div className="modal-image-container">
                        <img
                            src={artwork.image}
                            alt={artwork.title}
                            className="modal-image"
                            onContextMenu={handleContextMenu}
                            onDragStart={handleDragStart}
                            draggable={false}
                        />
                        <div className="modal-watermark">
                            <i className="fas fa-copyright"></i>
                        </div>
                    </div>

                    <div className="modal-info">
                        <h2 className="modal-title">{artwork.title}</h2>
                        <p className="modal-description">{artwork.description}</p>
                        <button
                            className="modal-whatsapp-btn"
                            onClick={() => {
                                onWhatsAppClick(artwork);
                                onClose();
                            }}
                        >
                            <i className="fab fa-whatsapp"></i>
                            <span>Interested / Buy via WhatsApp</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
