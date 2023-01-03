import { Additional } from "layouts/Additional";
import { Cards } from "layouts/Cards";
import { Contact } from "layouts/Contact";
import { Container } from "layouts/Container";
import { Content } from "layouts/Content";
import { Footer } from "layouts/Footer";
import { Portfolio } from "layouts/Portfolio";
import { Education } from "modules/education/Education";
import { MainContainer } from "modules/main-container/MainContainer";
import { Navbar } from "modules/navbar/Navbar";

export default function Home() {
  return (
    <>
      <MainContainer>
        <Navbar />
        {/* <Content />
        <Additional />
        <Education />
        <Portfolio />
        <Cards />
        <Contact /> */}
      </MainContainer>
      <Footer />
    </>
  );
}
