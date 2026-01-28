import React from 'react';
import './AboutPage.css';

const AboutPage = ({ content }) => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <h1>About the Artist</h1>
                        <p>Where creativity meets passion</p>
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
                            <h2>My Journey</h2>
                            <div className="about-description">
                                {content || (
                                    <>
                                        <p>
                                            I discovered my love for art at a very young age, finding solace in the vibrant world of colors and shapes.
                                            What started as a childhood hobby soon evolved into a lifelong passion that drives me every single day.
                                        </p>
                                        <p>
                                            With over a decade of experience in various artistic mediums, I've honed my skills and developed a unique
                                            style that blends traditional techniques with contemporary expressions. Each artwork is a reflection of my
                                            emotions, experiences, and the world around me.
                                        </p>
                                        <p>
                                            My artistic journey has been filled with exploration - from experimenting with different materials to
                                            participating in numerous exhibitions and art fairs. The constant pursuit of perfection and innovation keeps
                                            my work fresh and dynamic.
                                        </p>
                                        <p>
                                            When I'm not painting, you can find me teaching art workshops, mentoring young artists, or exploring new
                                            destinations to draw inspiration from diverse cultures and landscapes.
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
                        <div className="philosophy-text">
                            <p>
                                <i className="fas fa-quote-left"></i>
                                Art is not just about creating beautiful images; it's about telling stories, evoking emotions, and capturing
                                the essence of the human experience. Each stroke of the brush is a conversation between the artist and the canvas,
                                where ideas take shape and emotions come alive.
                                <i className="fas fa-quote-right"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="art-materials">
                <div className="container">
                    <h2>Favorite Materials</h2>
                    <div className="materials-grid">
                        <div className="material-card">
                            <div className="material-icon">
                                <i className="fas fa-palette"></i>
                            </div>
                            <h3>Acrylic Paints</h3>
                            <p>Vibrant colors with quick drying time</p>
                        </div>
                        <div className="material-card">
                            <div className="material-icon">
                                <i className="fas fa-brush"></i>
                            </div>
                            <h3>Oil Paints</h3>
                            <p>Rich textures and deep color saturation</p>
                        </div>
                        <div className="material-card">
                            <div className="material-icon">
                                <i className="fas fa-water"></i>
                            </div>
                            <h3>Watercolors</h3>
                            <p>Transparent and delicate wash effects</p>
                        </div>
                        <div className="material-card">
                            <div className="material-icon">
                                <i className="fas fa-pencil-alt"></i>
                            </div>
                            <h3>Charcoal</h3>
                            <p>Expressive strokes and dramatic contrasts</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="achievements">
                <div className="container">
                    <h2>Achievements & Recognitions</h2>
                    <div className="achievements-list">
                        <div className="achievement-item">
                            <div className="achievement-icon">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <div className="achievement-content">
                                <h3>Best Emerging Artist</h3>
                                <p>International Art Festival, 2020</p>
                            </div>
                        </div>
                        <div className="achievement-item">
                            <div className="achievement-icon">
                                <i className="fas fa-medal"></i>
                            </div>
                            <div className="achievement-content">
                                <h3>Gold Medal</h3>
                                <p>National Painting Competition, 2021</p>
                            </div>
                        </div>
                        <div className="achievement-item">
                            <div className="achievement-icon">
                                <i className="fas fa-award"></i>
                            </div>
                            <div className="achievement-content">
                                <h3>People's Choice Award</h3>
                                <p>Urban Art Exhibition, 2022</p>
                            </div>
                        </div>
                        <div className="achievement-item">
                            <div className="achievement-icon">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="achievement-content">
                                <h3>Art Excellence Award</h3>
                                <p>Contemporary Art Gallery, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
