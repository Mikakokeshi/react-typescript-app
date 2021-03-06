import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      p="4"
      w="260px"
      h="260px"
      borderRadius="10px"
      shadow="md"
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full "
          boxSize="160px"
          alt={userName}
          m="auto"
          src={imageUrl}
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
