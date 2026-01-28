import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';

const App = () => {
    const [whatsAppNumber, setWhatsAppNumber] = useState('919876543210');
    const [gallery, setGallery] = useState([
        {
            id: 1,
            title: 'Abstract Expression',
            description: 'A vibrant abstract painting featuring bold colors and dynamic brushstrokes.',
            image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&h=800&fit=crop',
            category: 'abstract'
        },
        {
            id: 2,
            title: 'Mountain Sunset',
            description: 'A stunning landscape painting depicting a mountain range at sunset.',
            image: 'https://images.unsplash.com/photo-1544510808-91bcbee1df55?w=800&h=800&fit=crop',
            category: 'landscape'
        },
        {
            id: 3,
            title: 'Portrait of Grace',
            description: 'A beautiful portrait capturing the essence of grace and elegance.',
            image: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=800&h=800&fit=crop',
            category: 'portrait'
        },
        {
            id: 4,
            title: 'Ocean Waves',
            description: 'A mesmerizing painting of ocean waves crashing against the shore.',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=800&fit=crop',
            category: 'nature'
        },
        {
            id: 5,
            title: 'City Lights',
            description: 'A vibrant cityscape painting featuring bright lights and towering buildings.',
            image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=800&fit=crop',
            category: 'cityscape'
        },
        {
            id: 6,
            title: 'Floral Beauty',
            description: 'A delicate painting of colorful flowers in full bloom.',
            image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800&h=800&fit=crop',
            category: 'nature'
        },
        {
            id: 7,
            title: 'Geometric Patterns',
            description: 'A modern painting featuring intricate geometric patterns and shapes.',
            image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop',
            category: 'abstract'
        },
        {
            id: 8,
            title: 'Forest Path',
            description: 'A serene painting of a winding path through a dense forest.',
            image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=800&fit=crop',
            category: 'landscape'
        }
    ]);
    const [services, setServices] = useState([]);
    const [aboutContent, setAboutContent] = useState('');
    const [termsContent, setTermsContent] = useState('');
    const [adminLoggedIn, setAdminLoggedIn] = useState(false);

    useEffect(() => {
        // Load initial data
        const savedNumber = localStorage.getItem('whatsappNumber');
        if (savedNumber) {
            setWhatsAppNumber(savedNumber);
        }

        const savedGallery = localStorage.getItem('gallery');
        if (savedGallery) {
            setGallery(JSON.parse(savedGallery));
        } else {
            // Save initial gallery to localStorage
            const initialGallery = [
                {
                    id: 1,
                    title: 'Abstract Expression',
                    description: 'A vibrant abstract painting featuring bold colors and dynamic brushstrokes.',
                    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&h=800&fit=crop',
                    category: 'abstract'
                },
                {
                    id: 2,
                    title: 'Mountain Sunset',
                    description: 'A stunning landscape painting depicting a mountain range at sunset.',
                    image: 'https://images.unsplash.com/photo-1544510808-91bcbee1df55?w=800&h=800&fit=crop',
                    category: 'landscape'
                },
                {
                    id: 3,
                    title: 'Portrait of Grace',
                    description: 'A beautiful portrait capturing the essence of grace and elegance.',
                    image: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=800&h=800&fit=crop',
                    category: 'portrait'
                },
                {
                    id: 4,
                    title: 'Ocean Waves',
                    description: 'A mesmerizing painting of ocean waves crashing against the shore.',
                    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=800&fit=crop',
                    category: 'nature'
                },
                {
                    id: 5,
                    title: 'City Lights',
                    description: 'A vibrant cityscape painting featuring bright lights and towering buildings.',
                    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=800&fit=crop',
                    category: 'cityscape'
                },
                {
                    id: 6,
                    title: 'Floral Beauty',
                    description: 'A delicate painting of colorful flowers in full bloom.',
                    image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800&h=800&fit=crop',
                    category: 'nature'
                },
                {
                    id: 7,
                    title: 'Geometric Patterns',
                    description: 'A modern painting featuring intricate geometric patterns and shapes.',
                    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop',
                    category: 'abstract'
                },
                {
                    id: 8,
                    title: 'Forest Path',
                    description: 'A serene painting of a winding path through a dense forest.',
                    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=800&fit=crop',
                    category: 'landscape'
                }
            ];
            setGallery(initialGallery);
            localStorage.setItem('gallery', JSON.stringify(initialGallery));
        }

        const savedServices = localStorage.getItem('services');
        if (savedServices) {
            setServices(JSON.parse(savedServices));
        }

        const savedAbout = localStorage.getItem('aboutContent');
        if (savedAbout) {
            setAboutContent(savedAbout);
        }

        const savedTerms = localStorage.getItem('termsContent');
        if (savedTerms) {
            setTermsContent(savedTerms);
        }

        // Check if admin was previously logged in
        const savedAdminLoggedIn = localStorage.getItem('adminLoggedIn');
        if (savedAdminLoggedIn === 'true') {
            setAdminLoggedIn(true);
        }
    }, []);

    const addArtwork = (artwork) => {
        const newGallery = [...gallery, artwork];
        setGallery(newGallery);
        localStorage.setItem('gallery', JSON.stringify(newGallery));
    };

    const updateArtwork = (id, updatedArtwork) => {
        const newGallery = gallery.map(art =>
            art.id === id ? updatedArtwork : art
        );
        setGallery(newGallery);
        localStorage.setItem('gallery', JSON.stringify(newGallery));
    };

    const deleteArtwork = (id) => {
        const newGallery = gallery.filter(art => art.id !== id);
        setGallery(newGallery);
        localStorage.setItem('gallery', JSON.stringify(newGallery));
    };

    const updateServices = (newServices) => {
        setServices(newServices);
        localStorage.setItem('services', JSON.stringify(newServices));
    };

    const updateAbout = (content) => {
        setAboutContent(content);
        localStorage.setItem('aboutContent', content);
    };

    const updateTerms = (content) => {
        setTermsContent(content);
        localStorage.setItem('termsContent', content);
    };

    const updateWhatsAppNumber = (number) => {
        setWhatsAppNumber(number);
        localStorage.setItem('whatsappNumber', number);
    };

    const loginAdmin = () => {
        setAdminLoggedIn(true);
        localStorage.setItem('adminLoggedIn', 'true');
    };

    const logoutAdmin = () => {
        setAdminLoggedIn(false);
        localStorage.removeItem('adminLoggedIn');
    };

    return (
        <Router>
            <div className="App">
                {/* Show Navbar, Footer, and WhatsApp button only on public pages */}
                {!window.location.pathname.startsWith('/admin') && <Navbar />}

                <Routes>
                    <Route path="/" element={
                        <HomePage
                            gallery={gallery}
                            whatsAppNumber={whatsAppNumber}
                        />
                    } />
                    <Route path="/about" element={
                        <AboutPage content={aboutContent} />
                    } />
                    <Route path="/services" element={
                        <ServicesPage
                            services={services}
                            whatsAppNumber={whatsAppNumber}
                        />
                    } />
                    <Route path="/terms" element={
                        <TermsPage content={termsContent} />
                    } />
                    <Route path="/contact" element={
                        <ContactPage whatsAppNumber={whatsAppNumber} />
                    } />
                    <Route path="/gallery" element={
                        <GalleryPage
                            gallery={gallery}
                            whatsAppNumber={whatsAppNumber}
                        />
                    } />
                    <Route path="/admin/login" element={
                        <AdminLogin onLogin={loginAdmin} />
                    } />
                    <Route path="/admin" element={
                        <AdminDashboard
                            isLoggedIn={adminLoggedIn}
                            onLogout={logoutAdmin}
                            gallery={gallery}
                            onAddArtwork={addArtwork}
                            onUpdateArtwork={updateArtwork}
                            onDeleteArtwork={deleteArtwork}
                            services={services}
                            onUpdateServices={updateServices}
                            aboutContent={aboutContent}
                            onUpdateAbout={updateAbout}
                            termsContent={termsContent}
                            onUpdateTerms={updateTerms}
                            whatsAppNumber={whatsAppNumber}
                            onUpdateWhatsAppNumber={updateWhatsAppNumber}
                        />
                    } />
                </Routes>

                {!window.location.pathname.startsWith('/admin') && <Footer />}
                {!window.location.pathname.startsWith('/admin') && <WhatsAppButton number={whatsAppNumber} />}
            </div>
        </Router>
    );
};

export default App;
