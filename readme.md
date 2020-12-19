# React Native Error Manager 

This simple and very lightweight library will help to show users a error screen while any error happen in a production build.

# Usage 

    import React from 'react'
    import MyComponent from '../MyComponent'
    import ErrorBoundary from 'react-native-error-manager'

    export const Home = () => {
        return(
            <ErrorBoundary>
                <MyComponent />
            </ErrorBoundary>
        )
    }


# Custom error component

    import React from 'react'
    import {View, Text} from 'react-native'
    import MyComponent from '../MyComponent'
    import ErrorBoundary from 'react-native-error-manager'

    export const Home = () => {

        const ErrorComponent = () => (
            <View style={{justifyContent:'center', alignItems: 'center', flex:1, backgroundColor: 'red'}}>
                <Text style={{fontSize: 30, color: '#fff', textAlign: 'center'}}>Hello this is error</Text>
            </View>
        )

        return(
            <ErrorBoundary component={<ErrorComponent />}>
                <MyComponent />
            </ErrorBoundary>
        )
    }

# Way to see the error

> Sentry can be used for logging error with all the environments 
> link - https://docs.sentry.io/platforms/react-native/

>
* npm install --save @sentry/react-native
* npx @sentry/wizard -i reactNative -p ios android
* cd ios
* pod install

