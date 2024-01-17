import {StyleSheet} from 'react-native';

const primary = '#2B98F0';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fcff',
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: primary,
  },
  heading: {
    fontSize: 12,
    fontWeight: '600',
    color: '#c5c5c5',
    marginTop: 20,
  },
  floatIcon: {
    position: 'absolute',
    right: 20,
    bottom: 100,
  },
  addIcon: {
    height: 40,
    width: 40,
  },

  // item container
  itemContainer: {
    height: 50,
    width: '100%',
    borderRadius: 15,
    backgroundColor: 'white',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.08,
    shadowRadius: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 16,
    color: primary,
  },
  completedItemText: {
    textDecorationLine: 'line-through',
    color: '#badad4',
  },
  icon: {
    height: 20,
    width: 20,
    marginHorizontal: 20,
  },
  completeIcon: {
    tintColor: '#00b894',
  },
  notCompleteIcon: {
    opacity: 0.45,
  },
  binIconContainer: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  binIcon: {
    tintColor: '#F05492',
    height: 18,
    width: 19,
  },
});

export default styles;
