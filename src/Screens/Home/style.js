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
    justifyContent: 'space-between',
    marginBottom: 15,
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
  gradient: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    // height:"37%",
    marginBottom: 15,
  },
  bannerText: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: Fonts.INTER_Medium,
    width: '60%',
    lineHeight: 30,
    paddingVertical: 15,
    // textAlign:"justify"
  },
  bannerTextBold: {
    color: '#ffffff',
    fontSize: 22,
    fontFamily: Fonts.INTER_Bold,
  },
  bannerImg: {
    position: 'absolute',
    right: 0,
  },
  bannerBtn: {
    backgroundColor: '#B3B9FB',
    width: '40%',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  bannerBtnText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: Fonts.INTER_Medium,
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    width: '100%',
    backgroundColor: '#F6F6F6',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  editItemBtn: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding:5,
    backgroundColor:"#ffffff"
  },
  editItem: {
    width: 25,
    height: 25,
  },
  searchIcon: {
    width: 30,
    height: 30,
    tintColor: '#ADACAD',
  },
  textInputBox: {
    fontSize: 18,
  },
  filterBtnView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 15,
  },
  gradientFilter: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  filterBtn: {
    elevation: 10,
  },
  filterBtnText: {
    fontSize: 16,
    fontFamily: Fonts.INTER_Medium,
  },
  itemView: {
    width: '100%',
    backgroundColor: '#F6F6F6',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  itemImg: {
    width: '35%',
    height: 125,
    borderRadius: 10,
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 10,
  },
  itemName: {
    color: '#000000',
    fontSize: 16,
    width: '50%',
    fontFamily: Fonts.INTER_Medium,
  },
  itemStatus: {
    color: '#008000',
    fontSize: 16,
    fontFamily: Fonts.INTER_Medium,
  },
  itemTitle: {
    color: '#808080',
    fontSize: 16,
    fontFamily: Fonts.INTER_Medium,
  },
});

export default styles;
