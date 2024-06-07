import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/useAuth';

interface NavButtonProps {
    page: string;
}

const NavButton: React.FC<NavButtonProps> = ({ page }) => {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    const handleNavButtonClick = () => {
        if (page === 'Home') {
            if (isLoggedIn) {
                navigate('/home');
            } else {
                navigate('/login');
            }
        }
        // 他のページのリダイレクトを追加
    };

    return (
        <Button
            key={page}
            onClick={handleNavButtonClick}
            sx={{ my: 2, color: 'white', display: 'block' }}
        >
            {page}
        </Button>
    );
};

export default NavButton;
