import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <h3 className="text-lg font-semibold mb-4">Services</h3>
      <ul className="space-y-2">
        <li><Link to="/labour" className="hover:text-off-white">Labour</Link></li>
        <li><Link to="/beautification" className="hover:text-off-white">Beautification</Link></li>
        <li><Link to="/webdevelopment" className="hover:text-off-white">Web Development</Link></li>
        <li><Link to="/music" className="hover:text-off-white">Music</Link></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-4">Company</h3>
      <ul className="space-y-2">
        <li><Link to="/about" className="hover:text-off-white">About</Link></li>
        <li><Link to="/careers" className="hover:text-off-white">Careers</Link></li>
        <li><Link to="/contact" className="hover:text-off-white">Contact</Link></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-4">Legal</h3>
      <ul className="space-y-2">
        <li><Link to="/privacy-policy" className="hover:text-off-white">Privacy Policy</Link></li>
        <li><Link to="/terms-of-service" className="hover:text-off-white">Terms of Service</Link></li>
        <li><Link to="/copyright" className="hover:text-off-white">Copyright</Link></li>
      </ul>
    </div>
  </div>
);

export default FooterLinks;