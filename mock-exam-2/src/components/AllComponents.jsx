import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import About from './About'
import NoPage from "./NoPage"
import Teams from "./Teams"

function AllComponents(props) {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route index element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/teams" element={<Teams />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;
