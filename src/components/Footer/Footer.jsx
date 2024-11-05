// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css'; // Asegúrate de que la ruta sea correcta

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <h5 className="text-uppercase mb-3">Acerca de Nosotros</h5>
                        <p>
                            Somos una tienda en línea dedicada a ofrecer las mejores marcas al mejor precio. Con una amplia gama de productos, siempre tenemos algo para ti.
                        </p>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h5 className="text-uppercase mb-3">Enlaces Rápidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none">Inicio</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Productos</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Contacto</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Términos y Condiciones</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h5 className="text-uppercase mb-3">Contacto</h5>
                        <p>Email: <a href="https://www.google.com/intl/es-419/gmail/about/" className="text-light text-decoration-none">Flavioluis.chiguay@alumnosulagos.cl</a></p>
                        <p>Teléfono: +56998672468</p>
                        <p>Dirección: CALLE BLANCO 123, CASTRO, CHILE</p>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h5 className="text-uppercase mb-3">Síguenos</h5>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/" className="text-light me-3 fs-4"><i className="bi bi-facebook"></i></a>
                            <a href="https://x.com/?lang=es" className="text-light me-3 fs-4"><i className="bi bi-twitter"></i></a>
                            <a href="https://www.instagram.com/" className="text-light me-3 fs-4"><i className="bi bi-instagram"></i></a>
                            <a href="https://cl.linkedin.com/" className="text-light me-3 fs-4"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="mb-0">&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
