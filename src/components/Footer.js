import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <small>
        &copy; {new Date().getFullYear()} {' '}
        by -{' '}
        <a
          target="_blank"
          rel="Agro mais brasil"
          href="www.agromaisbrasil.com.br/site/"
        >
         Agro mais brasil
        </a>
      </small>
    </footer>
  );
}

export default Footer;
