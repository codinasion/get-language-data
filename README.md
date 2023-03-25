# @codinasion/language

A collection of Programming Language data.

[![CodeFactor](https://www.codefactor.io/repository/github/codinasion/language/badge)](https://www.codefactor.io/repository/github/codinasion/language) ![Code Size](https://img.shields.io/github/languages/code-size/codinasion/language) ![version](https://img.shields.io/github/package-json/v/codinasion/language?color=lightgreen) ![MIT](https://img.shields.io/github/license/codinasion/language)

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/.github/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## Features

- [x] Language name
- [x] File extension
- [x] Naming convention
- [x] Logo
- [ ] Language short name (e.g. `js` for `JavaScript`, or `c-sharp` for `C#`)

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/.github/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## Getting Started

```bash
npm install codinasion/language
```

or, if you prefer `yarn`:

```bash
yarn add codinasion/language
```

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/.github/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## How to Use

1. Import the `getLanguageData` function from the `@codinasion/language` package.

   ```js
   import { getLanguageData } from '@codinasion/language';
   ```

2. Call the `getLanguageData` function with the language name, or, file extension

   ```js
   const languageData = getLanguageData({ name: 'Python' })[0];
   ```

   or,

   ```js
   const languageData = getLanguageData({ fileExtension: 'py' })[0];
   ```

   or,

   ```js
   const languageData = getLanguageData({ fileExtension: '.py' })[0];
   ```

3. Use the `languageData` object to get the language data.

   ```js
   console.log(languageData.name); // Python
   console.log(languageData.fileExtension); // py
   console.log(languageData.namingConvention); // snake_case
   console.log(languageData.logo); // https://user-images.githubusercontent.com/54644599/227718034-fe84d827-4f53-4466-b37a-2cdd3e817ba2.png
   ```

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/.github/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## Available Languages Data

<!-- The following table is generated by the `src/UpdateReadme.ts` script. -->
<!-- Please do not edit it manually. -->
<!-- START: Available Languages -->

| Language | File Extension | Naming Convension | Logo |
| --- | --- | --- | --- |
| C | `c` `cats` `h` `idc` `w` | PascalCase | ![](https://user-images.githubusercontent.com/54644599/227718065-9c0b7fb1-7ee4-4e27-99dd-d93bb6bde1de.png) |
| C# | `cs` `cake` `cshtml` `csx` | PascalCase | ![](https://user-images.githubusercontent.com/54644599/227718064-c9b9f17a-6f55-4955-85ba-19e2c0420751.png) |
| C++ | `cpp` `c++` `cc` `cp` `cxx` `h` `h++` `hh` `hpp` `hxx` `inc` `inl` `ipp` `tcc` `tpp` | PascalCase | ![](https://user-images.githubusercontent.com/54644599/227718062-7de51f0d-3710-4e1e-9d29-466e801c6de7.png) |
| Dart | `dart` | snake_case | ![](https://user-images.githubusercontent.com/54644599/227718060-a2d16833-cdd3-4d39-8b29-f7e928bea5f9.png) |
| F# | `fs` `fsi` `fsx` | PascalCase | ![](https://user-images.githubusercontent.com/54644599/227718057-577fec2b-5a9b-451e-a221-218319af5cc6.png) |
| GO | `go` | snake_case | ![](https://user-images.githubusercontent.com/54644599/227718055-cc760c85-aab1-4c6c-9b6e-095fedfbb12f.png) |
| Haskell | `hs` `hsc` | snake_case | ![](https://user-images.githubusercontent.com/54644599/227718051-caef203f-2584-479d-b0e2-47fb8e59b265.png) |
| Java | `java` | PascalCase | ![](https://user-images.githubusercontent.com/54644599/227718049-78c3fb05-f06b-4b70-bfe5-7dc8cae5df8f.png) |
| JavaScript | `js` `_js` `bones` `es` `es6` `frag` `gs` `jake` `jsb` `jscad` `jsfl` `jsm` `jss` `njs` `pac` `sjs` `ssjs` `sublime-build` `sublime-commands` `sublime-completions` `sublime-keymap` `sublime-macro` `sublime-menu` `sublime-mousemap` `sublime-project` `sublime-settings` `sublime-theme` `sublime-workspace` `sublime_metrics` `sublime_session` `xsjs` `xsjslib` | PascalCase | ![](https://user-images.githubusercontent.com/54644599/227724565-dd199753-04ef-4262-bb48-e01b187ab4df.png) |
| Julia | `jl` | kebab-case | ![](https://user-images.githubusercontent.com/54644599/227718045-9211a19c-7974-4324-aecc-4a4d0fb6a310.png) |
| Kotlin | `kt` `ktm` `kts` | PascalCase | ![](https://user-images.githubusercontent.com/54644599/227724578-6b384641-911f-43b7-8e7b-63a2c96226a6.png) |
| Perl | `pl` `al` `cgi` `fcgi` `perl` `ph` `plx` `pm` `pod` `psgi` `t` | snake_case | ![](https://user-images.githubusercontent.com/54644599/227718041-b6b21f17-675b-485d-92a1-76f9ec1d80a4.png) |
| PHP | `php` `aw` `ctp` `fcgi` `inc` `php3` `php4` `php5` `phps` `phpt` | snake_case | ![](https://user-images.githubusercontent.com/54644599/227718037-2d3cbe05-e678-453e-8a22-a615794645b6.png) |
| Python | `py` `bzl` `cgi` `fcgi` `gyp` `lmi` `pyde` `pyp` `pyt` `pyw` `rpy` `tac` `wsgi` `xpy` | snake_case | ![](https://user-images.githubusercontent.com/54644599/227718034-fe84d827-4f53-4466-b37a-2cdd3e817ba2.png) |
| R | `r` `rd` `rsx` | snake_case | ![](https://user-images.githubusercontent.com/54644599/227718032-6746f588-346e-4818-b656-c6a3a1a6fd06.png) |
| Ruby | `rb` `builder` `fcgi` `gemspec` `god` `irbrc` `jbuilder` `mspec` `pluginspec` `podspec` `rabl` `rake` `rbuild` `rbw` `rbx` `ru` `ruby` `thor` `watchr` | PascalCase | ![](https://user-images.githubusercontent.com/54644599/227718029-89cc56ce-5285-4981-a79d-1d4f98048a0c.png) |
| Rust | `rs` `rs.in` | snake_case | ![](https://user-images.githubusercontent.com/54644599/227718026-c1ee3b0c-1e70-4f3c-99a5-23c93ca2040e.png) |
| Scala | `scala` `sbt` `sc` | camelCase | ![](https://user-images.githubusercontent.com/54644599/227718024-b9dae41e-16b1-4d0f-944e-5d39f894552f.png) |
| Swift | `swift` | PascalCase | ![](https://user-images.githubusercontent.com/54644599/227718021-6f0d1954-e71c-45d2-8ec3-be2b75d6adcd.png) |
| TypeScript | `ts` `tsx` | PascalCase | ![](https://user-images.githubusercontent.com/54644599/227724573-d958c16a-4b78-4bc1-b05f-599167150e8a.png) |

<!-- END: Available Languages -->

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/.github/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## Join us in discussions

We use GitHub Discussions to talk about all sorts of topics related to documentation and this site. For example: if you'd like help troubleshooting a PR, have a great new idea, or want to share something amazing, join us in the [discussions](https://github.com/orgs/codinasion/discussions).

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/.github/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

<br>

<table>
  <tr>
    <td>
    <img align="left" src="https://raw.githubusercontent.com/codinasion/.github/master/assets/octocat.png" width="190">
    <h3>Thanks for contributing :purple_heart:</h3>
    <ul>
      <li>Thanks for all your contributions and efforts</li>
      <li>We thank you for being a part of our :sparkles: commUnity :sparkles: !</li>
    </ul>
    <img width="900" height="0">
    </td>
  </tr>
</table>

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/.github/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

<br/>

<p align="center">
Made with 💖 by Codinasion
</p>

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/.github/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>
