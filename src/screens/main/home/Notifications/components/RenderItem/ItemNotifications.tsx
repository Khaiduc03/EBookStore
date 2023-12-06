import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import useStyles from '../../styles';
import {ItemProps, data} from '../../types';

const ItemNotifications: React.FC = () => {
  const styles = useStyles();

  const NotificationsItem = (itemProps: ItemProps) => (
    <TouchableOpacity style={styles.viewItem}>
      <View style={[styles.viewRowCenter, styles.marginTimeDate]}>
        <View
          style={[
            styles.viewIcon,
            {backgroundColor: itemProps.backgroundColor},
          ]}>
          <Icon
            name={itemProps.nameIcon}
            color={itemProps.colorIcon}
            type="ionicon"
            size={24}
          />
        </View>
        <View style={styles.marginTitle}>
          <View>
            <Text style={styles.textTitle}>{itemProps.title}</Text>
          </View>
          <View style={styles.viewRowCenter}>
            <View style={styles.viewText}>
              <Text style={styles.text}>{itemProps.time}</Text>
            </View>

            <View style={styles.view} />

            <View style={styles.viewText}>
              <Text style={styles.text}>{itemProps.date}</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.textDescription}>{itemProps.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem => (
        <NotificationsItem
          title={renderItem.item.title}
          time={renderItem.item.time}
          date={renderItem.item.date}
          description={renderItem.item.description}
          nameIcon={renderItem.item.nameIcon}
          colorIcon={renderItem.item.colorIcon}
          backgroundColor={renderItem.item.backgroundColor}
        />
      )}
    />
  );
};

export default ItemNotifications;
