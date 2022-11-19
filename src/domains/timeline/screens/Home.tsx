import {Avatar, Divider, FlatList} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {useTimeLine} from 'api/queries/useTimeLine';

import {avatarUrl} from 'mocks/twitters';

import {FloatPencilButton} from 'components/FloatPencilButton';
import {IPostIem, PostItem} from 'components/PostItem';

import {NavigationHeader} from 'components/NavigationHeader';

export function Home() {
  const {data} = useTimeLine();
  const navigation = useNavigation();
  const renderItem = ({item}: {item: IPostIem}) => <PostItem {...item} />;

  return (
    <>
      <NavigationHeader
        safeAreaTop
        headerLeft={<Avatar source={{uri: avatarUrl}} size="xs" />}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Divider bg="brand.gray" />}
        bg="brand.darkBlue"
        px="4"
        flex={1}
      />
      <FloatPencilButton onPress={() => navigation.navigate('PostForm')} />
    </>
  );
}
