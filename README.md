# Set Up
```sh
# anyenv
$ brew install anyenv
$ echo 'eval "$(anyenv init -)"' >> ~/.bashrc
$ exec $SHELL -l

# ndenv
$ anyenv install nodenv

# node/npm
$ nodenv install 13.6.0
$ nodenv local 13.6.0
$ node -v
v13.6.0
$ npm -v
6.13.4

# yarn
$ npm install -g yarn
$ yarn -v
1.21.1

# packages
$ mkdir -p chapXX-foo/src
$ cd chapXX-foo
$ npm init -y
$ yarn add typescript \
           @types/eslint \
           @types/eslint-plugin-prettier \
           @types/node \
           @types/prettier \
           @types/stylelint \
           @typescript-eslint/eslint-plugin \
           @typescript-eslint/parser \
           eslint \
           eslint-config-airbnb \
           eslint-config-prettier \
           eslint-plugin-import \
           eslint-plugin-jest \
           eslint-plugin-prefer-arrow \
           eslint-plugin-prettier \
           prettier \
           prettier-stylelint \
           stylelint \
           stylelint-config-prettier \
           stylelint-config-standard \
           stylelint-order

# tsconfig
$ cp ../settings/tsconfig.json.sample tsconfig.json

# linter/formatter
$ cp ../settings/.eslintignore.sample .eslintignore
$ cp ../settings/.eslintrc.js.sample .eslintrc.js
$ cp ../settings/.prettierrc.sample .prettierrc
$ cp ../settings/.stylelintrc.js.sample .stylelintrc.js
```

# Edit package.json
Edit `script` key in package.json as below.

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "tsc": "tsc"
  },
}
```

# Compile
```sh
$ tsc
```

# Execute Program
```sh
$ node build/main.js
```
