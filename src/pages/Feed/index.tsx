import React from 'react';
import { View, ScrollView } from 'react-native';

import Card from '../../components/Card';
import styles from './styles';

const image = {
  uri:
    'https://cdn.icon-icons.com/icons2/582/PNG/512/doctor_icon-icons.com_55045.png',
};

const Feed: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardsBody}>
        <Card
          imageProfile={image}
          name="Orn Mart"
          description="A new volunter"
          content="SAdasd"
          navigateTo="Maps"
        />

        <Card
          imageProfile={image}
          name="Orn Mart"
          description="A new volunter"
          content="SAdasd"
          navigateTo="Maps"
        />

        <Card
          imageProfile={image}
          name="Orn Mart"
          description="A new volunter"
          content="SAdasd"
          navigateTo="Maps"
        />

        <Card
          imageProfile={image}
          name="Orn Mart"
          description="A new volunter"
          content="SAdasd"
          navigateTo="Maps"
        />
        <Card
          imageProfile={image}
          name="Orn Mart"
          description="A new volunter"
          content="SAdasd"
          navigateTo="Maps"
        />
        <Card
          imageProfile={image}
          name="Orn Mart"
          description="A new volunter"
          content="SAdasd"
          navigateTo="Maps"
        />
      </View>
    </ScrollView>
  );
};

export default Feed;
