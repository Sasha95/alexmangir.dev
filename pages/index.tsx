import { Container } from "layouts/Container";
import { Footer } from "layouts/Footer";
import { Portfolio } from "layouts/Portfolio";
import { Additional } from "modules/additional/Additional";
import { Cards } from "modules/conclusion/cards/Cards";
import { Contact } from "modules/contact/Contact";
import { Education } from "modules/education/Education";
import { MainContainer } from "modules/main-container/MainContainer";
import { MainContent } from "modules/main-content/MainContent";
import { Navbar } from "modules/navbar/Navbar";

export default function Home() {
  return (
    <>
      <MainContainer>
        <Navbar />
        <MainContent />
        <Additional />
        <Education />
        {/* <Portfolio /> */}
        <Cards />
        <Contact />
      </MainContainer>
      <Footer />
    </>
  );
}
