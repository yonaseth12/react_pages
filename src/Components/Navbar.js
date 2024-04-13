//This component serves as a Navigation bar for content creation related pages.

function NavBar(){
    return(
        <>
            <div className="navbar">
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="content-creation">Content Creation</a></li>
            <li><a href="#doctors">Archive</a></li>
            <li><a href="#appointment">Contact</a></li>
            <li><a href="#about">About</a></li>
            </ul>
            </div>
        </>
    );
}

export default NavBar;