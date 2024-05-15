import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

function DefaultLayout({ children }) {
  return (
    <div className=" relative grid grid-cols-6   w-full">
      <Header />

      <main className=" pt-[100px] col-span-6  mx-0 md:mx-36 ">{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
