import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import useStyles from './styles';
import {Dimensions} from 'react-native';
import {Pressable} from 'react-native';
import {Icon} from '@rneui/themed';
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface PostContentProps {
  content: string;
  images: string[];
  onImagePress: (index: number) => void;
  onClosePress: () => void;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  selectedImage: any;
}

const PostContent: React.FC<PostContentProps> = ({
  content,
  images,
  onImagePress,
  onClosePress,
  showModal,
  setShowModal,
  selectedImage,
}) => {
  const styles = useStyles();

  const scale = useSharedValue(1);
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);

  const pinchHandler = useAnimatedGestureHandler({
    onActive: event => {
      scale.value = event.scale < 1 ? 1 : event.scale;
      translationX.value = withSpring(0);
      translationY.value = withSpring(0);
    },
    onEnd: () => {
      scale.value = withSpring(scale.value);
    },
  });

  const tapHandler = useAnimatedGestureHandler({
    onActive: event => {
      scale.value = withSpring(1);
    },
  });

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const [imageHeights, setImageHeights] = useState<number[]>([]);

  useEffect(() => {
    const promises = images?.map(image => {
      return new Promise<number>((resolve, reject) => {
        if (image) {
          Image.getSize(
            image,
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

    if (promises) {
      Promise.all(promises).then(setImageHeights);
    }
  }, [images]);

  return (
    <View>
      <View style={styles.description}>
        {content && <Text style={styles.textDescription}>{content}</Text>}
      </View>

      <FlatList
        data={images}
        renderItem={({item, index}) => (
          <View>
            {item && (
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
                  width: screenWidth,
                  height: screenHeight / 1.8,
                }}>
                <Pressable onPress={() => onImagePress(index)}>
                  {item && (
                    <Image
                      source={{uri: item}}
                      style={{height: imageHeights[index]}}
                    />
                  )}
                  {images && (
                    <View style={styles.viewImagesLength}>
                      <Text style={styles.textImagesLength}>
                        {images ? index + 1 : 0}/{images.length}
                      </Text>
                    </View>
                  )}
                </Pressable>
                <Modal
                  visible={showModal}
                  transparent={true}
                  onRequestClose={onClosePress}>
                  <TouchableOpacity
                    style={styles.viewIconClose}
                    onPress={onClosePress}>
                    <Icon
                      name="close-circle"
                      size={30}
                      color={styles.colorIconClose.color}
                      type="ionicon"
                      style={styles.iconClose}
                    />
                  </TouchableOpacity>

                  <View style={styles.viewModalImage}>
                    <GestureHandlerRootView>
                      <PinchGestureHandler onGestureEvent={pinchHandler}>
                        <Animated.View style={{transform: [{scale: scale}]}}>
                          <TapGestureHandler
                            numberOfTaps={2}
                            onGestureEvent={tapHandler}>
                            <Animated.View>
                              <AutoHeightImage
                                key={selectedImage}
                                source={{
                                  uri: selectedImage,
                                }}
                                width={screenWidth}
                              />
                            </Animated.View>
                          </TapGestureHandler>
                        </Animated.View>
                      </PinchGestureHandler>
                    </GestureHandlerRootView>
                  </View>
                </Modal>
              </View>
            )}
          </View>
        )}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PostContent;
