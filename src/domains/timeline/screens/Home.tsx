import {useNavigation} from '@react-navigation/native';
import {Divider, FlatList, Text} from 'native-base';

import {useTimeLine} from 'api/queries/useTimeLine';

import {FloatPencilButton} from 'components/FloatPencilButton';
import {IPostIem, PostItem} from 'components/PostItem';
import {NavigationHeader} from 'components/NavigationHeader';
import {AvatarHeader} from 'components/AvatarHeader';

export function Home() {
  const {data} = useTimeLine();
  const navigation = useNavigation();
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
        bg="brand.darkBlue"
        p="4"
        flex={1}
      />
      <FloatPencilButton onPress={() => navigation.navigate('PostForm')} />
    </>
  );
}
