/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { Image, Modal, Pressable, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { COLORS, icons } from '../../../constants';
// import {endpoint, endpointdajngobackend} from '../../../constants';
import axios from 'axios';
// import {loadingUserProfile} from '../../stores/actions/productActions';
import { connect } from 'react-redux';

class ImageCropBottomPopup extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      images: null,
      animationType: 'slide',
      haveOutsideTouch: false,
    };
  }

  onImageUpload = async image => {
    console.log(image, '..........');

    const token = await AsyncStorage.getItem('@user_token');
    const MyUserId = await AsyncStorage.getItem('@myUserId');
    var imageVideoFormat = '';
    var type = 'image';
    var formData = new FormData();

    var imageStatus = image.uri;
    var imageUri = imageStatus;

    // console.log(imageUri, '......');
    imageStatus = imageStatus.slice(Math.max(imageStatus.length - 3, 1));

    if (imageStatus == 'jpg') {
      imageVideoFormat = 'jpg';
    } else if (imageStatus == 'png') {
      imageVideoFormat = 'png';
    } else if (imageStatus == 'peg') {
      imageVideoFormat = 'jpeg';
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      imageVideoFormat = 'mp4';
      type = 'video';
    }

    formData.append('image', {
      uri: imageUri,
      name: `${imageUri}.${imageVideoFormat}`,
      type: `${type}/${imageVideoFormat}`,
    });

    formData.append('type', type);
    formData.append('MyUserId', MyUserId);
    const authAxios = axios.create({
      baseURL: "endpointdajngobackend",
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    // axios
    authAxios
      .post(`${"endpointdajngobackend"}/home/UpdateProfileImagesView/`, formData)
      .then(res => {
        // this.props.refreshLoadingUserProfile();
      })
      .catch(err => {});
  };

  pickSingleWithCamera(cropping, mediaType = 'photo') {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 250,
      height: 250,
      includeExif: true,
      mediaType,
    })
      .then(image => {
        console.log('received image', image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
        });
        this.onImageUpload(
          (image = {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          }),
        );
      })
      .catch(e => {});
  }

  pickSingle(cropit, circular = false, mediaType) {
    ImagePicker.openPicker({
      width: 250,
      height: 250,
      cropping: cropit,
      cropperCircleOverlay: circular,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then(image => {
        console.log('received image', image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
        });

        this.onImageUpload(
          (image = {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          }),
        );
      })
      .catch(e => {});
  }

  scaledHeight(oldW, oldH, newW) {
    return (oldH / oldW) * newW;
  }

  render() {
    const {show, closePopup, haveOutsideTouch} = this.props;

    // console.log(handelSendMessage,'handelSendMessagehandelSendMessagehandelSendMessagehandelSendMessagehandelSendMessagehandelSendMessage')

    return (
      <Modal
        animationType={this.state.animationType}
        transparent={true}
        visible={show}
        onRequestClose={() => {}}>
        <View style={{flex: 1, backgroundColor: '#000000AA'}}>
          <Pressable
            onPress={() => {
              if (!haveOutsideTouch) {
                return;
              }
              closePopup();
            }}
            style={{flex: 1}}
          />

          <View
            style={{
              bottom: 0,
              position: 'absolute',
              width: '100%',
              backgroundColor: 'white',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              height: '25%',
              // height: Dimensions.get('window').height * 0.4,
              // maxHeight: Dimensions.get('window').height * 0.4
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginTop: '10%',
                marginHorizontal: '30%',
                // width: Dimensions.get('window').width * 1,
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.pickSingleWithCamera(true);
                  closePopup();
                }}
                style={{
                  width: 45,
                  height: 45,
                  backgroundColor: COLORS.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  elevation:3
                  // marginTop: -25,
                  // marginLeft: -20,
                }}>
                <Image
                  source={icons.camera}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: COLORS.black,
                    // transform: [{rotate: '45deg'}],
                    //   marginLeft: 10,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.pickSingle(true, true);
                  closePopup();
                }}
                style={{
                  width: 45,
                  height: 45,
                  backgroundColor: COLORS.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  elevation:3
                  // marginTop: -25,
                  // marginLeft: -20,
                }}>
                <Image
                  source={icons.mobile}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: COLORS.black,
                    // transform: [{rotate: '45deg'}],
                    //   marginLeft: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    // refreshLoadingUserProfile: () => dispatch(loadingUserProfile()),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageCropBottomPopup);
