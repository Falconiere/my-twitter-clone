import {useTimeLine} from 'api/queries/useTimeLine';
import {IPostIem, PostItem} from 'components/PostItem';
import {Box, Divider, FlatList, Text, View} from 'native-base';

export function Posts() {
  const {data} = useTimeLine({enabled: false});
  const renderItem = ({item}: {item: IPostIem}) => <PostItem {...item} />;
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <Divider />}
      _contentContainerStyle={{flex: 1}}
      ListEmptyComponent={() => (
        <View alignItems="center" justifyItems="center" h="100%" flex={1}>
          <Box m="auto">
            <Text>No data available :/</Text>
          </Box>
        </View>
      )}
    />
  );
}
