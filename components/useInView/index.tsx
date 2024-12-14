import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

const App = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const viewRef = useRef<View | null>(null);

  // Handle scroll event to check visibility
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    if (viewRef.current) {
      viewRef.current.measure((x, y, width, height, pageX, pageY) => {
        const screenHeight = Dimensions.get('window').height;
        const elementBottom = pageY + height;

        // Check if the element is visible in the screen
        if (pageY >= 0 && elementBottom <= screenHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }
  };

  return (
    <ScrollView
      onScroll={handleScroll}
      style={styles.scrollView}
    >
      <View style={styles.placeholder}>
        <Text>Scroll down to find the target view</Text>
      </View>
      <View
        ref={viewRef}
        style={[styles.targetView, isVisible ? styles.visible : styles.invisible]}
      >
        <Text>Am I visible? {isVisible ? 'Yes!' : 'No!'}</Text>
      </View>
      <View style={styles.placeholder}>
        <Text>Keep scrolling...</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  placeholder: {
    height: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  targetView: {
    height: 200,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  visible: {
    borderColor: 'green',
    borderWidth: 4,
  },
  invisible: {
    borderColor: 'red',
    borderWidth: 4,
  },
});

export default App;
