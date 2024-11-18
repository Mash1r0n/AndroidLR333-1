import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import VideoItem from '../components/VideoItem';

const videos = [
  { id: '1', title: 'React Native Tutorial' },
  { id: '2', title: 'Flexbox Guide' },
  { id: '3', title: 'Navigation in React Native' },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={({ item }) => (
          <VideoItem
            title={item.title}
            onPress={() => navigation.navigate('VideoDetails', { videoId: item.id })}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

export default Home;
