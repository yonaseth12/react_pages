import animationGif from './assets/archive.gif';
import './ContentArchive.css';
import NavBar from './Components/Navbar.js';
import {HeaderTitle, SearchBar, SearchResults} from './Components/ContentArchiveComponents.js';
import Footer from './Components/Footer.js';

function ContentArchive() {
  return (
      <>
        <NavBar />
        <div className="upperComponents">
        <div className="left-content">
          <HeaderTitle />
          <SearchBar />
        </div>
        <div className="animation-container">
          <img src={animationGif} alt="Animation" className="animation-gif" />
        </div>
      </div>
        <SearchResults/>
        <Footer />
      </>
  );
}



export default ContentArchive;
