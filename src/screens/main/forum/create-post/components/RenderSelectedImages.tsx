import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  View,
  FlatList,
  ImageBackground,
  Image,
  Text,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Asset} from 'react-native-image-picker';
import useStyles from '../styles';
import FBCollage from 'react-native-fb-collage';

interface SelectedImagesProps {
  images: Asset[];
}

const SelectedImages: React.FC<SelectedImagesProps> = props => {
  const styles = useStyles();

  const screenWidth = Dimensions.get('window').width;

  return (
    <FlatList
      data={props.images}
      keyExtractor={(item, index) => item.uri || index.toString()}
      renderItem={({item, index}) => {
        if (!item.uri) {
          return <View />;
        }
        return (
          <View>
            {item && (
              <>
                <FBCollage
                  images={[{uri: item.uri}] as any}
                  style={{
                    flex: 1,
                    width: screenWidth,
                    height: screenWidth,
                  }}
                  borderRadius={6}
                />
                {props.images && (
                  <View style={styles.viewImagesLength}>
                    <Text style={styles.textImagesLength}>
                      {props.images ? index + 1 : 0}/{props.images.length}
                    </Text>
                  </View>
                )}
              </>
            )}
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
