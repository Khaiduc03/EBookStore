import React, {FunctionComponent} from 'react';
import {ActivityIndicator, FlatList, ScrollView, View} from 'react-native';
import {ComicItem, HeaderCustom} from '../../../../components';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import useStyles from './styles';

import {createIcon} from '../../../../utils';
import {BannerComic, TopicsHome, TrendingComic} from './components';
import {useComicHome} from './components/hook/useComicHome.hook';

const Home: FunctionComponent = () => {
  const styles = useStyles();

  const {
    dataComic,
    dataTopView,
    dataTopic,
    handleGridIconPress,
    handleListIconPress,
    handlePressSearch,
    isLoading,
    loadMoreComic,
    numCols,
    current,
    onScroll,
  } = useComicHome();

  return (
    <ScrollView
      style={styles.container}
      onScroll={e => onScroll(e.nativeEvent)}
      nestedScrollEnabled>
      {/* {current == 1 ? <OverLay /> : <View />} */}
      <HeaderCustom
        titleStyle={styles.textTitleHeader}
        onPressRightIconMiddle={handlePressSearch}
        leftIconStyle={styles.leftIconStyle}
        leftIcon={{name: 'book', type: 'font-awesome'}}
        title="ComicVerse"
        rightIconMiddle={{name: 'search', type: 'ionicon'}}
        rightIconRight={createIcon({
          name: 'notifications-outline',
          type: 'ionicon',
        })}
        onPressRightIconRight={() =>
          NavigationService.navigate(routes.NOTIFICATIONS)
        }
      />
      <BannerComic />
      <TopicsHome />
      <TrendingComic />
      <HeaderCustom
        titleStyle={styles.textTitle}
        title="New Comics"
        rightIconMiddle={{
          name: 'grid-outline',
          type: 'ionicon',
          color: numCols === 3 ? '#F89300' : '',
        }}
        rightIconRight={{
          name: 'list-circle-outline',
          type: 'ionicon',
          color: numCols === 1 ? '#F89300' : '',
        }}
        onPressRightIconMiddle={handleGridIconPress}
        onPressRightIconRight={handleListIconPress}
      />

      <FlatList
        ListFooterComponent={
          isLoading ? (
            <ActivityIndicator size={'large'} color={'#F89300'} />
          ) : (
            <View />
          )
        }
        renderItem={({item}) => (
          <ComicItem
            data={item}
            viewStyle={numCols === 1 ? styles.comicItem : undefined}
            imageStyle={numCols === 1 ? styles.imgComic : undefined}
            contentStyle={numCols === 1 ? styles.content : undefined}
            topicStyle={numCols === 1 ? styles.topicsContainer : undefined}
          />
        )}
        scrollEnabled={false}
        data={dataComic}
        scrollEventThrottle={16}
        columnWrapperStyle={
          numCols == 3 ? styles.columnStyle : {flexDirection: 'column'}
        }
        keyExtractor={item => item.uuid.toString()}
        numColumns={3}
        centerContent
        scrollToOverflowEnabled
        alwaysBounceHorizontal
        alwaysBounceVertical
        initialNumToRender={6}
        updateCellsBatchingPeriod={1000}
        maxToRenderPerBatch={6}
      />
    </ScrollView>
  );
};

export default Home;
