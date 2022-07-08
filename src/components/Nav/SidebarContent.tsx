import {
  Box,
  CloseButton,
  Flex,
  Image,
  Link,
  useColorModeValue,
  BoxProps,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Logo from "../../assets/Gosetu_logo.png";
import { LinkItems } from "./SidebarWithHeader";
import { NavItem } from "./NavItem";

export interface SidebarProps extends BoxProps {
  onClose: () => void;
}
export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
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
