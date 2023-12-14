import {Icon} from '@rneui/themed';
import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {ItemList} from './components';
import useStyles from './styles';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {UserAction} from '../../../../redux/reducer/user.reducer';
import {
  getAllUser,
  getListUserRandom,
} from '../../../../redux/selectors/user.selector';
import {UserType} from '../../../../redux/types/user.type';

interface ListItem {
  id: string;
  avatarDummy: boolean;
  name: string;
  title: string;
  button: boolean;
  textButton: string;
  deleteUser: boolean;
}

const DiscoverPeople: React.FC = () => {
  const styles = useStyles();
  const dataRandom = useAppSelector(getListUserRandom);
  const dispatch = useAppDispatch();

  const dataUser = useAppSelector(getAllUser);

  const handleGoback = () => {
    NavigationService.goBack();
  };

  const onRefresh = React.useCallback(() => {
    dispatch(UserAction.getUserRandom());
  }, []);

  const renderItem = ({item}: {item: UserType}) => <ItemList data={item} />;

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Discover People"
        onPressLeftIcon={handleGoback}
      />
      <View style={styles.viewRefesh}>
        <Text style={styles.test}>Refresh list</Text>
        <Icon name="reload-outline" type="ionicon" onPress={onRefresh} />
      </View>
      <View style={styles.suggestions}>
        <Text style={styles.testContent}>Top Suggestions</Text>
      </View>
      <View style={{alignItems: 'center', flex: 1}}>
        <FlatList
          data={dataRandom}
          renderItem={renderItem}
          keyExtractor={item => item.uuid}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          columnWrapperStyle={{gap: 10, paddingVertical: 10}}
        />
      </View>
    </View>
  );
};

export default DiscoverPeople;
