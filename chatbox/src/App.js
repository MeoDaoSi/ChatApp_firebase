import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ChatRoom from './components/ChatRoom';
import AuthProvider from './Context/AuthProvider';

export default function App() {
        return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<ChatRoom />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
