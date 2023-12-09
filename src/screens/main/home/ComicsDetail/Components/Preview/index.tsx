import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {HeaderCustom} from '../../../../../../components';
import {ComicType} from '../../../../../../redux';
import ReadMore from './components/ReadMore';
import useStyles from './styles';
import RatingComic from './components/Rating';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';

interface Comic {
  data: ComicType;
}

const Preview: React.FC<Comic> = props => {
  const styles = useStyles();

  return (
    <ScrollView nestedScrollEnabled>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.textHeader}>Describe:</Text>
          <Text style={styles.textDescribe}>{props.data.description}</Text>
        </View>

        <View>
          <HeaderCustom
            titleStyle={styles.textTitle}
            title="Rating & Reviews"
            rightIconRight={{name: 'arrow-right', type: 'font-awesome-5'}}
            onPressRightIconRight={() =>
              NavigationService.navigate(routes.RATINGCOMICSCREEN, {
                uuid: props.data.comic_uuid || props.data.uuid,
              })
            }
          />
          <RatingComic />
          <HeaderCustom titleStyle={styles.textTitle} title="Read more" />
          <ReadMore />
        </View>
      </View>
    </ScrollView>
  );
};

export default Preview;
