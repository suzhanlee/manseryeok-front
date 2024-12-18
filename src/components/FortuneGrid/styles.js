import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 30,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  gridItem: {
    width: 80,
    height: 80,
    backgroundColor: '#ffd7b5',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinkItem: {
    backgroundColor: '#ffb5b5',
  },
  greenItem: {
    backgroundColor: '#b5ffb5',
  },
  charText: {
    fontSize: 24,
  }
});