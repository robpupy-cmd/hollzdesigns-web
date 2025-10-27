class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background-color: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }
        
        nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: #92400e;
          display: flex;
          align-items: center;
        }
        
        .logo img {
          height: 40px;
          margin-right: 10px;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        
        .nav-links a {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          transition: color 0.3s ease;
          position: relative;
        }
        
        .nav-links a:hover {
          color: #b45309;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #b45309;
          transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #333;
        }
        
        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: white;
          padding: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .mobile-menu.active {
          display: block;
        }
        
        .mobile-nav-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .mobile-nav-links li {
          padding: 0.75rem 0;
          border-bottom: 1px solid #eee;
        }
        
        .mobile-nav-links a {
          color: #333;
          text-decoration: none;
          font-weight: 500;
        }
        
        .cart-icon {
          position: relative;
        }
        
        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: #b45309;
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-button {
            display: block;
          }
        }
      </style>
      
      <nav>
        <a href="/" class="logo">
          <img src="https://ekstromfurniture.com/wp-content/uploads/2021/01/logoekstrom.svg" alt="Wooden Wonders Logo">
          Wooden Wonders
        </a>
        
        <ul class="nav-links">
          <li><a href="#">Living Room</a></li>
          <li><a href="#">Dining & Kitchen</a></li>
          <li><a href="#">Bedroom & Bath</a></li>
          <li><a href="#">Custom Orders</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li>
            <a href="#" class="cart-icon">
              <i data-feather="shopping-cart"></i>
              <span class="cart-count">0</span>
            </a>
          </li>
        </ul>
        
        <button class="mobile-menu-button" aria-label="Menu" aria-expanded="false">
          <i data-feather="menu"></i>
        </button>
      </nav>
      
      <div class="mobile-menu hidden">
        <ul class="mobile-nav-links">
          <li><a href="#">Living Room</a></li>
          <li><a href="#">Dining & Kitchen</a></li>
          <li><a href="#">Bedroom & Bath</a></li>
          <li><a href="#">Custom Orders</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);
