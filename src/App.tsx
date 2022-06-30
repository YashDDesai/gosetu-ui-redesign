import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import React from "react";

function NavBar() {
  const [isOPen, setIsOpen] = React.useState(true);
  return (
    <>
      <Button
        as="button"
        rounded={"none"}
        bgColor="transparent"
        _hover={{
          bgColor: "transparent",
          color: "black",
          fontWeight: "600",
          scale: "0.75",
        }}
        _active={{ bgColor: "transparent" }}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        cursor="pointer"
        position={"absolute"}
        top={0}
        left={0}
        zIndex={999}
      >
        {isOPen ? <CloseIcon fontSize={12} /> : <HamburgerIcon />}
      </Button>
      <Box
        shadow={"2xl"}
        h="calc(100vh)"
        zIndex={998}
        position={"absolute"}
        left={0}
        display={isOPen ? "block" : "none"}
      >
        <Box w={"xs"} mt="16">
          Gosetu Logo...
        </Box>
      </Box>
    </>
  );
}
function App() {
  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
