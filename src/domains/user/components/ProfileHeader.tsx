import {Dimensions} from 'react-native';
import {Avatar, Box, Button, HStack, Image, Row, Text, View} from 'native-base';

import {avatarUrl, coverImage} from 'mocks/twitters';
import {Icon} from 'components/Icon';
import {colors} from 'providers/Theme/colors';

const {width} = Dimensions.get('window');

export function ProfileHeader() {
  return (
    <View bg="background.default">
      <Image
        source={{uri: coverImage}}
        alt="cover image"
        resizeMode="cover"
        resizeMethod="auto"
        w="100%"
        h={width * 0.3}
      />
      <Box p={4} mt={-65}>
        <Row justifyContent="space-between" alignItems="flex-end">
          <Avatar
            source={{uri: avatarUrl}}
            size="xl"
            borderColor="black"
            borderWidth={2}
          />
          <Button variant="secondary">Edit Profile</Button>
        </Row>
        <Text fontWeight="bold" fontSize="xl" lineHeight="xs">
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
        <Text my={2}>
          I'm a coffee drinker, developer and musician in my free time.
        </Text>
        <Row space={6}>
          <HStack space={2}>
            <Icon
              name="birthday-cake"
              family="FontAwesome"
              color={colors.brand.lightGray}
              size={16}
            />
            <Text color="brand.lightGray">Born July 21, 1992</Text>
          </HStack>
          <HStack space={2}>
            <Icon
              name="date"
              family="Fontisto"
              color={colors.brand.lightGray}
              size={16}
            />
            <Text color="brand.lightGray">Joined April 2014</Text>
          </HStack>
        </Row>
      </Box>
    </View>
  );
}
