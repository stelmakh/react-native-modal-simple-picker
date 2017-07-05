# react-native-modal-simple-picker

A simple react-native picker.
It uses a react-native Picker component, which is cross-platform by nature, but
I haven't tested it on Android yet, so let's assume the plugin is iOS-only for
now. The implementation for Android will be added soon.

## Available props

| Name | Type| Default | Description |
| --- | --- | --- | --- |
| cancelText | string | 'Cancel' | The text on the cancel button |  
| confirmText | string | 'Confirm' | The text on the confirm button |
| value | any | undefined | Initial selected value |
| isVisible | bool | false | Show the picker? |
| onConfirm | func | **REQUIRED** | Function called on value picked |
| onCancel | func | **REQUIRED** |  Function called on dismiss |
| title | string | 'Pick a value' | The title text |

All the [Picker props](https://facebook.github.io/react-native/docs/picker.html) are also supported!  

## Notes

Just remember to always set the `isVisible` prop to `false` in both `onConfirm` and `onCancel`

Under the hood this library is using [react-native-modal](https://github.com/react-native-community/react-native-modal) for the iOS modal implementation.  
Huge kudos to [Matteo Mazzarolo](https://github.com/mmazzarolo) for his [react-native-modal-datetime-picker](https://github.com/mmazzarolo/react-native-modal-datetime-picker), this plugin is based on its code.

Pull requests and suggestions are welcome!
