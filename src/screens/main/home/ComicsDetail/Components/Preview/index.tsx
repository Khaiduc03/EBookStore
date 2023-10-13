import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import ReadMore from './components/ReadMore';
import {HeaderCustom} from '../../../../../../components';

const Preview = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.textHeader}>Describe:</Text>
          <Text style={styles.textDescribe}>
            Doraemon is a robotic cat that Nobita, Nobita's great-grandson, sent
            back to the past to help his ancestor improve, which means also
            improving the future circumstances of Nobita's descendants. In the
            present, Nobita is a boy who constantly fails at school and later in
            his job, pushing his family and future descendants into financial
            troubles. The stories in Doraemon often follow a common formula,
            revolving around the troubles or mishaps that occur in the life of
            Nobita, a fourth-grade student and the second main character in the
            series. Doraemon possesses a magical pocket on his belly with all
            sorts of futuristic gadgets. The most common storyline is Nobita
            returning home in distress due to the problems he faced at school or
            with his friends. After pleading or urging from the boy, Doraemon
            provides a gadget to help Nobita solve his problems, or sometimes
            just to get back at or show off to his friends. Nobita often ends up
            going too far with Doraemon's gadgets, sometimes even creating
            bigger problems than before, especially with newly introduced
            gadgets. Sometimes, Nobita's friends, usually Shizuka or Gian, steal
            the gadgets and use them for the wrong purposes. However, typically,
            at the end of each story, those who misuse the gadgets face the
            consequences of their actions, and the readers learn a moral lesson
            from it.
          </Text>
        </View>
        <HeaderCustom titleStyle={styles.textTitle} title="Read more" />
        <ReadMore />
      </ScrollView>
    </View>
  );
};

export default Preview;
