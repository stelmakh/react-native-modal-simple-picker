import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Picker, Text, TouchableOpacity } from 'react-native';
import ReactNativeModal from 'react-native-modal';

import styles from './styles'

export default class CustomPickerIOS extends Component {
  static propTypes = {
    cancelText: PropTypes.string,
    confirmText: PropTypes.string,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    title: PropTypes.string,
    value: PropTypes.any,
    isVisible: PropTypes.bool,
  };

  static defaultProps = {
    cancelText: 'Cancel',
    confirmText: 'Confirm',
    title: 'Pick a value',
    isVisible: false,
  };

  state = {
    value: this.props.value,
    userIsInteractingWithPicker: false,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  _handleUserTouchInit = () => {
    this.setState({
      userIsInteractingWithPicker: true,
    });
    return false;
  };

  _handleValueChange = value => {
    this.setState({
      value,
      userIsInteractingWithPicker: false,
    });
  };

  _handleCancel = () => {
    this.props.onCancel();
  };

  _handleConfirm = () => {
    this.props.onConfirm(this.state.value);
  }


  render() {
    const {
      isVisible,
      value,
      data,
      title,
      onCancel,
      onConfirm,
      confirmText,
      cancelText,
      ...otherProps
    } = this.props

    const titleContainer = (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );

    const confirmButton = <Text style={styles.confirmText}>{confirmText}</Text>;
    const cancelButton = <Text style={styles.cancelText}>{cancelText}</Text>;
    const items = data.map((item, i) => {
      return <Picker.Item key={'item-'+i} label={item.label} value={item.value}/>
    })

    return (
      <ReactNativeModal
        isVisible={isVisible}
        style={[styles.contentContainer]}
      >
        <View style={[styles.datepickerContainer]}>
          {titleContainer}
          <View onStartShouldSetResponderCapture={this._handleUserTouchInit}>
            <Picker
              selectedValue={this.state.value}
              onValueChange={this._handleValueChange}
              {...otherProps}
            >
              {items}
            </Picker>
          </View>
          <View style={styles.confirmButton}>
            <TouchableOpacity
              onPress={this._handleConfirm}
              disabled={this.state.userIsInteractingWithPicker}
            >
              {confirmButton}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cancelButton}>
          <TouchableOpacity onPress={this._handleCancel}>
            {cancelButton}
          </TouchableOpacity>
        </View>
      </ReactNativeModal>
    );
  }
}
