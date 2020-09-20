## Description

Simple Nest based config service facilitating the setting and getting of key:value based storage using a JSON file

- GET <config-service-url>/ - Returns all config
- POST <config-service-url>/ - Merges all specified key:value pairs into config
- POST <config-service-url>/reset - Either clears config to {} or resets to specified object 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

  [MIT licensed](LICENSE).
