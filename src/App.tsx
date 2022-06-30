import {
  ChevronDownIcon,
  CloseIcon,
  HamburgerIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

function NavBar() {
  const [isOPen, setIsOpen] = React.useState(true);
  return (
    <>
      <Button
        as={"button"}
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
        // w="calc(100vw)"
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
