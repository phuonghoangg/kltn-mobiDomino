import { View, Text } from 'react-native'
import React from 'react'
import AppStack from './AppStack'
import AuthStack from './AuthStack'

const MainScreen = () => {
  const [token, setToken] = useState('')

  return (
   <View>
        {token ? <AppStack /> : <AuthStack />}
    </View>
  )
}

export default MainScreen