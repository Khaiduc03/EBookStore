import React, {useEffect, useState} from 'react';
import {Dimensions, View, FlatList, ImageBackground, Image} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Asset} from 'react-native-image-picker';
import useStyles from '../styles';

interface SelectedImagesProps {
  images: Asset[];
}

const SelectedImages: React.FC<SelectedImagesProps> = props => {
  const styles = useStyles();

  const screenWidth = Dimensions.get('window').width;

  const [imageHeights, setImageHeights] = useState<number[]>([]);

  useEffect(() => {
    const promises = props.images.map(image => {
      return new Promise<number>((resolve, reject) => {
        if (image.uri) {
          Image.getSize(
            image.uri,
            (width, height) => {
              const imgHeight = (screenWidth * height) / width;
              resolve(imgHeight);
            },
            reject,
          );
        } else {
          resolve(0);
        }
      });
    });

    Promise.all(promises).then(setImageHeights);
  }, [props.images]);

  return (
    <FlatList
      data={props.images}
      keyExtractor={(item, index) => item.uri || index.toString()}
      renderItem={({item, index}) => {
        if (!item.uri) {
          return <View />;
        }
        return (
          <View
            onLayout={event => {
              const {height} = event.nativeEvent.layout;
              setImageHeights(prevHeights => {
                const newHeights = [...prevHeights];
                newHeights[index] = height;
                return newHeights;
              });
            }}
            style={{
              flex: 1,
              width: screenWidth,
            }}>
            <AutoHeightImage
              source={{uri: item.uri}}
              width={screenWidth}
              height={imageHeights[index]}
              style={{flex: 1}}
            />
          </View>
        );
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
    />
  );
};

export default SelectedImages;
