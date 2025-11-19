import React from 'react';
import Logo from '../../img/logoIES.png';

class Header extends React.Component {
    render() {
        return (
            <div className="bg-info text-center text-dark p-4 shadow">
                <img src={Logo} alt="Logo del IES" width="120px" className="mb-3" />
                <h2 className="fw-bold">Sistema de Gestión de Incidencias</h2>
            </div>
        );
    }
}

export default Header;