import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import FBCollage from 'react-native-fb-collage';
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import useStyles from './styles';

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
    onActive: (event: any) => {
      scale.value = event.scale < 1 ? 1 : event.scale;
      translationX.value = withSpring(0);
      translationY.value = withSpring(0);
    },
    onEnd: () => {
      scale.value = withSpring(scale.value);
    },
  });

  const tapHandler = useAnimatedGestureHandler({
    onActive: (event: any) => {
      console.log('Double tap detected!');
      scale.value = withSpring(1);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View>
      <View style={styles.description}>
        {content && <Text style={styles.textDescription}>{content}</Text>}
      </View>
      <View>
        <FlatList
          data={images}
          renderItem={({item, index}) => (
            <View>
              {item && (
                <>
                  <FBCollage
                    key={index}
                    images={[{uri: item}] as any}
                    borderRadius={6}
                    imageOnPress={() => onImagePress(index)}
                    style={{
                      flex: 1,
                      width: screenWidth,
                      height: screenHeight / 2,
                    }}
                  />
                </>
              )}

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
                      <Animated.View style={animatedStyle}>
                        <TapGestureHandler
                          numberOfTaps={2}
                          onGestureEvent={tapHandler}>
                          <Animated.View>
                            <FastImage
                              source={{
                                uri: selectedImage,
                                priority: FastImage.priority.normal,
                              }}
                              style={{
                                width: screenWidth,
                                height: screenHeight,
                              }}
                              resizeMode={FastImage.resizeMode.contain}
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
          onMomentumScrollEnd={ev => {
            const newIndex = Math.floor(
              ev.nativeEvent.contentOffset.x / screenWidth,
            );
            setCurrentIndex(newIndex);
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        {images.length > 1 && (
          <View style={styles.viewImagesLength}>
            <Text style={styles.textImagesLength}>
              {images ? currentIndex + 1 : 0}/{images.length}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default PostContent;
