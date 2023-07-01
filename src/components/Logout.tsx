import React from 'react';
import { useMsal } from "@azure/msal-react";
import { Button } from 'react-bootstrap';
import 'src/styles/Logout.css';

const Logout: React.FC = () => {
    const { instance } = useMsal();

    const handleLogout = () => {
        instance.logout();
    };

    return (
        <div className="logout">
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
};

export default Logout;