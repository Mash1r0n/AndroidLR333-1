import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const VideoCard = ({ thumbnail, title, views }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.views}>{views} views</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3, // Тінь для Android
  },
  thumbnail: {
    width: 120,
    height: 80,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  views: {
    fontSize: 14,
    color: 'gray',
  },
});

export default VideoCard;
