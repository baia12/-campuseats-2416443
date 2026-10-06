function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer ClassName="footer">
      <p> &copy; {currentYear} Campus Eats. All rights reserved.</p>
    </footer>
  );
}
export default Footer;
