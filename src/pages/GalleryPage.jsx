import React, { useState } from 'react';
import ArtworkCard from '../components/ArtworkCard';
import Modal from '../components/Modal';
import './GalleryPage.css';

const GalleryPage = ({ gallery, whatsAppNumber }) => {
    const [selectedArtwork, setSelectedArtwork] = useState(null);
    const [filter, setFilter] = useState('all');

    // Mock filter options
    const filters = [
        { id: 'all', label: 'All Artworks' },
        { id: 'acrylic', label: 'Acrylic' },
        { id: 'oil', label: 'Oil Paintings' },
        { id: 'watercolor', label: 'Watercolor' },
        { id: 'digital', label: 'Digital Art' }
    ];

    const handleWhatsAppClick = (artwork) => {
        const message = encodeURIComponent(`Hello, I'm interested in the painting titled "${artwork.title}". Please share the price and details.`);
        window.open(`https://wa.me/${whatsAppNumber}?text=${message}`, '_blank');
    };

    const handleViewClick = (artwork) => {
        setSelectedArtwork(artwork);
    };

    const handleCloseModal = () => {
        setSelectedArtwork(null);
    };

    return (
        <div className="gallery-page">
            <section className="gallery-hero">
                <div className="container">
                    <div className="gallery-hero-content">
                        <h1>Art Gallery</h1>
                        <p>Explore my collection of beautiful artworks</p>
                    </div>
                </div>
            </section>

            <section className="gallery-filter-section">
                <div className="container">
                    <div className="filter-tabs">
                        {filters.map((filterOption) => (
                            <button
                                key={filterOption.id}
                                className={`filter-tab ${filter === filterOption.id ? 'active' : ''}`}
                                onClick={() => setFilter(filterOption.id)}
                            >
                                {filterOption.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="gallery-grid-section">
                <div className="container">
                    <div className="gallery-grid">
                        {gallery.map((artwork) => (
                            <ArtworkCard
                                key={artwork.id}
                                artwork={artwork}
                                onWhatsAppClick={handleWhatsAppClick}
                                onViewClick={handleViewClick}
                            />
                        ))}
                    </div>

                    {gallery.length === 0 && (
                        <div className="empty-gallery">
                            <i className="fas fa-images"></i>
                            <h3>No Artworks Yet</h3>
                            <p>Check back soon for new additions to the gallery</p>
                        </div>
                    )}
                </div>
            </section>

            <Modal
                isOpen={!!selectedArtwork}
                onClose={handleCloseModal}
                artwork={selectedArtwork}
                onWhatsAppClick={handleWhatsAppClick}
            />
        </div>
    );
};

export default GalleryPage;
