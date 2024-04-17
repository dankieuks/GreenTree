import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

/* eslint-disable react/prop-types */
function DefaultLayout({ children }) {
  return (
    <div className=" relative grid grid-cols-6 ">
      <Header />

      <main className=" pt-[100px] col-span-6 pb-6 mx-0 md:mx-36 ">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
