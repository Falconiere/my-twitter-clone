import {Avatar, Box, Row, Text} from 'native-base';

import {avatarUrl} from 'mocks/twitters';
export function SidebarHeader() {
  return (
    <Box safeAreaTop py={4}>
      <Avatar source={{uri: avatarUrl}} />
      <Text color="white" fontWeight="bold" fontSize="xl">
        Falconiere R. Barbosa
      </Text>
      <Text color="brand.lightGray" fontWeight="bold" fontSize="sm">
        @falconiererb
      </Text>
      <Row space={4} mt={2}>
        <Text color="white" fontWeight="bold" fontSize="sm">
          43 <Text color="brand.lightGray">followers</Text>
        </Text>
        <Text color="white" fontWeight="bold" fontSize="sm">
          90 <Text color="brand.lightGray">following</Text>
        </Text>
      </Row>
    </Box>
  );
}
