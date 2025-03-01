import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import HardlineLoadout from "@/components/generators/hardline/HardlineLoadout";

export default function BattlefieldHardlineGenerator() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Loadout Info", href: "/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Battlefield Hardline Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your Battlefield Hardline gameplay! Generate unique random loadouts for Battlefield Hardline. Discover new weapons, gadgets, grenades, and melee combinations."
        />
        <meta
          name="keywords"
          content="battlefield hardline, random class generator, rcg, multiplayer, battlefield hardline random class generator"
        />
      </Head>
      <Header showBadge={true} className="hardline" navLinks={navLinks} />
      <Container fluid>
        <Row>
          <Col>
            <h2 className="text-center mt-3">
              Battlefield Hardline
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Random Class Generator
            </h2>

            <HardlineLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
