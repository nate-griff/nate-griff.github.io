import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import WeddingDetails from './components/WeddingDetails';
import Schedule from './components/Schedule';
import RSVP from './components/RSVP';
import Travel from './components/Travel';
import GiftRegistry from './components/GiftRegistry';
import PhotoGallery from './components/PhotoGallery';
import FAQs from './components/FAQs';
import WeddingParty from './components/WeddingParty';
import SpecialTraditions from './components/SpecialTraditions';
import './assets/css/styles.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Introduction />
            <WeddingDetails />
            <Schedule />
            <RSVP />
            <Travel />
            <GiftRegistry />
            <PhotoGallery />
            <FAQs />
            <WeddingParty />
            <SpecialTraditions />
            <Footer />
        </div>
    );
}

export default App;