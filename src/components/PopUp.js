import React, {Component} from 'react';
import {Modal, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import RoundButton from "../components/RoundButton";
import PropTypes from 'prop-types';
import colors from "../Colors";

export default class PopUp extends Component<Props> {

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.visible}
        onRequestClose={this.props.onRequestClose}>


        <TouchableWithoutFeedback onPress={this.props.onRequestClose}>
          <View>
            <View style={s.container}/>
            <View style={this.props.style}>
              {this.props.children}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }


}

RoundButton.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  style: PropTypes.object,
};


const s = StyleSheet.create({
  container: {
    opacity: 0.8,
    backgroundColor: colors.black,
    height: '100%',
  },
});