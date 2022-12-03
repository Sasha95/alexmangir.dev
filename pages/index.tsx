import { Additional } from "layouts/Additional";
import { Cards } from "layouts/Cards";
import { Contact } from "layouts/Contact";
import { Container } from "layouts/Container";
import { Content } from "layouts/Content";
import { Footer } from "layouts/Footer";
import { Navbar } from "layouts/Navbar";
import { Portfolio } from "layouts/Portfolio";

export default function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <Content />
        <Additional />
        <Portfolio />
        <Cards />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}
