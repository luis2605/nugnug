import { Sora } from "@next/font/google";
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

// font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      style={{
        overflowY: "scroll",
        height: "120vh",
        scrollBehavior: "smooth", // Apply smooth scrolling here
      }}
    >
      <TopLeftImg />
      <Nav
        className="bg-blue-500 text-white py-4 px-8"
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
      />
      <Header style={{ position: "sticky", top: 0, zIndex: 1000 }} />
      <div
        className="z-0" // Lower z-index for the children
        style={{
          position: "relative", // This allows the z-index to take effect
          paddingTop: "3rem", // Adjust this value as needed to avoid overlap
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
