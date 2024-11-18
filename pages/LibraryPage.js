import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';

const playlists = [
  { id: '1', name: 'Favorites' },
  { id: '2', name: 'Watch Later' },
];

const LibraryPage = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.playlist}>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  playlist: {
    fontSize: 18,
    padding: 8,
  },
});

export default LibraryPage;

