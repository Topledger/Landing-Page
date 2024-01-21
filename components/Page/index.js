import Footer from "../Footer";
import Header from "../Header";

const Page = ({ children }) => (
  <div className="page">
    <div className="page-content">{children}</div>
    <Footer />
  </div>
);

export default Page;
