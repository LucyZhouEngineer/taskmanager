import { ImageBackground } from 'react-native';
import { commonStyles } from '../styles/common';
import { Slot } from 'expo-router';
import { TaskProvider } from '../contexts/TaskContext';

export default function Layout() {
  return (
    <ImageBackground 
      source={require('../../assets/bg_ima.jpg')}
      style={commonStyles.backgroundImage}
    >
      <TaskProvider>
        <Slot />
      </TaskProvider>
    </ImageBackground>
  );
} 