import React from 'react';
import Button from '@mui/material/Button';

interface NavButtonProps {
    page: string;
}

const NavButton: React.FC<NavButtonProps> = ({ page }) => {
    const handleCloseNavMenu = () => {
        // ナビゲーションメニューを閉じるロジックをここに追加
    };

    return (
        <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
        >
            {page}
        </Button>
    );
};

export default NavButton;
