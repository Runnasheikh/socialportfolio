import "@/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Alex_Brush,Montserrat } from "next/font/google";
import NavcontextProvider from "./components/context/Navcontext";
export default function App({ Component, pageProps }) {
  return (

  <>
  <NavcontextProvider>

  <Header/>
  <Component {...pageProps} />;
  <Footer/>
  </NavcontextProvider>
  </>
  )
}
