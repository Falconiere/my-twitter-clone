import {Avatar, Box, Row, Text} from 'native-base';

import {avatarUrl} from 'mocks/twitters';
export function SidebarHeader() {
  return (
    <Box safeAreaTop py={4}>
      <Avatar source={{uri: avatarUrl}} />
      <Text color="white" fontWeight="bold">
        Falconiere R. Barbosa
      </Text>
      <Text color="brand.lightGray" fontWeight="bold" fontSize="xs">
        @falconiererb
      </Text>
      <Row space={2} mt={2}>
        <Text color="white" fontWeight="bold" fontSize="xs">
          43 <Text color="brand.lightGray">followers</Text>
        </Text>
        <Text color="white" fontWeight="bold" fontSize="xs">
          90 <Text color="brand.lightGray">following</Text>
        </Text>
      </Row>
    </Box>
  );
}
