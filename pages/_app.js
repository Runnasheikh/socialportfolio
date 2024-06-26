import "@/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Alex_Brush, Montserrat } from "next/font/google";
import NavcontextProvider from "./components/context/Navcontext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavcontextProvider>
        <Header />
        <Component {...pageProps} />;
        <Footer />
      </NavcontextProvider>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a
        href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
        class="float"
        target="_blank"
      >
        <i class="fa fa-whatsapp my-float"></i>
      </a>
</>
);
}