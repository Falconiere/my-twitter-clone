import {Divider, Pressable, Row, Text, View} from 'native-base';
import {useMemo, useState} from 'react';

type Props = {
  items: Array<{
    title: string;
    Component: () => JSX.Element;
  }>;
};

export function Tabs(props: Props) {
  const {items} = props;

  const [currentItem, setCurrentItem] = useState(0);

  const CurrentView = useMemo(
    () => items[currentItem].Component,
    [items, currentItem],
  );

  return (
    <>
      <Row
        w="100%"
        justifyContent="space-between"
        px={4}
        bg="background.default">
        {items.map(({title}, idx) => (
          <Pressable
            onPress={() => setCurrentItem(idx)}
            key={`tab-${idx}`}
            p={2}
            borderBottomWidth={3}
            borderBottomColor={currentItem === idx ? 'primary' : 'transparent'}>
            <Text
              textAlign="center"
              fontWeight={currentItem === idx ? 'bold' : 'medium'}
              color={currentItem === idx ? 'white' : 'brand.lightGray'}>
              {title}
            </Text>
          </Pressable>
        ))}
      </Row>
      <Divider />
      <View bg="background.default" flex={1}>
        <CurrentView />
      </View>
    </>
  );
}
