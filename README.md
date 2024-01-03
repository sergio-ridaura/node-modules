# Node.js modules v1.1.0

_Copyright (c) 2024 Sergio Ridaura._  
_<https://sergio-ridaura.vercel.app> - <sergio.ridaura@outlook.com>_

## Description

My collection of **TypeScript** modules that I use in my projects.

[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://sergio-ridaura.vercel.app/blog/node) &nbsp; [![TypeScript](https://img.shields.io/badge/TypeScript-0078D4?style=for-the-badge&logo=typescript&logoColor=white)](https://sergio-ridaura.vercel.app/blog/typescript)

# Installation

Start the container with Docker Compose.

```console
docker-compose up -d
```

Access the Node.js container.

```console
docker exec -it node_node-modules
```

Add project dependencies.

```console
npm install
```

Run the test.

```console
npm run test
```

For the development of the application.

```console
npm run dev
```

Create application and the package to use in Npm.

```console
npm run build
```

Run the application.

```console
npm run start
```

Publish the package to Npm.

```console
npm addUser
npm publish
```

## Functions

### class

- **classDefault:** Allows you to add `default` class to components or use a new one and add new class.

### color

- **colorHexCheck:** Check that the hexadecimal color is correct.
- **colorHexExpand:** Return a 6-digit hexadecimal created from a 3-digit hexadecimal color.
- **colorHexRegex:** Hexadecimal color regular expression.
- **colorRandom:** Generates a random hexadecimal color.
- **colorBrightnessRandom:** Generates a random hexadecimal color from changing the brightness of another.
- **colorSimilar:** Generates a random hexadecimal color from another.

### date

- **dateCheck:** Check that the date is correct.
- **dateGet:** Get date.
- **dateGetYear:** Get Year.
- **dateToLinux:** Convert a date to linux format.

## email

- **emailCheck:** Check that the email is in a correct format.
- **emailRegex:** Email regular expression.

### id

- **idDefault:** Allows you to add `default` id to components or use a new id.

### length

- **feetToMeters:** Converts a measurement from feet to meters.
- **metersToFeet:** Converts a measurement from meters to feet.

### number

- **numberIs:** Is number.
- **numberIsPair:** Number is pair.
- **numberIsPositive:** Number is positive.
- **numberRandom:** Generate a random number.
- **numberToBoolean:** Number to boolean.
- **numberToString:** Number to string.
- **twoDecimals:** Transform a number to two decimal places.
- **twoDecimalsString:** Transform a number to string two decimal places.

## speed

- **kphToMph:** Converts a speed from kph to mph.
- **mphToKph:** Converts a speed from mph to kph.

### string

- **stringContainLetter:** Text containing letters.
- **stringContainLetterExtent:** Text containing letter extent.
- **stringContainLetterExtentRegex:** Regular expression for text containing letter extent.
- **stringContainLetterRegex:** Regular expression for text containing letters.
- **stringContainLowercase:** Text containing lowercase letters.
- **stringContainLowercaseRegex:** Regular expression for text containing lowercase letters.
- **stringContainNumber:** Text containing numbers.
- **stringContainNumberRegex:** Regular expression for text containing number.
- **stringContainSpace:** Text containing space.
- **stringContainSpaceRegex:** Regular expression for text containing spaces.
- **stringContainSymbol:** Text containing symbols.
- **stringContainSymbolRegex:** Regular expression for text containing symbol.
- **stringContainUppercase:** Text containing uppercase letters.
- **stringContainUppercaseRegex:** Regular expression for text containing uppercase letters.
- **stringIs:** Is string.
- **stringIsCapital:** The text starts with a capital letter.
- **stringIsCapitalRegex:** Regular expression for text starts with a capital letter.
- **stringIsLetter:** Text with letters.
- **stringIsLetterExtent:** Text with letters extends.
- **stringIsLetterExtentRegex:** Regular expression for text with letter extent.
- **stringIsLetterRegex:** Regular expression for text with lowercase letters.
- **stringIsLowercase:** Text with lowercase letters.
- **stringIsLowercaseRegex:** Regular expression for text with lowercase letters.
- **stringIsNumber:** Text with numbers.
- **stringIsNumberRegex:** Regular expression for text with numbers.
- **stringIsSpace:** Text with spaces.
- **stringIsSpaceRegex:** Regular expression for text with spaces.
- **stringIsSymbol:** Text with symbols.
- **stringIsSymbolRegex:** Regular expression for text with symbols.

## temperature

- **celsiusToFahrenheit:** Converts a temperature in celsius to fahrenheit.
- **fahrenheitToCelsius:** Converts a temperature in fahrenheit to celsius.

## weight

- **kilogramsToPounds:** Converts a weight in kilograms to pounds.
- **poundsToKilograms:** Converts a weight in pounds to kilograms.

## Author

### Sergio Ridaura

Full stack developer in **TypeScript** with **Astro.js**, **React.js**, **Node.js** and **MongoDB**.  
Quick development of high-performance applications and websites.

[![Blog](https://sergio-ridaura.vercel.app/images/blog.svg)](https://sergio-ridaura.vercel.app/) &nbsp; [![Email](https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](mailto:sergio.ridaura@outlook.com) &nbsp; [![GitHub](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=)](https://github.com/sergio-ridaura) &nbsp; [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sergio-ridaura/)

## MIT License

_Copyright (c) 2024 Sergio Ridaura._  
_<https://sergio-ridaura.vercel.app> - <sergio.ridaura@outlook.com>_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
