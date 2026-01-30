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
import AddPainting from './pages/AddPainting';
import ManagePaintings from './pages/ManagePaintings';
import EditPainting from './pages/EditPainting';
import EditAbout from './pages/EditAbout';
import EditServices from './pages/EditServices';
import EditTerms from './pages/EditTerms';
import EditWhatsApp from './pages/EditWhatsApp';

const App = () => {
    const [whatsAppNumber, setWhatsAppNumber] = useState('919876543210');
    const [gallery, setGallery] = useState([]);
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

        // Clear existing gallery data from localStorage to remove demo images
        localStorage.removeItem('gallery');
        // Initialize with empty gallery
        const initialGallery = [];
        setGallery(initialGallery);
        localStorage.setItem('gallery', JSON.stringify(initialGallery));

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
                    <Route path="/admin/add-painting" element={
                        <AddPainting
                            onAddArtwork={addArtwork}
                        />
                    } />
                    <Route path="/admin/manage-paintings" element={
                        <ManagePaintings
                            gallery={gallery}
                            onDeleteArtwork={deleteArtwork}
                            onUpdateArtwork={updateArtwork}
                        />
                    } />
                    <Route path="/admin/edit-painting" element={
                        <EditPainting
                            onUpdateArtwork={updateArtwork}
                        />
                    } />
                    <Route path="/admin/edit-about" element={
                        <EditAbout
                            onUpdateAbout={updateAbout}
                        />
                    } />
                    <Route path="/admin/edit-services" element={
                        <EditServices
                            onUpdateServices={updateServices}
                        />
                    } />
                    <Route path="/admin/edit-terms" element={
                        <EditTerms
                            onUpdateTerms={updateTerms}
                        />
                    } />
                    <Route path="/admin/edit-whatsapp" element={
                        <EditWhatsApp
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
