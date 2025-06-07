import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3 sticky-top" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2 text-white" to="/" style={{
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}> 
                    <i className="fa fa-shopping-bag me-2"></i>
                    React Ecommerce
                </NavLink>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{
                    backgroundColor: 'rgba(255,255,255,0.2)'
                }}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link text-white fw-semibold px-3 py-2 rounded-pill transition-all" to="/" style={{
                                transition: 'all 0.3s ease'
                            }} onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'
                            }} onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent'
                            }}>
                                <i className="fa fa-home me-1"></i>Home
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link text-white fw-semibold px-3 py-2 rounded-pill" to="/product" style={{
                                transition: 'all 0.3s ease'
                            }} onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'
                            }} onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent'
                            }}>
                                <i className="fa fa-box me-1"></i>Products
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link text-white fw-semibold px-3 py-2 rounded-pill" to="/about" style={{
                                transition: 'all 0.3s ease'
                            }} onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'
                            }} onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent'
                            }}>
                                <i className="fa fa-info-circle me-1"></i>About
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link text-white fw-semibold px-3 py-2 rounded-pill" to="/contact" style={{
                                transition: 'all 0.3s ease'
                            }} onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'
                            }} onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent'
                            }}>
                                <i className="fa fa-envelope me-1"></i>Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center d-flex flex-wrap justify-content-center">
                        <NavLink to="/login" className="btn btn-outline-light m-1 px-3 py-2 rounded-pill fw-semibold" style={{
                            transition: 'all 0.3s ease',
                            border: '2px solid rgba(255,255,255,0.8)'
                        }}>
                            <i className="fa fa-sign-in-alt me-1"></i> Login
                        </NavLink>
                        <NavLink to="/register" className="btn btn-outline-light m-1 px-3 py-2 rounded-pill fw-semibold" style={{
                            transition: 'all 0.3s ease',
                            border: '2px solid rgba(255,255,255,0.8)'
                        }}>
                            <i className="fa fa-user-plus me-1"></i> Register
                        </NavLink>
                        <NavLink to="/cart" className="btn btn-light m-1 px-3 py-2 rounded-pill fw-semibold position-relative" style={{
                            transition: 'all 0.3s ease',
                            color: '#667eea'
                        }}>
                            <i className="fa fa-shopping-cart me-1"></i> Cart 
                            {state.length > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{
                                    fontSize: '0.7rem'
                                }}>
                                    {state.length}
                                </span>
                            )}
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar