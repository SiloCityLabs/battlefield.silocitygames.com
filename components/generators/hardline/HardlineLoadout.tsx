import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ClassName from "@/components/ClassName";
import SimpleGeneratorView from "@/components/generators/SimpleGeneratorView";
//Helpers
import { scrollToTop } from "@/helpers/scrollToTop";
import { fetchWeapon } from "@/helpers/fetch/fetchWeapon";
import { fetchClassName } from "@/helpers/fetch/fetchClassName";
// import { fetchAttachments } from "@/helpers/fetch/fetchAttachments";
//Utils
import { sendEvent } from "@/utils/gtag";
//json
import defaultData from "@/json/battlefield/default-generator-info.json";

const defaultItem = { name: "", type: "", game: "" };

function HardlineLoadout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(true);
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    fetchLoadoutData(setData);
    setIsGenerating(false);
    setIsLoading(false);
  }, []);

  const handleClick = async () => {
    setIsGenerating(true);

    setTimeout(() => {
      fetchLoadoutData(setData);
      setIsGenerating(false);
      scrollToTop();
    }, 1000);
  };

  const { randClassName, cycleStyle, classType, weapons, equipment } = data;

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <Container id="random-class" className="shadow-lg p-3 bg-body rounded">
        <ClassName isGenerating={isGenerating} value={randClassName} />
        <Row className="justify-content-md-center">
          <Col sm className="text-center mb-3 mb-md-0">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Cycle Style"
              value={cycleStyle}
            />
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Class"
              value={classType}
            />
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center">
          <Col sm className="text-center mb-3 mb-md-0">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Primary"
              value={
                !weapons.primary.weapon.name
                  ? "None"
                  : `${weapons.primary.weapon.name}`
              }
            />
            <br />
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Primary Attachments"
              value={
                !weapons.primary.attachments
                  ? "No Attachments"
                  : weapons.primary.attachments
              }
            />
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Secondary"
              value={
                !weapons.secondary.weapon.name
                  ? "None"
                  : `${weapons.secondary.weapon.name}`
              }
            />
            <br />
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Secondary Attachments"
              value={
                !weapons.secondary.attachments
                  ? "No Attachments"
                  : weapons.secondary.attachments
              }
            />
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Melee"
              value={
                !weapons.melee.weapon.name
                  ? "None"
                  : `${weapons.melee.weapon.name}`
              }
            />
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center mb-4">
          <Col sm className="text-center mb-3 mb-md-0">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Gadget One"
              value={equipment.gadgetOne.name}
            />
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Gadget Two"
              value={equipment.gadgetTwo.name}
            />
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Grenades/Knives"
              value={equipment.lethal.name}
            />
          </Col>
        </Row>
        <Row id="button-row">
          <Col className="text-center">
            <Button
              variant="hardline"
              disabled={isGenerating}
              onClick={isGenerating ? undefined : handleClick}
            >
              {isGenerating ? "Generating Loadout..." : "Generate Loadout"}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

async function fetchLoadoutData(setData) {
  sendEvent("button_click", {
    button_id: "hardline_fetchLoadoutData",
    label: "BattlefieldHardline",
    category: "Battlefield_Loadouts",
  });

  try {
    console.clear();
    const randClassName = fetchClassName();
    const game = "hardline";
    const cycleStyle = "Swat";
    const classType = "Operator";
    const loadoutKey = `${game}-${cycleStyle}-${classType}`.toLowerCase();

    //hardline-swat-operator
    console.log("loadoutKey", loadoutKey);

    let weapons = {
      primary: {
        weapon: fetchWeapon("primary", loadoutKey),
        attachments: "",
      },
      secondary: {
        weapon: fetchWeapon("secondary", loadoutKey),
        attachments: "",
      },
      melee: {
        weapon: fetchWeapon("melee", loadoutKey),
      },
    };

    //Get Primary Attachments
    // if (!weapons.primary.weapon?.no_attach) {
    //     weapons.primary.attachments = Object.values(fetchAttachments(weapons.primary.weapon, primAttachCount)).join(", ")
    // }

    //Get Secondary Attachments
    // if (!weapons.secondary.weapon?.no_attach) {
    //     weapons.secondary.attachments = Object.values(fetchAttachments(weapons.secondary.weapon, secAttachCount)).join(", ")
    // }

    const equipment = {
      gadgetOne: {
        name: "No Gadget",
        type: "",
      },
      gadgetTwo: {
        name: "No Gadget",
        type: "",
      },
      lethal: {
        name: "Nade",
        type: "",
      },
    };

    console.log("test", {
      ...defaultData,
      randClassName,
      cycleStyle,
      classType,
      weapons,
      equipment,
    });

    setData({
      ...defaultData,
      randClassName,
      cycleStyle,
      classType,
      weapons,
      equipment,
    });
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default HardlineLoadout;
