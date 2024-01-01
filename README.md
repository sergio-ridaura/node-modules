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
- **ClassDefaultType:** classDefault Type.

### color

- **colorHexRegex:** Hexadecimal color regular expression.
- **ColorHexCheckType:** colorHexCheck Type.
- **colorHexExpand:** Return a 6-digit hexadecimal created from a 3-digit hexadecimal color.
- **ColorHexExpandType:** colorHexExpand Type.
- **colorRandom:** Generates a random hexadecimal color.
- **colorBrightnessRandom:** Generates a random hexadecimal color from changing the brightness of another.
- **ColorBrightnessRandomType:** colorBrightnessRandom Type.
- **colorSimilar:** Generates a random hexadecimal color from another.
- **ColorSimilarType:** colorSimilar Type.

### date

- **dateCheck:** Check that the date is correct.
- **DateCheckType:** dateCheck Type.
- **dateGet:** Get date.
- **DateGetType:** dateGet Type.
- **dateGetYear:** Get Year.
- **DateGetYearType:** dateGetYear Type.
- **dateToLinux:** Convert a date to linux format.
- **DateToLinuxType:** dateToLinux Type.

## email

- **emailCheck:** Check that the email is in a correct format.
- **EmailCheckType:** emailCheck Type.
- **emailRegex:** Email regular expression.

### id

- **idDefault:** Allows you to add `default` id to components or use a new id.
- **IdDefaultType:** idDefault Type.

### length

- **feetToMeters:** Converts a measurement from feet to meters.
- **FeetToMetersType:** feetToMeters Type.
- **metersToFeet:** Converts a measurement from meters to feet.
- **MetersToFeetType:** metersToFeet Type.

### number

- **numberIs:** Is number.
- **NumberIsType:** numberIs Type.
- **numberIsPositive:** Number is positive.
- **NumberIsPositiveType:** numberIsPositive Type.
- **numberRandom:** Generate a random number.
- **NumberRandomType:** numberRandom Type.
- **twoDecimals:** Transform a number to two decimal places.
- **TwoDecimalType:** twoDecimal Type.

### string

- **stringIs:** Is string.
- **StringIsType:** stringIs Type.
- **stringIsNumber:** Text with numbers.
- **TwoDecimalType:** stringIsNumber Type.
- **stringIsNumberRegex:** Regular expression for text with numbers.

## Author

**Sergio Ridaura**

Full stack developer in **TypeScript** with **Astro.js**, **React.js**, **Node.js** and **MongoDB**.  
Quick development of high-performance applications and websites.

[![Blog](https://sergio-ridaura.vercel.app/images/blog.svg)](https://sergio-ridaura.vercel.app/) &nbsp; [![Email](https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](mailto:sergio.ridaura@outlook.com) &nbsp; [![GitHub](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=)](https://github.com/sergio-ridaura) &nbsp; [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sergio-ridaura/)

## MIT License

_Copyright (c) 2024 Sergio Ridaura._  
_<https://sergio-ridaura.vercel.app> - <sergio.ridaura@outlook.com>_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
