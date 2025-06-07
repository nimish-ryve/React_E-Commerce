import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-0 pb-3">
        <div className="card bg-dark text-white border-0 mx-3 position-relative overflow-hidden" style={{
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}>
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="New Season Arrivals"
            height={500}
            style={{
              objectFit: 'cover',
              height: '500px',
              filter: 'brightness(0.7)'
            }}
          />
          <div className="card-img-overlay d-flex align-items-center" style={{
            background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.6) 100%)'
          }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <h1 className="card-title display-3 fw-bold mb-4" style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    lineHeight: '1.2'
                  }}>
                    New Season Arrivals
                  </h1>
                  <p className="card-text fs-4 mb-4 d-none d-sm-block" style={{
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                    maxWidth: '600px'
                  }}>
                    Discover the latest trends and must-have items for this season. 
                    From fashion-forward clothing to cutting-edge electronics, 
                    find everything you need to stay ahead of the curve.
                  </p>
                  <div className="d-flex flex-wrap gap-3 mt-4">
                    <a href="/product" className="btn btn-light btn-lg px-4 py-3 rounded-pill fw-semibold" style={{
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(255,255,255,0.3)'
                    }} onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)'
                      e.target.style.boxShadow = '0 6px 20px rgba(255,255,255,0.4)'
                    }} onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)'
                      e.target.style.boxShadow = '0 4px 15px rgba(255,255,255,0.3)'
                    }}>
                      <i className="fa fa-shopping-bag me-2"></i>
                      Shop Now
                    </a>
                    <a href="/about" className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-semibold" style={{
                      transition: 'all 0.3s ease',
                      border: '2px solid rgba(255,255,255,0.8)'
                    }} onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'
                      e.target.style.transform = 'translateY(-2px)'
                    }} onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent'
                      e.target.style.transform = 'translateY(0)'
                    }}>
                      <i className="fa fa-info-circle me-2"></i>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="position-absolute" style={{
            top: '20px',
            right: '20px',
            width: '100px',
            height: '100px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite'
          }}></div>
          <div className="position-absolute" style={{
            bottom: '30px',
            left: '30px',
            width: '60px',
            height: '60px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '50%',
            animation: 'float 4s ease-in-out infinite reverse'
          }}></div>
        </div>
      </div>
      
      {/* Add floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </>
  );
};

export default Home;
