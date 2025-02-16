import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [windowDimensions, setWindowDimensions] = useState(null);

  useEffect(() => {
    const getDimensions = () => {
      setWindowDimensions(Dimensions.get('window'));
    };

    getDimensions();
  }, []);

  if (windowDimensions === null) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <View>
      <Text>Window Width: {windowDimensions.width}</Text>
      <Text>Window Height: {windowDimensions.height}</Text>
    </View>
  );
};

export default DimensionsBugSolution;