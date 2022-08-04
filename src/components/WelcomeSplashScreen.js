import React from 'react';
import { Button, TextInput, View } from 'react-native';

import styles from '../globalStyles';
import { registerAccount, setPasscode, setUserName, setUUID } from '../redux/slices/registerSlice';

const WelcomeSplashScreen = () => {
  const username = ''
	const passcode = ''

	const dispatch = useDispatch()

  return (
    <View style={styles.welcome}>

      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
      />

			<TextInput
        style={styles.input}
        placeholder="Enter your passcode"
        value={passcode}
      />

			<Button
			style={styles.button}
			title="Register"
			onPress={() => {
				dispatch(registerAccount())
				dispatch(setUserName(username))
				dispatch(setUUID())
        dispatch(setPasscode(passcode))
			}}
      />

    </View>
  )
}

export default WelcomeSplashScreen
