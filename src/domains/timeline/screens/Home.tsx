import {useTimeLine} from 'api/queries/useTimeLine';

import {IPostIem, PostItem} from 'components/PostItem';
import {NavigationHeader} from 'domains/navigation/components/NavigationHeader';
import {AvatarHeader} from 'components/AvatarHeader';
import {FlatList} from 'react-native';
import {Stack, Text, YStack} from 'tamagui';
import {colors} from 'providers/TamaguiProvider/colors';

export function Home() {
  const {data} = useTimeLine();

  const renderItem = ({item}: {item: IPostIem}) => <PostItem {...item} />;

  return (
    <>
      <NavigationHeader headerLeft={<AvatarHeader />} headerCenter="Home" />
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Stack />}
        contentContainerStyle={{
          backgroundColor: colors.background,
          flex: 1,
        }}
        ListEmptyComponent={() => (
          <YStack alignItems="center" h="100%" flex={1}>
            <Stack m="auto">
              <Text color="$white">No data available :/</Text>
            </Stack>
          </YStack>
        )}
      />
    </>
  );
}
