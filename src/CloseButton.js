import React from 'react'
import {
  Image,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'

const CloseButton = props => {
  const closeImage = props.closeImage
    ? props.closeImage
    : Platform.select({
      android: require('./android-close.png'),
      default: require('./ios7-close-empty.png')
    })

  return Platform.select({
    android: (props, closeImage) => (
      <View style={props.styles[0]}>
        <TouchableNativeFeedback
          background={
            Platform.Version < 21
              ? TouchableNativeFeedback.SelectableBackground()
              : TouchableNativeFeedback.SelectableBackgroundBorderless()
          }
          onPress={props.onPress}
        >
          <View>
            <Image source={closeImage} style={props.styles[1]} />
          </View>
        </TouchableNativeFeedback>
      </View>
    ),
    default: (props, closeImage) => (
      <View style={props.styles[0]}>
        <TouchableOpacity onPress={props.onPress}>
          <Image source={closeImage} style={props.styles[1]} />
        </TouchableOpacity>
      </View>
    )
  })
}

CloseButton.propTypes = {
  styles: PropTypes.array,
  onPress: PropTypes.func,
  image: PropTypes.any
}

export default CloseButton
