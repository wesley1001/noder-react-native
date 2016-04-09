# Noder - A React-Native Client for [cnodejs.org](http://cnodejs.org)
 
> A new [cnodejs.org](http://cnodejs.org) mobile app powered by [React-Native](http://facebook.github.io/react-native/) and [Redux](https://github.com/gaearon/redux). 


## Develop

For local development you need to follow the below commands:

```
git clone https://github.com/soliury/noder-react-native.git
npm install
react-native bundle
```

Click the run button in Xcode, if something went wrong, you need to rebuild all packages that be used in this project with Xcode (Just select the package and press **command+B** to run compile).

If you want to run it on you iPhone, please follow the [Offical Doc](http://facebook.github.io/react-native/docs/runningondevice.html#content).

If you don't want to update the ip manually, please run:

```
gulp replace
```

BTW, here is a prettier command, just run:

```
npm start
```

The ip will be replaced automatically.


## Screenshots

![noder](http://7lrzfj.com1.z0.glb.clouddn.com/soliurynoder-v1.0.0.gif)


## React-Native Modules In Using

* [react-native-button](https://github.com/ide/react-native-button)
* [react-native-camera](https://github.com/lwansbrough/react-native-camera)
* [react-native-icons](https://github.com/corymsmith/react-native-icons)
* [react-native-keyboardevents](https://github.com/johanneslumpe/react-native-keyboardevents)
* [react-native-modal](https://github.com/brentvatne/react-native-modal)
* [react-native-overlay](https://github.com/brentvatne/react-native-overlay)
* [react-native-scrollable-tab-view](https://github.com/brentvatne/react-native-scrollable-tab-view)

This project is heavily influenced by the above modules.

## ToDo List

* Push Notification
* Refactor the code
* Fix the below bugs
  * In ListView, sometime items on the bottom can't be refreshed
  * ListView **take too much memory**
  * HTML to native View render take too much **memory and CPU time**
* Submit to App Store  
* Add Unit testing 

## Change log

Please read [CHANGELOG]()

## Contribute

If you find any issues, just solve it and make a PR.

This project is under the ES6 JSX.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
