import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GeneratorCard from "@/components/GeneratorCard";
//json
import generatorList from "@/json/index/generator-list.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Battlefield Random Class Generators</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Your hub for all battlefield random class generators past, present and future."
        />
        <meta name="keywords" content="battlefield, battlefield 2042" />
      </Head>
      <div className="main-container">
        <Header />
        <Container className="main-content mt-3">
          <Row>
            {generatorList.map((card, index) => (
              <Col
                key={index}
                xl={3}
                lg={4}
                md={6}
                className="text-center mb-4"
              >
                <GeneratorCard
                  title={card.title}
                  text={card.text}
                  variant={card.variant}
                  buttons={card.buttons}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
