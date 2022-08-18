
import React from 'react';
import Dashboard from './Dashboard';
import Productsss from './Productsss';


// import CustomDocument from './CustomDocument';

// global.Buffer = global.Buffer || require('buffer').Buffer; // Buffer 추가

const Admin = () => {
    return (
        <div>
            
            <Dashboard/>
            
            <Productsss/>
        </div>
    );
};

export default Admin;