import {StyleSheet} from 'react-native';
import {Fonts} from '../../Assets/Common/CommonText';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,

    padding: 10,
    alignItems: 'center',
  },
  headerView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 15,
  },
  backIconView: {
    backgroundColor: '#F6F6F6',
    elevation: 5,
    borderRadius: 50,
    padding: 15,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  headerName: {
    color: '#000000',
    fontSize: 24,
    fontFamily: Fonts.INTER_Medium,
  },
  profileIcon: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
    color: "#000000",
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 8,
    borderRadius: 5,
  },
  button: {
    width:"100%",
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    zIndex:-1
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  inputBox:{
    width:"100%",
    marginBottom:10
  }
});

export default styles;
