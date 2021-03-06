const toggleNavigation = () => {};
const Header = () => (
  <div className="mobile-container">
    <div className="topnav">
      <a href="#home" className="active">
        Logo
      </a>
      <div id="myLinks">
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <a href="javascript:void(0);" className="icon" onClick={toggleNavigation}>
        <i className="fa fa-bars"></i>
      </a>
    </div>

    <div style="padding-left:16px">
      <h3>Vertical Mobile Navbar</h3>
      <p>
        This example demonstrates how a navigation menu on a mobile/smart phone
        could look like.
      </p>
      <p>
        Click on the hamburger menu (three bars) in the top right corner, to
        toggle the menu.
      </p>
    </div>
  </div>
);
