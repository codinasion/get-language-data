import getLanguageData from '../index';
import LanguageData from '../../data';

describe('Get Language Data', () => {
  // Test case for "C"
  it('should return C data based on name "C"', () => {
    expect(getLanguageData({ name: 'C' })).toEqual(LanguageData.filter((language) => language.name === 'C'));
  });

  it('should return C data based on file extension "c"', () => {
    expect(getLanguageData({ fileExtension: 'c' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('c')),
    );
  });

  it('should return C data based on prism tag "c"', () => {
    expect(getLanguageData({ prismTag: 'c' })).toEqual(LanguageData.filter((language) => language.prismTag === 'c'));
  });
  // Test case for "C" ends here...

  // Test case for "C#"
  it('should return C# data based on name "C#"', () => {
    expect(getLanguageData({ name: 'C#' })).toEqual(LanguageData.filter((language) => language.name === 'C#'));
  });

  it('should return C# data based on file extension "cs"', () => {
    expect(getLanguageData({ fileExtension: 'cs' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('cs')),
    );
  });

  it('should return C# data based on prism tag "csharp"', () => {
    expect(getLanguageData({ prismTag: 'csharp' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'csharp'),
    );
  });
  // Test case for "C#" ends here...

  // Test case for "C++"
  it('should return C++ data based on name "C++"', () => {
    expect(getLanguageData({ name: 'C++' })).toEqual(LanguageData.filter((language) => language.name === 'C++'));
  });

  it('should return C++ data based on file extension "cpp"', () => {
    expect(getLanguageData({ fileExtension: 'cpp' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('cpp')),
    );
  });

  it('should return C++ data based on prism tag "cpp"', () => {
    expect(getLanguageData({ prismTag: 'cpp' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'cpp'),
    );
  });
  // Test case for "C++" ends here...

  // Test case for "Dart"
  it('should return Dart data based on name "Dart"', () => {
    expect(getLanguageData({ name: 'Dart' })).toEqual(LanguageData.filter((language) => language.name === 'Dart'));
  });

  it('should return Dart data based on file extension "dart"', () => {
    expect(getLanguageData({ fileExtension: 'dart' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('dart')),
    );
  });

  it('should return Dart data based on prism tag "dart"', () => {
    expect(getLanguageData({ prismTag: 'dart' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'dart'),
    );
  });
  // Test case for "Dart" ends here...

  // Test case for "F#"
  it('should return F# data based on name "F#"', () => {
    expect(getLanguageData({ name: 'F#' })).toEqual(LanguageData.filter((language) => language.name === 'F#'));
  });

  it('should return F# data based on file extension "fs"', () => {
    expect(getLanguageData({ fileExtension: 'fs' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('fs')),
    );
  });

  it('should return F# data based on prism tag "fsharp"', () => {
    expect(getLanguageData({ prismTag: 'fsharp' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'fsharp'),
    );
  });
  // Test case for "F#" ends here...

  // Test case for "GO"
  it('should return GO data based on name "GO"', () => {
    expect(getLanguageData({ name: 'GO' })).toEqual(LanguageData.filter((language) => language.name === 'GO'));
  });

  it('should return GO data based on file extension "go"', () => {
    expect(getLanguageData({ fileExtension: 'go' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('go')),
    );
  });

  it('should return GO data based on prism tag "go"', () => {
    expect(getLanguageData({ prismTag: 'go' })).toEqual(LanguageData.filter((language) => language.prismTag === 'go'));
  });
  // Test case for "GO" ends here...

  // Test case for "Haskell"
  it('should return Haskell data based on name "Haskell"', () => {
    expect(getLanguageData({ name: 'Haskell' })).toEqual(
      LanguageData.filter((language) => language.name === 'Haskell'),
    );
  });

  it('should return Haskell data based on file extension "hs"', () => {
    expect(getLanguageData({ fileExtension: 'hs' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('hs')),
    );
  });

  it('should return Haskell data based on prism tag "haskell"', () => {
    expect(getLanguageData({ prismTag: 'haskell' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'haskell'),
    );
  });
  // Test case for "Haskell" ends here...

  // Test case for "Java"
  it('should return Java data based on name "Java"', () => {
    expect(getLanguageData({ name: 'Java' })).toEqual(LanguageData.filter((language) => language.name === 'Java'));
  });

  it('should return Java data based on file extension "java"', () => {
    expect(getLanguageData({ fileExtension: 'java' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('java')),
    );
  });

  it('should return Java data based on prism tag "java"', () => {
    expect(getLanguageData({ prismTag: 'java' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'java'),
    );
  });
  // Test case for "Java" ends here...

  // Test case for "JavaScript"
  it('should return JavaScript data based on name "JavaScript"', () => {
    expect(getLanguageData({ name: 'JavaScript' })).toEqual(
      LanguageData.filter((language) => language.name === 'JavaScript'),
    );
  });

  it('should return JavaScript data based on file extension "js"', () => {
    expect(getLanguageData({ fileExtension: 'js' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('js')),
    );
  });

  it('should return JavaScript data based on prism tag "javascript"', () => {
    expect(getLanguageData({ prismTag: 'javascript' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'javascript'),
    );
  });
  // Test case for "JavaScript" ends here...

  // Test case for "Julia"
  it('should return Julia data based on name "Julia"', () => {
    expect(getLanguageData({ name: 'Julia' })).toEqual(LanguageData.filter((language) => language.name === 'Julia'));
  });

  it('should return Julia data based on file extension "jl"', () => {
    expect(getLanguageData({ fileExtension: 'jl' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('jl')),
    );
  });

  it('should return Julia data based on prism tag "julia"', () => {
    expect(getLanguageData({ prismTag: 'julia' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'julia'),
    );
  });
  // Test case for "Julia" ends here...

  // Test case for "Kotlin"
  it('should return Kotlin data based on name "Kotlin"', () => {
    expect(getLanguageData({ name: 'Kotlin' })).toEqual(LanguageData.filter((language) => language.name === 'Kotlin'));
  });

  it('should return Kotlin data based on file extension "kt"', () => {
    expect(getLanguageData({ fileExtension: 'kt' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('kt')),
    );
  });

  it('should return Kotlin data based on prism tag "kotlin"', () => {
    expect(getLanguageData({ prismTag: 'kotlin' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'kotlin'),
    );
  });
  // Test case for "Kotlin" ends here...

  // Test case for "Perl"
  it('should return Perl data based on name "Perl"', () => {
    expect(getLanguageData({ name: 'Perl' })).toEqual(LanguageData.filter((language) => language.name === 'Perl'));
  });

  it('should return Perl data based on file extension "pl"', () => {
    expect(getLanguageData({ fileExtension: 'pl' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('pl')),
    );
  });

  it('should return Perl data based on prism tag "perl"', () => {
    expect(getLanguageData({ prismTag: 'perl' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'perl'),
    );
  });
  // Test case for "Perl" ends here...

  // Test case for "PHP"
  it('should return PHP data based on name "PHP"', () => {
    expect(getLanguageData({ name: 'PHP' })).toEqual(LanguageData.filter((language) => language.name === 'PHP'));
  });

  it('should return PHP data based on file extension "php"', () => {
    expect(getLanguageData({ fileExtension: 'php' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('php')),
    );
  });

  it('should return PHP data based on prism tag "php"', () => {
    expect(getLanguageData({ prismTag: 'php' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'php'),
    );
  });
  // Test case for "PHP" ends here...

  // Test case for "Python"
  it('should return Python data based on name "Python"', () => {
    expect(getLanguageData({ name: 'Python' })).toEqual(LanguageData.filter((language) => language.name === 'Python'));
  });

  it('should return Python data based on file extension "py"', () => {
    expect(getLanguageData({ fileExtension: 'py' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('py')),
    );
  });

  it('should return Python data based on prism tag "python"', () => {
    expect(getLanguageData({ prismTag: 'python' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'python'),
    );
  });
  // Test case for "Python" ends here...

  // Test case for "R"
  it('should return R data based on name "R"', () => {
    expect(getLanguageData({ name: 'R' })).toEqual(LanguageData.filter((language) => language.name === 'R'));
  });

  it('should return R data based on file extension "r"', () => {
    expect(getLanguageData({ fileExtension: 'r' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('r')),
    );
  });

  it('should return R data based on prism tag "r"', () => {
    expect(getLanguageData({ prismTag: 'r' })).toEqual(LanguageData.filter((language) => language.prismTag === 'r'));
  });
  // Test case for "R" ends here...

  // Test case for "Ruby"
  it('should return Ruby data based on name "Ruby"', () => {
    expect(getLanguageData({ name: 'Ruby' })).toEqual(LanguageData.filter((language) => language.name === 'Ruby'));
  });

  it('should return Ruby data based on file extension "rb"', () => {
    expect(getLanguageData({ fileExtension: 'rb' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('rb')),
    );
  });

  it('should return Ruby data based on prism tag "ruby"', () => {
    expect(getLanguageData({ prismTag: 'ruby' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'ruby'),
    );
  });
  // Test case for "Ruby" ends here...

  // Test case for "Rust"
  it('should return Rust data based on name "Rust"', () => {
    expect(getLanguageData({ name: 'Rust' })).toEqual(LanguageData.filter((language) => language.name === 'Rust'));
  });

  it('should return Rust data based on file extension "rs"', () => {
    expect(getLanguageData({ fileExtension: 'rs' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('rs')),
    );
  });

  it('should return Rust data based on prism tag "rust"', () => {
    expect(getLanguageData({ prismTag: 'rust' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'rust'),
    );
  });
  // Test case for "Rust" ends here...

  // Test case for "Scala"
  it('should return Scala data based on name "Scala"', () => {
    expect(getLanguageData({ name: 'Scala' })).toEqual(LanguageData.filter((language) => language.name === 'Scala'));
  });

  it('should return Scala data based on file extension "scala"', () => {
    expect(getLanguageData({ fileExtension: 'scala' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('scala')),
    );
  });

  it('should return Scala data based on prism tag "scala"', () => {
    expect(getLanguageData({ prismTag: 'scala' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'scala'),
    );
  });
  // Test case for "Scala" ends here...

  // Test case for "Swift"
  it('should return Swift data based on name "Swift"', () => {
    expect(getLanguageData({ name: 'Swift' })).toEqual(LanguageData.filter((language) => language.name === 'Swift'));
  });

  it('should return Swift data based on file extension "swift"', () => {
    expect(getLanguageData({ fileExtension: 'swift' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('swift')),
    );
  });

  it('should return Swift data based on prism tag "swift"', () => {
    expect(getLanguageData({ prismTag: 'swift' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'swift'),
    );
  });
  // Test case for "Swift" ends here...

  // Test case for "TypeScript"
  it('should return TypeScript data based on name "TypeScript"', () => {
    expect(getLanguageData({ name: 'TypeScript' })).toEqual(
      LanguageData.filter((language) => language.name === 'TypeScript'),
    );
  });

  it('should return TypeScript data based on file extension "ts"', () => {
    expect(getLanguageData({ fileExtension: 'ts' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('ts')),
    );
  });

  it('should return TypeScript data based on prism tag "typescript"', () => {
    expect(getLanguageData({ prismTag: 'typescript' })).toEqual(
      LanguageData.filter((language) => language.prismTag === 'typescript'),
    );
  });
  // Test case for "TypeScript" ends here...
});
