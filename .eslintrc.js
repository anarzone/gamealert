module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true,
        "es6": true,
    },
    "settings": {
        "ecmascript": 6,
        "jsx": true,
    },
    "parserOptions":{
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
            "jsx": true,
        },
        "sourceType": "module",
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "react/jsx-one-expression-per-line": 0
    }
};