# React-Native App Template

## `React-Native` Setup

*The following is just a summary from the official documentation: https://facebook.github.io/react-native/docs/getting-started*

### Dependencies Installation

* `Node.js`

  Check out my other repo: https://github.com/Ziang-Lu/JavaScript-Learning-Notes/tree/master/node-crash-course

* `Watchman`

  `Watchman` is a <u>tool for watching changes in the filesystem</u>. Installed for better performance.

  ```shell
  $ brew install watchman
  ```

* To build the app to both iOS and Android:

  * iOS

    * `Xcode` + `Xcode Command Line Tools`

    * `iOS Simulator` in `Xcode`

      *For installation details, check out the official documentation above*

    * `CocoaPods`

      `CocoaPods`  manages library dependencies for your `Xcode` projects, and the dependencies for your projects are specified in a single file called `Podfile`.

      `CocoaPods` will resolve dependencies between libraries, fetch the resulting source code, and link it together in an `Xcode` workspace to build your project.

      ```shell
      $ sudo gem install cocoapods
      ```

  * Android

    * `Android Studio`

    * `Android 9 (Pie)` SDK

      *For installation details, check out the official documentation above*

    * Configure `ANDROID_HOME` environment variable

      Add the following lines to `.bashrc` and `.zshrc`:

      ```shell
      export ANDROID_HOME=$HOME/Library/Android/sdk
      export PATH=$PATH:$ANDROID_HOME/emulator
      export PATH=$PATH:$ANDROID_HOME/tools
      export PATH=$PATH:$ANDROID_HOME/tools/bin
      export PATH=$PATH:$ANDROID_HOME/platform-tools
      ```

      Also, add a file called `local.properties` to `android/` directory, with the following content

      ```
      sdk.dir = /Users/<USERNAME>/Library/Android/sdk
      ```

    * `Android Virtual Device (AVD)`

      Pick any phone, and then select `Pie API Level 28 image`

<br>

### App Quick Initialization

Create the React-Native app:

```shell
$ npx react-native init AwesomeApp
```

or

```shell
$ npm install -g create-react-native-app
$ create-react-native-app OnlineChatApp
```

To run the app:

```shell
$ npx react-native run-ios
# or simply
$ react-native run-ios  # To iOS

$ npx react-native run-android
# or simply
$ react-native run-android  # To Android
```

***

### Linting

Besides the default linting settings, follow this guide https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/JavaScript%20Linting.md

Remember to update `.eslintrc.js` as well

***

<br>

## Incorporating `TypeScript` into `React-Native` App

1. Simply follow the official documentation: https://reactnative.dev/docs/typescript

   Remember to add the following to `tsconfig.json`:

   ```json
   {
     "compilerOptions": {
       "outDir": "./out"
     }
   }
   ```

2. Go ahead and add typing and `TypeScript` features to the `.tsx` files

   Remember to change one line in `index.js`:

   ```js
   // Instead of
   import App from './App';
   
   // Since we build the transpiled JavaScript files to "./out", change the above line to the following
   import App from './out/App';
   ```

3. For linting, besides the linting settings above, follow this guide https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/TypeScript-crash-course/TypeScript%20Learning%20Notes.md#typescript-linting

   Remember to update `.eslintrc.js` as well

