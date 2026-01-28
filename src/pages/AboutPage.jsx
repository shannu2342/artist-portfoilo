import React from 'react';
import './AboutPage.css';

const AboutPage = ({ content }) => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <h1>About AUREXON</h1>
                        <p>Creating Beyond the Canvas</p>
                    </div>
                </div>
            </section>

            <section className="about-content-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image">
                            <div className="artist-portrait">
                                <i className="fas fa-palette"></i>
                            </div>
                        </div>
                        <div className="about-text">
                            <h2>About AUREXON</h2>
                            <div className="about-description">
                                {content || (
                                    <>
                                        <p>
                                            AUREXON is a digital painting studio dedicated to pure creativity, artistic expression, and visual storytelling.
                                            The studio focuses on crafting high-quality digital artworks that combine imagination, emotion, and refined
                                            aesthetics, without being bound by trends or templates.
                                        </p>
                                        <p>
                                            At its core, AUREXON is about artistry over automation. Every piece is thoughtfully designed and painted
                                            with attention to form, color, mood, and detail resulting in visuals that feel expressive, original, and
                                            timeless. The studio embraces a hands-on creative process, valuing depth, craftsmanship, and personal
                                            vision in every artwork.
                                        </p>
                                        <p>
                                            AUREXON explores a wide range of artistic themes, from concept art and stylized illustrations to expressive
                                            visual narratives, always driven by a strong sense of composition and storytelling. The focus remains on
                                            creating art that connects emotionally, inspires curiosity, and leaves a lasting impression.
                                        </p>
                                        <p>
                                            AUREXON is not just a studio it is a creative space where ideas are shaped into meaningful visual art.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="artistic-philosophy">
                <div className="container">
                    <div className="philosophy-content">
                        <h2>Artistic Philosophy</h2>
                        <div className="philosophy-grid">
                            <div className="philosophy-image">
                                <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&h=600&fit=crop" alt="Artistic Philosophy" />
                            </div>
                            <div className="philosophy-text">
                                <p>
                                    <i className="fas fa-quote-left"></i>
                                    At AUREXON, art is a journey of exploration and expression. We believe that every artwork should tell a story,
                                    evoke emotions, and leave a lasting impression. Our creative process is driven by passion, imagination, and a
                                    commitment to artistic excellence.
                                    <i className="fas fa-quote-right"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="art-gallery-preview">
                <div className="container">
                    <h2>Featured Works</h2>
                    <div className="gallery-preview-grid">
                        <div className="gallery-preview-item">
                            <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=300&fit=crop" alt="Abstract Art" />
                            <div className="gallery-preview-overlay">
                                <h3>Abstract Expression</h3>
                            </div>
                        </div>
                        <div className="gallery-preview-item">
                            <img src="https://images.unsplash.com/photo-1544510808-91bcbee1df55?w=400&h=300&fit=crop" alt="Concept Art" />
                            <div className="gallery-preview-overlay">
                                <h3>Concept Art</h3>
                            </div>
                        </div>
                        <div className="gallery-preview-item">
                            <img src="https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=400&h=300&fit=crop" alt="Digital Painting" />
                            <div className="gallery-preview-overlay">
                                <h3>Digital Painting</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="achievements">
                <div className="container">
                    <h2>Our Journey</h2>
                    <div className="achievements-list">
                        <div className="achievement-item">
                            <div className="achievement-icon">
                                <i className="fas fa-palette"></i>
                            </div>
                            <div className="achievement-content">
                                <h3>Studio Founded</h3>
                                <p>2018</p>
                            </div>
                        </div>
                        <div className="achievement-item">
                            <div className="achievement-icon">
                                <i className="fas fa-award"></i>
                            </div>
                            <div className="achievement-content">
                                <h3>International Recognition</h3>
                                <p>2021</p>
                            </div>
                        </div>
                        <div className="achievement-item">
                            <div className="achievement-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="achievement-content">
                                <h3>Global Clientele</h3>
                                <p>20+ Countries</p>
                            </div>
                        </div>
                        <div className="achievement-item">
                            <div className="achievement-icon">
                                <i className="fas fa-images"></i>
                            </div>
                            <div className="achievement-content">
                                <h3>Artworks Created</h3>
                                <p>500+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
