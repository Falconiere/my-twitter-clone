import {Avatar, Box, Row, Text} from 'native-base';

import {avatarUrl} from 'mocks/twitters';
export function SidebarHeader() {
  return (
    <Box safeAreaTop py={4}>
      <Avatar source={{uri: avatarUrl}} />
      <Text fontWeight="bold" fontSize="xl">
        Falconiere R. Barbosa
      </Text>
      <Text color="brand.lightGray" fontWeight="bold" fontSize="sm">
        @falconiererb
      </Text>
      <Row space={4} mt={2}>
        <Text fontSize="sm" fontWeight="bold">
          43{' '}
          <Text color="brand.lightGray" fontWeight="400">
            followers
          </Text>
        </Text>
        <Text fontSize="sm" fontWeight="bold">
          90{' '}
          <Text color="brand.lightGray" fontWeight="400">
            following
          </Text>
        </Text>
      </Row>
    </Box>
  );
}
