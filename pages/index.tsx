import { Container } from "layouts/Container";
import { Footer } from "modules/footer/Footer";
import { Additional } from "modules/additional/Additional";
import { Cards } from "modules/conclusion/cards/Cards";
import { Contact } from "modules/contact/Contact";
import { Education } from "modules/education/Education";
import { MainContainer } from "modules/main-container/MainContainer";
import { MainContent } from "modules/main-content/MainContent";
import { Navbar } from "modules/navbar/Navbar";
import { Portfolio } from "modules/portfolio/Portfolio";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <MainContent />
        <Additional />
        <Education />
        <Portfolio />
        <Cards />
        <Contact />
      </MainContainer>
      <Footer />
    </div>
  );
}
