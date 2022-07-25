import { Routes, Route } from 'react-router-dom'
import ContenidoHome from '../components/ContenidoHome'
import GalleryComponent from '../components/GalleryComponent'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <ContenidoHome /> } />
            <Route path="/galeria" element={ <GalleryComponent /> } />
        </Routes>
    )
}

export default AppRouter