import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-4">
            <div className="container-fluid">
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
                        <p>Email: <a href="mailto:Flavioluis.chiguay@alumnosulagos.cl" className="text-light text-decoration-none">Flavioluis.chiguay@alumnosulagos.cl</a></p>
                        <p>Teléfono: +56998672468 </p>
                        <p>Dirección: CALLE BLANCO 123, CASTRO, CHILE</p>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h5 className="text-uppercase mb-3">SIGUENOS</h5>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/" className="text-light me-3 fs-4"><i className="bi bi-facebook"></i></a>
                            <a href="https://x.com/?lang=es" className="text-light me-3 fs-4"><i className="bi bi-twitter"></i></a>
                            <a href="https://www.instagram.com/" className="text-light me-3 fs-4"><i className="bi bi-instagram"></i></a>
                            <a href="https://cl.linkedin.com/" className="text-light me-3 fs-4"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="mb-0">&copy; 2024 KING  STORE. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
