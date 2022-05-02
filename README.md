# TVSeries
TV Shows explorer integrated with [TVmaze API](https://www.tvmaze.com/api)

## APK
[TVSeries.apk](distribution/TVSeries.apk)

## Features
- Explore all TV Shows
- Search TV Shows by name
- Explore & Search views display a poster and info
- Detailed info of each show
- Detailed info of each episode
## Bonus Features
- Secure app by PIN
- Biometric SignIn
- Allow the user to save a series as a favorite. (From the show detail header)
- Allow the user to delete a series from the favorites list. (From the show detail header)

## Testing
```
---------------------------------------|---------|----------|---------|---------
File                                   | % Stmts | % Branch | % Funcs | % Lines
---------------------------------------|---------|----------|---------|---------
All files                              |   13.95 |    17.64 |   10.95 |   14.63 
---------------------------------------|---------|----------|---------|---------
```

I aimed to test a variety of files, for example:
- Simple component with a snapshot: [CustomTextInput](src/components/CustomTextInput/index.test.tsx)
- Simple component with several snapshots using each: [CustomText](src/components/CustomText/index.test.tsx)
- Component with interactions using testing-library: [ShowThumbnail](src/shows/components/ShowThumbnail/index.test.tsx)

## Running on a device or emulator

### Prerequisites
Follow the [official react-native guide](https://reactnative.dev/docs/environment-setup) to properly setup your environment.
Install project dependencies:
`npm install`

### Running the app
Run on android:

`npm run android`

## Generating a test distribution build
`npm run android:build`