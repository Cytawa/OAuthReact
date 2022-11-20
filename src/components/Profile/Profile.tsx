import useAppContext from "../../hooks/useAppContext";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
  Button,
  Image,
  Text,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from "@chakra-ui/react";

export const Profile = () => {
  const context = useAppContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card>
        <CardBody>
          <Image
            src={context.currentUser?.imageUrl}
            alt={context.currentUser?.name}
            borderRadius="full"
          ></Image>
          <Stack mt="8" spacing="4">
            <Heading size="md">{context.currentUser?.name}</Heading>
            <Text size="sm">{context.currentUser?.email}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button onClick={onOpen} variant="solid" colorScheme="blue">
            Wyświetl szczegóły
          </Button>
        </CardFooter>
      </Card>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Szczegóły użytkownika
          </DrawerHeader>
          <DrawerBody>
            <Text fontSize="lg">
              <b>Email: </b>
              {context.currentUser?.email}
            </Text>
            <Text fontSize="lg">
              <b>Zweryfikowany: </b>
              {context.currentUser?.emailVerified ? "Tak" : "Nie"}
            </Text>
            <Text fontSize="lg">
              <b>Id: </b>
              {context.currentUser?.id}
            </Text>
            <Text fontSize="lg">
              <b>Nazwa: </b>
              {context.currentUser?.name}
            </Text>
            <Text fontSize="lg">
              <b>Pośrednik: </b>
              {context.currentUser?.provider}
            </Text>
            <Text fontSize="lg">
              <b>ID pośrednika: </b>
              {context.currentUser?.providerId}
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
