import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Card } from 'primereact/card';
// routes
import Home from './pages/Home';       
import Settings from './pages/Settings';    
import Header from './components/Header';
import Expenses from './pages/Expenses';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Card style={{ marginTop: '0.5rem' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/expenses" element={<Expenses />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </Card>        
        </BrowserRouter>
    );
}