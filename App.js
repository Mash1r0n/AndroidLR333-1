import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import VideoDetailPage from './pages/VideoDetailPage';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Library" component={LibraryPage} />
        <Tab.Screen name="Details" component={VideoDetailPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
