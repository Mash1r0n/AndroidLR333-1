import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const VideoDetails = ({ route, navigation }) => {
  const { videoId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video Details</Text>
      <Text>Video ID: {videoId}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});

export default VideoDetails;
