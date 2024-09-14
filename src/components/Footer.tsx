function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4 pt-6">About Us</h2>
            <p className="mb-4">
              Welcome to Metapparels, where fashion meets innovation! At the heart of our brand is a dedication to creating unique, contemporary clothing that blends style with sustainability. Inspired by modern trends and driven by a passion for quality, we craft pieces designed to make you feel confident and comfortable in your own skin.
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4 pt-6">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4 grid grid-cols-1 pt-6">Follow Us</h2>
            <div className="grid grid-cols-1">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4 pt-6">Contact Us</h2>
            <p>DUIET, Dibrugarh</p>
            <p>Assam 786001</p>
            <p>Email: meta@parrels.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          </div>
          <p className="text-center text-xs pt-8">© 2024 Metapparels. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer