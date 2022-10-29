import { Additional } from "layouts/Additional";
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
        {/* <Image
          alt="background"
          src={siteMetadata.backgroundImage}
          className={"fixed"}
          sizes="100vw"
          fill
        /> */}
        <Content />
        <Additional />
        <Portfolio />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}
