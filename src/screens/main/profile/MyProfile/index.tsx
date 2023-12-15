import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderCustom from '../../../../components/customs/HeaderCustom';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import useStyles from '../MyProfile/styles';
import {ItemFollow, ItemListMyProfile, ItemPost} from './components';
import {useUser} from './hook/useMyProfile.hook';

const MyProfile: React.FC = () => {
  const styles = useStyles();

  const {
    dataDiscover,
    dataPost,
    isLoading,
    loadMoreComic,
    onContentSizeChange,
    sizeContent,
    user,
    handlePressGoback,
    onRefresh,
    refreshing,
  } = useUser();

  return (
    <ScrollView
      onContentSizeChange={onContentSizeChange}
      nestedScrollEnabled
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onScroll={({nativeEvent}) => {
        const {contentOffset, contentSize, layoutMeasurement} = nativeEvent;
        const numberOfPixelsFromBottomThreshold = 100;
        const isNearBottom =
          contentOffset.y + layoutMeasurement.height >=
          sizeContent - numberOfPixelsFromBottomThreshold;
        console.log('sỉze scroll', contentOffset.y + layoutMeasurement.height);
        console.log('sỉze content', sizeContent);

        if (isNearBottom) {
          loadMoreComic();
        }
      }}
      style={styles.container}>
      <HeaderCustom
        title="My Profile"
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        onPressLeftIcon={handlePressGoback}
        rightIconleft={{name: 'plus-square-o', type: 'font-awesome'}}
        rightIconRight={{
          name: 'pencil',
          type: 'octicon',
        }}
        onPressRightIconLeft={() =>
          NavigationService.navigate(routes.CREATE_POST)
        }
        onPressRightIconRight={() =>
          NavigationService.navigate(routes.UPDATE_PROFILE2)
        }
      />
      <View>
        <ItemFollow />
      </View>
      <View style={styles.viewTextName}>
        <Text style={styles.nameUser}>{user.fullname}</Text>
        <View style={styles.summaryContainer}>
          <Text style={styles.textBio} numberOfLines={1}>
            {user.summary || 'I am hacker'}
          </Text>
          <TouchableOpacity
            onPress={() => NavigationService.navigate(routes.UPDATE_BIO)}>
            <Text style={styles.textEdit}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.viewExplore}>
        <Text style={styles.textDiscover}>Discover People</Text>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.DISCOVERPEOPLE)}>
          <Text style={styles.text}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingVertical: 10}}>
        <FlatList
          data={dataDiscover}
          renderItem={({item}) => <ItemListMyProfile data={item} />}
          keyExtractor={item => item.uuid}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="start"
          snapToInterval={10}
          decelerationRate={0.5}
        />
      </View>
      <View style={styles.viewMyPost}>
        <Text style={styles.textPost}>Your Post</Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          scrollEnabled={false}
          data={dataPost}
          renderItem={({item}) => <ItemPost data={item} />}
          numColumns={3}
          keyExtractor={item => item.uuid}
          showsVerticalScrollIndicator
          ListFooterComponent={
            isLoading ? (
              <ActivityIndicator color={'#F89300'} size={'large'} />
            ) : (
              <View />
            )
          }
        />
      </View>
    </ScrollView>
  );
};

export default MyProfile;
