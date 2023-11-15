import {View, Text, Image, Dimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';

const ImagePost: React.FC = () => {
  const styles = useStyles();
  const [imageActive, setimageActive] = useState(0);

  const onchange = (nativeEvent: any) => {
    if (
      nativeEvent &&
      nativeEvent.contentOffset &&
      nativeEvent.layoutMeasurement
    ) {
      const slide = Math.floor(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== imageActive) {
        setimageActive(slide);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={({nativeEvent}) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.scrollView}>
        {image.map((e, index) => (
          <Image
            key={e}
            resizeMode="stretch"
            style={styles.image}
            source={{uri: e}}
          />
        ))}
      </ScrollView>
      <View style={styles.wrapDot}>
        {image.map((e, index) => (
          <Text
            key={e}
            style={imageActive === index ? styles.dotActive : styles.dot}>
            ●
          </Text>
        ))}
      </View>
    </View>
  );
};

export default ImagePost;

const image = [
  'https://media.istockphoto.com/id/1465749930/vi/anh/b%E1%BB%A5c-%C4%91%E1%BA%BFm-%C4%91%C6%B0%E1%BB%9Dng-cong-xi-m%C4%83ng-m%C3%A0u-be-tr%E1%BB%91ng-v%E1%BB%9Bi-k%E1%BA%BFt-c%E1%BA%A5u-%C3%A1nh-s%C3%A1ng-m%E1%BA%B7t-tr%E1%BB%9Di-l%E1%BA%A5p-l%C3%A1nh-%C4%91%E1%BA%B9p-m%E1%BA%AFt-b%C3%B3ng-l%C3%A1.jpg?s=1024x1024&w=is&k=20&c=Zatsv8qCewj9kSWT2YpmbCkf5TDWthAZHLhiHfOzFiU=',
  'https://media.istockphoto.com/id/1442960535/vi/anh/c%C3%B4ng-tr%C3%ACnh-xanh-b%E1%BB%81n-v%E1%BB%AFng-t%C3%B2a-nh%C3%A0-th%C3%A2n-thi%E1%BB%87n-v%E1%BB%9Bi-m%C3%B4i-tr%C6%B0%E1%BB%9Dng-trong-th%C3%A0nh-ph%E1%BB%91-hi%E1%BB%87n-%C4%91%E1%BA%A1i-t%C3%B2a-nh%C3%A0-v%C4%83n.jpg?s=1024x1024&w=is&k=20&c=ft8SFxkCJIYcju92YUX9EkNLYRhe3CagfWrvAkKt3IM=',
  'https://media.istockphoto.com/id/1419410282/vi/anh/khu-r%E1%BB%ABng-y%C3%AAn-t%C4%A9nh-v%C3%A0o-m%C3%B9a-xu%C3%A2n-v%E1%BB%9Bi-nh%E1%BB%AFng-tia-n%E1%BA%AFng-m%E1%BA%B7t-tr%E1%BB%9Di-tuy%E1%BB%87t-%C4%91%E1%BA%B9p.jpg?s=1024x1024&w=is&k=20&c=pEiyT1qoCFUAk1_9NkuGweIt3LPCgbatYHDEETbXXLI=',
];
