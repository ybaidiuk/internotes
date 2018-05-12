# internotes
This app now in developing state.
The main goal is to create decentralized app for notice.
Notes will be stored (backUp) on devices of another users
in encrypted state, so that no one can read yours personal data.

Nowadays mostly users not have public ip because of problem of deficit IPv4. So the temporary decision is implement simply
server for communication batten users devices.

Later will also Created WebSite web version for working with Desktops.

##Problems to Slove: 
1. Notes from Apple not sport Android device and Windows.
2. Google Keep not Allow password for notes.
3. All notes program store notes by server centralized.
4. No Security place for holding passwords like Bitcoin private keys.)))
5. i'm not sure if workers of this company have access to my data.

##Team:
1. Yevhen Baidiuk @y.baidiuk y.baidiuk@gmail.com (Founder, Developer)
2. Vytalij Sikora @knupman (Developer)
3. Roja Mojo @rojoMojo (Developer)
4. Alkis Mavridis @alkismavridis (Source of inspiration, Pianist, Lazy guy)
4. Oleh Baidiuk @OBloM (Lazy guy)


##Instruction to install

official link for setUp https://facebook.github.io/react-native/docs/running-on-device.html

###installation for android:
1. clone https://github.com/ybaidiuk/internotes.git
2. npm install or yarn install
3. react-native run-android (sometimes need to delete existing app(if you have) if you are get red screen)

###installation for ios:
1. clone https://github.com/ybaidiuk/internotes.git
2. npm install or yarn install
3. file /internotes/ios/internotes.xcodeproj . (open in finder as xcode project)
4. on General and Test tab check if account connected . 
5. pres play button (on xcode)
6. Shake your device to open the Developer menu,
7. enable life reload
8. (i got problem with this) in console "react-native log-ios" (but i get :No active iOS device found)
