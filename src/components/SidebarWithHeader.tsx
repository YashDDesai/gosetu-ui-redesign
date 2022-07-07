import {
  Avatar,
  Box,
  BoxProps,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  Hide,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";

import { IconType } from "react-icons";
import { Link as ReactRouterLink } from "react-router-dom";
import Logo from "../assets/Gosetu_logo.png";

interface LinkItemProps {
  name: string;
  to: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", to: "/" },
  { name: "Machines", to: "/machines" },
  { name: "Groups", to: "/groups" },
  { name: "Reports", to: "/reports" },
  { name: "Settings", to: "/settings" },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      {/* <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      /> */}

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={true}
        onOverlayClick={onClose}
        closeOnOverlayClick={true}
        closeOnEsc={true}
        // size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 0 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w="full"
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box bg="black" padding={3} borderRadius={6} onClick={onClose}>
          <Link as={ReactRouterLink} to="/">
            <Image src={Logo} w={24} alt="logo" />
          </Link>
        </Box>
        {/* <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text> */}
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <ReactRouterLink to={link.to}>
          <NavItem key={link.name} icon={() => <></>} onClick={onClose}>
            {link.name}
          </NavItem>
        </ReactRouterLink>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: string | number;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
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
