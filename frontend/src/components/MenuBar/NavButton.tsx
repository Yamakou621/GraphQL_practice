import React from 'react';
import Button from '@mui/material/Button';

interface NavButtonProps {
    page: string;
}

const NavButton: React.FC<NavButtonProps> = ({ page }) => {
    const handleNavButtonClick = () => {
        if (page === 'Home') {
            window.location.href = 'http://localhost:5173/home';
        }
        // 他のページのリダイレクトをここに追加できます
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
