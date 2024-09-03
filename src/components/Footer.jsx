import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer
        className="footer grid grid-cols-12 gap-6 py-5 main-padding"
        style={{ background: "hsl(217.5deg 12.12% 12.94%)" }}
      >
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <div className="logo">
            <a href="/" className="logo-link text-4xl font-medium text-white">
              Sneakers
            </a>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <ul className="mt-1">
            <li className="text-xl font-bold text-white mb-5">About</li>
            <li className="text-lg text-white opacity-80 hover:opacity-100 transition duration-200 my-1">
              <Link to="/About">About us</Link>
            </li>
            <li className="text-lg text-white opacity-80 hover:opacity-100 transition duration-200 my-1">
              <Link to="/About">Features</Link>
            </li>
            <li className="text-lg text-white opacity-80 hover:opacity-100 transition duration-200 my-1">
              <Link to="/About">News & Blog</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <ul className="mt-1">
            <li className="text-xl font-bold text-white mb-5">Connect</li>
            <li className="text-lg text-white opacity-80 hover:opacity-100 transition duration-200 my-1">
              <a
                href="https://www.linkedin.com/in/youssef-mohammed-3818412bb/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li className="text-lg text-white opacity-80 hover:opacity-100 transition duration-200 my-1">
              <a
                href="https://www.facebook.com/profile.php?id=61552702670893"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li className="text-lg text-white opacity-80 hover:opacity-100 transition duration-200 my-1">
              <a
                href="https://www.instagram.com/youssef_mohamed.93/"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <ul className="mt-1">
            <li className="text-xl font-bold text-white mb-5">Support</li>
            <li className="text-lg text-white opacity-80 hover:opacity-100 transition duration-200 my-1">
              <Link to="/About">FAQs</Link>
            </li>
            <li className="text-lg text-white opacity-80 hover:opacity-100 transition duration-200 my-1">
              <Link to="/About">Support Center</Link>
            </li>
            <li className="text-lg text-white opacity-80 hover:opacity-100 transition duration-200 my-1">
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </footer>
      <div
        className="text-center py-3"
        style={{ background: "hsl(217.5deg 12.12% 12.94%)" }}
      >
        <h3 className="text-lg text-white">
          Made With Love By Youssef Mohammed ♥
        </h3>
      </div>
    </div>
  );
}
