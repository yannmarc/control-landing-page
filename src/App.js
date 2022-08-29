import Banner from "./components/Banner";
import Companies from "./components/Companies";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Header/Hero";
import MenuLinks from "./components/Navbar/MenuLinks";
import Section from "./components/Section";
import ZeroFee from "./components/ZeroFee";
import images from "./constants/images";

function App() {
  return (
    <div className="App">
      <MenuLinks />
      <Hero />
      <Companies />
      <Section />
      <Features 
        img={images.imgJoana}
        imgLine={images.sLineYellow}
        uName={'Joana Halle'}
        uDetail={'Head of Customer Success'}
        textHead={'Award winning customer support.'}
        textDesc={'Our team is available to walk you through the process and help you obtain the funds you need. It doesn’t stop there, our support team chat is always available.'}
      />
      <ZeroFee />
      <Features 
        img={images.imgKianna}
        imgLine={images.sLineBlack}
        uName={'Kianna Adams'}
        uDetail={'Creative Director at Studio'}
        textHead={'Built for creative businesses'}
        textDesc={'“Control gives our team the flexibility we need to send over invoices, keep track of payees, and manage our money all in one place“.'}
        order={'2'}
        left={'0'}
        right={'4rem'}
      />

      <Banner />
      <Footer />
    </div>
  );
}

export default App;
