# React Native Dimensions API Returning Null

This repository demonstrates a bug and its solution related to the `Dimensions` API in React Native.  The bug manifests as the `Dimensions.get('window')` or `Dimensions.get('screen')` methods consistently returning `null`, preventing proper layout rendering.

The solution involves ensuring the `Dimensions` API is accessed after the component has mounted, using `useEffect` and only accessing the dimensions after the component has properly rendered. 

## Bug
The `DimensionsBug.js` file showcases the buggy implementation. Attempting to access dimensions immediately results in `null` values.

## Solution
The `DimensionsBugSolution.js` file demonstrates a solution that correctly fetches the dimensions after the component has mounted.