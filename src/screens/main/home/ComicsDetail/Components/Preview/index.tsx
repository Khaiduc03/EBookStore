import React from 'react';
import {Text, View} from 'react-native';
import {HeaderCustom} from '../../../../../../components';
import {ComicType} from '../../../../../../redux';
import ReadMore from './components/ReadMore';
import useStyles from './styles';
import RatingComic from './components/Rating';

interface Comic {
  data: ComicType;
}

const Preview: React.FC<Comic> = props => {
  const styles = useStyles();

  // const dataComicDetail = useAppSelector(getDetailComic);
  // const data = dataComicDetail ? dataComicDetail[0] : null;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textHeader}>Describe:</Text>
        <Text style={styles.textDescribe}>{props.data.description}</Text>
      </View>
      <View>
        <RatingComic/>
        <HeaderCustom titleStyle={styles.textTitle} title="Read more" />
        <ReadMore />
      </View>
    </View>
  );
};

export default Preview;
