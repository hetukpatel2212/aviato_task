import {StyleSheet} from 'react-native';
import {Fonts} from '../../Assets/Common/CommonText';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#818AF9',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  splashIcon: {
    width: '70%',
    height: '40%',
  },
  spalshTitle: {
    color: '#ffffff',
    fontSize: 30,
    fontFamily: Fonts.INTER_Medium,
    marginTop:15
  },
});

export default styles;
