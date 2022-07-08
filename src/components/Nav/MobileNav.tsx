import {
  Avatar,
  Box,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { Link as ReactRouterLink } from "react-router-dom";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Box>
      <Flex
        // ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={{ base: "space-between" }}
        {...rest}
      >
        <IconButton
          display={{ base: "flex" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
        <HStack py={1}>
          <Stat bg="gray.400" p={2} w={{ base: 20, md: 120 }} borderRadius={4}>
            <StatLabel textAlign={"center"} fontSize={{ base: 8, md: 12 }}>
              No Power
            </StatLabel>
            <StatNumber textAlign={"center"} fontSize={{ base: 9, md: 14 }}>
              13
            </StatNumber>
            {/* <StatHelpText>Feb 12 - Feb 28</StatHelpText> */}
          </Stat>
          <Stat bg="red.400" p={2} w={{ base: 20, md: 120 }} borderRadius={4}>
            <StatLabel textAlign={"center"} fontSize={{ base: 8, md: 12 }}>
              Filler Stop
            </StatLabel>
            <StatNumber textAlign={"center"} fontSize={{ base: 9, md: 14 }}>
              2
            </StatNumber>
            {/* <StatHelpText>Feb 12 - Feb 28</StatHelpText> */}
          </Stat>
          <Stat bg="blue.400" p={2} w={{ base: 20, md: 120 }} borderRadius={4}>
            <StatLabel textAlign={"center"} fontSize={{ base: 8, md: 12 }}>
              Manual Stop
            </StatLabel>
            <StatNumber textAlign={"center"} fontSize={{ base: 9, md: 14 }}>
              2
            </StatNumber>
            {/* <StatHelpText>Feb 12 - Feb 28</StatHelpText> */}
          </Stat>
          <Stat bg="green.400" p={2} w={{ base: 20, md: 120 }} borderRadius={4}>
            <StatLabel textAlign={"center"} fontSize={{ base: 8, md: 12 }}>
              Manual Stop
            </StatLabel>
            <StatNumber textAlign={"center"} fontSize={{ base: 9, md: 14 }}>
              2
            </StatNumber>
            {/* <StatHelpText>Feb 12 - Feb 28</StatHelpText> */}
          </Stat>
          <Stat
            bg="orange.400"
            p={2}
            w={{ base: 20, md: 120 }}
            borderRadius={4}
          >
            <StatLabel textAlign={"center"} fontSize={{ base: 8, md: 12 }}>
              Manual Stop
            </StatLabel>
            <StatNumber textAlign={"center"} fontSize={{ base: 9, md: 14 }}>
              2
            </StatNumber>
            {/* <StatHelpText>Feb 12 - Feb 28</StatHelpText> */}
          </Stat>
        </HStack>
        {/* <Hide above="sm">
              <Box bg="black" padding={3} borderRadius={6}>
                <Link as={ReactRouterLink} to="/">
                  <Image src={Logo} w={24} alt="logo" />
                </Link>
              </Box>
            </Hide> */}

        <HStack spacing={{ base: "0", md: "6" }}>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar name="Yash Desai" size={"sm"} src="#" />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Yash Desai</Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                <ReactRouterLink to="/profile">
                  <MenuItem>Profile</MenuItem>
                </ReactRouterLink>
                <ReactRouterLink to="/settings">
                  <MenuItem>Settings</MenuItem>
                </ReactRouterLink>
                <MenuDivider />
                <MenuItem onClick={() => alert("logged out")}>
                  Sign out
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
};
