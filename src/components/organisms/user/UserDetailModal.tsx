import {
  Center,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={4}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>User　Name</FormLabel>
              <Input value="mika" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>FULL Name</FormLabel>
              <Input value="mikako iijima" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>EMAIL</FormLabel>
              <Input value="test@gmail.com" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value="03-1111-1111" isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
