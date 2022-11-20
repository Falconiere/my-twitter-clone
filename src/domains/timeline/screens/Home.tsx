import {Box, Divider, FlatList, Text, View} from 'native-base';

import {useTimeLine} from 'api/queries/useTimeLine';

import {IPostIem, PostItem} from 'components/PostItem';
import {NavigationHeader} from 'components/NavigationHeader';
import {AvatarHeader} from 'components/AvatarHeader';

export function Home() {
  const {data} = useTimeLine();

  const renderItem = ({item}: {item: IPostIem}) => <PostItem {...item} />;

  return (
    <>
      <NavigationHeader
        safeAreaTop
        headerLeft={<AvatarHeader />}
        headerCenter={
          <Text color="white" fontWeight="bold">
            Home
          </Text>
        }
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Divider bg="brand.gray" />}
        ListEmptyComponent={() => (
          <View alignItems="center" justifyItems="center" h="100%" flex={1}>
            <Box m="auto">
              <Text color="white">No data available :/</Text>
            </Box>
          </View>
        )}
        bg="brand.darkBlue"
        p="4"
        contentContainerStyle={{flex: 1}}
      />
    </>
  );
}
