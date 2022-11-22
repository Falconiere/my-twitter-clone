import {Box, Text} from 'native-base';
import {NavigationHeader} from 'domains/navigation/components/NavigationHeader';

import {ProfileHeader} from '../components/ProfileHeader';
import {Tabs} from 'components/Tabs';
import {Posts} from '../containers/Posts';
import {FloatPencilButton} from 'components/FloatPencilButton';

const tabItems = [
  {
    title: 'Posts',
    Component: Posts,
  },
  {
    title: 'Posts & Replies',
    Component: Posts,
  },
  {
    title: 'Media',
    Component: Posts,
  },
  {
    title: 'Likes',
    Component: Posts,
  },
];

export function Profile() {
  return (
    <>
      <NavigationHeader
        headerCenter={
          <Box>
            <Text fontWeight="bold">Falconiere R. Barbosa</Text>
            <Text color="brand.lightGray">1,278 Likes</Text>
          </Box>
        }
      />
      <ProfileHeader />
      <Tabs items={tabItems} />
      <FloatPencilButton />
    </>
  );
}
