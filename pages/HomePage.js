import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import VideoCard from '../components/VideoCard';
import Header from '../components/Header';

const videos = [
  { id: '1', title: 'Coldplay Tribute', views: '1.2M', thumbnail: 'image_url1' },
  { id: '2', title: 'The Molecular Shape of You', views: '920K', thumbnail: 'image_url2' },
];

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoCard title={item.title} views={item.views} thumbnail={item.thumbnail} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomePage;
