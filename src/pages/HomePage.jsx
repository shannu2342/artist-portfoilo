import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArtworkCard from '../components/ArtworkCard';
import Modal from '../components/Modal';
import './HomePage.css';

const HomePage = ({ gallery, whatsAppNumber }) => {
    const [selectedArtwork, setSelectedArtwork] = useState(null);
    const featuredArtworks = gallery.slice(0, 6);

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
        <div className="home-page">
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>
                                <span className="hero-greeting">Welcome to</span>
                                <span className="hero-name">Artist Portfolio</span>
                            </h1>
                            <p className="hero-tagline">
                                Discover beautiful handcrafted artworks that tell stories of passion and creativity
                            </p>
                            <div className="hero-actions">
                                <Link to="/gallery" className="btn btn-primary">
                                    <i className="fas fa-images"></i>
                                    Explore Gallery
                                </Link>
                                <button
                                    className="btn btn-whatsapp"
                                    onClick={() => {
                                        const message = encodeURIComponent('Hello! I saw your art portfolio and would like to learn more about your beautiful paintings.');
                                        window.open(`https://wa.me/${whatsAppNumber}?text=${message}`, '_blank');
                                    }}
                                >
                                    <i className="fab fa-whatsapp"></i>
                                    Contact Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured-artworks">
                <div className="container">
                    <div className="section-title">
                        <h2>Featured Artworks</h2>
                        <p className="section-description">Selected pieces from my collection</p>
                    </div>

                    <div className="artwork-grid">
                        {featuredArtworks.map((artwork) => (
                            <ArtworkCard
                                key={artwork.id}
                                artwork={artwork}
                                onWhatsAppClick={handleWhatsAppClick}
                                onViewClick={handleViewClick}
                            />
                        ))}
                    </div>

                    <div className="view-all-container">
                        <Link to="/gallery" className="btn btn-secondary">
                            <i className="fas fa-arrow-right"></i>
                            View All Artworks
                        </Link>
                    </div>
                </div>
            </section>

            <section className="about-preview">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>About the Artist</h2>
                            <p>
                                With over a decade of experience, I bring stories to life through the vibrant language of colors.
                                Each artwork is a journey of emotions, crafted with passion and dedication.
                            </p>
                            <Link to="/about" className="btn btn-primary">
                                <i className="fas fa-user"></i>
                                Learn More
                            </Link>
                        </div>
                        <div className="about-image">
                            <div className="artist-placeholder">
                                <i className="fas fa-palette"></i>
                                <p>Artist Profile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-preview">
                <div className="container">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p className="section-description">What I offer</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-paint-brush"></i>
                            </div>
                            <h3>Custom Artworks</h3>
                            <p>Commission unique pieces tailored to your preferences</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h3>Art Workshops</h3>
                            <p>Learn the art of painting with hands-on guidance</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-gallery"></i>
                            </div>
                            <h3>Exhibitions</h3>
                            <p>Participate in art shows and exhibitions</p>
                        </div>
                    </div>

                    <div className="view-all-container">
                        <Link to="/services" className="btn btn-secondary">
                            <i className="fas fa-arrow-right"></i>
                            View All Services
                        </Link>
                    </div>
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

export default HomePage;
