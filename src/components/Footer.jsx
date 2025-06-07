import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center mt-5" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold mb-3">
                <i className="fa fa-shopping-bag me-2"></i>
                React Ecommerce
              </h5>
              <p className="mb-3">
                Your one-stop destination for quality products at amazing prices. 
                Shop with confidence and enjoy fast, reliable delivery.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a className="text-white fs-4" href="https://github.com/ssahibsingh" target="_blank" rel="noreferrer" style={{
                  transition: 'transform 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.2)'
                }} onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                }}>
                  <i className="fa fa-github"></i>
                </a>
                <a className="text-white fs-4" href="#" target="_blank" rel="noreferrer" style={{
                  transition: 'transform 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.2)'
                }} onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                }}>
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="text-white fs-4" href="#" target="_blank" rel="noreferrer" style={{
                  transition: 'transform 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.2)'
                }} onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                }}>
                  <i className="fa fa-twitter"></i>
                </a>
                <a className="text-white fs-4" href="#" target="_blank" rel="noreferrer" style={{
                  transition: 'transform 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.2)'
                }} onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                }}>
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
            
            <div className="col-md-2 mb-4">
              <h6 className="fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/" className="text-white text-decoration-none" style={{
                    transition: 'color 0.3s ease'
                  }} onMouseEnter={(e) => {
                    e.target.style.color = '#f8f9fa'
                  }} onMouseLeave={(e) => {
                    e.target.style.color = 'white'
                  }}>Home</a>
                </li>
                <li className="mb-2">
                  <a href="/product" className="text-white text-decoration-none" style={{
                    transition: 'color 0.3s ease'
                  }} onMouseEnter={(e) => {
                    e.target.style.color = '#f8f9fa'
                  }} onMouseLeave={(e) => {
                    e.target.style.color = 'white'
                  }}>Products</a>
                </li>
                <li className="mb-2">
                  <a href="/about" className="text-white text-decoration-none" style={{
                    transition: 'color 0.3s ease'
                  }} onMouseEnter={(e) => {
                    e.target.style.color = '#f8f9fa'
                  }} onMouseLeave={(e) => {
                    e.target.style.color = 'white'
                  }}>About</a>
                </li>
                <li className="mb-2">
                  <a href="/contact" className="text-white text-decoration-none" style={{
                    transition: 'color 0.3s ease'
                  }} onMouseEnter={(e) => {
                    e.target.style.color = '#f8f9fa'
                  }} onMouseLeave={(e) => {
                    e.target.style.color = 'white'
                  }}>Contact</a>
                </li>
              </ul>
            </div>
            
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold mb-3">Categories</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/product" className="text-white text-decoration-none" style={{
                    transition: 'color 0.3s ease'
                  }} onMouseEnter={(e) => {
                    e.target.style.color = '#f8f9fa'
                  }} onMouseLeave={(e) => {
                    e.target.style.color = 'white'
                  }}>Men's Clothing</a>
                </li>
                <li className="mb-2">
                  <a href="/product" className="text-white text-decoration-none" style={{
                    transition: 'color 0.3s ease'
                  }} onMouseEnter={(e) => {
                    e.target.style.color = '#f8f9fa'
                  }} onMouseLeave={(e) => {
                    e.target.style.color = 'white'
                  }}>Women's Clothing</a>
                </li>
                <li className="mb-2">
                  <a href="/product" className="text-white text-decoration-none" style={{
                    transition: 'color 0.3s ease'
                  }} onMouseEnter={(e) => {
                    e.target.style.color = '#f8f9fa'
                  }} onMouseLeave={(e) => {
                    e.target.style.color = 'white'
                  }}>Electronics</a>
                </li>
                <li className="mb-2">
                  <a href="/product" className="text-white text-decoration-none" style={{
                    transition: 'color 0.3s ease'
                  }} onMouseEnter={(e) => {
                    e.target.style.color = '#f8f9fa'
                  }} onMouseLeave={(e) => {
                    e.target.style.color = 'white'
                  }}>Jewelry</a>
                </li>
              </ul>
            </div>
            
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold mb-3">Contact Info</h6>
              <div className="text-start">
                <p className="mb-2">
                  <i className="fa fa-map-marker me-2"></i>
                  123 Shopping Street, City, State 12345
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone me-2"></i>
                  +1 (555) 123-4567
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope me-2"></i>
                  info@reactecommerce.com
                </p>
              </div>
            </div>
          </div>
          
          <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.3)' }} />
          
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start text-center mb-3 mb-md-0">
              <p className="mb-0">
                Made with ❤️ by {" "}
                <a href="https://sahibsingh.dev" className="text-white text-decoration-none fw-semibold" target="_blank" rel="noreferrer" style={{
                  borderBottom: '1px solid rgba(255,255,255,0.5)',
                  transition: 'border-color 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.borderColor = 'white'
                }} onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.5)'
                }}>
                  Sahib Singh
                </a>
              </p>
            </div>
            <div className="col-md-6 text-md-end text-center">
              <p className="mb-0">
                © 2024 React Ecommerce. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
