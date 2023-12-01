import Header from './components/header/Header';
import Home from './components/sectionHome/Home';
import Profiles from './components/sectionProfiles/Profiles';
import Footer from './components/footer/Footer';

import scss from './App.module.scss';

function App() {
    return (
        <>
            <Header />

            <main className={scss.main}>

                <Home />

                <Profiles />

            </main>

            <Footer />
        </>
    );
}

export default App;