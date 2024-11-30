import { Link } from "react-router-dom";
import footerIcon from "../../assets/eco.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="w-11/12 mx-auto footer py-8 font-openSans text-[#064E3B] items-center">
      <aside>
        <div className="w-12 md:w-20">
            <img className="w-full" src={footerIcon} alt="footer icon" />
        </div>
        <p className="text-xl md:text-3xl font-bebas">
          Eco Adventure
        </p>
        <p className="font-medium">The most outstanding experience.</p>
      </aside>

      <nav>
        <h6 className="footer-title font-bold">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://www.facebook.com/shoptorshichowdhuryy" target="_blank" className="text-xl">
          <FaFacebook />
          </Link>
          <Link to="https://www.instagram.com/shoptorshichowdhury/" target="_blank" className="text-xl">
            <FaInstagram></FaInstagram>
          </Link>
          <Link to="https://www.linkedin.com/in/shoptorshi-chowdhury/" target="_blank" className="text-xl">
            <FaLinkedin></FaLinkedin>
          </Link>
        </div>
      </nav>

    </footer>
  );
};

export default Footer;
