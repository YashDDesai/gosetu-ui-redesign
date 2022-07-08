import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";

import { MobileNav } from "./MobileNav";
import { SidebarContent } from "./SidebarContent";

interface LinkItemProps {
  name: string;
  to: string;
}
export const LinkItems: Array<LinkItemProps> = [
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
