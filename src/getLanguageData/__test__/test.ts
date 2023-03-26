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
  // Test case for "TypeScript" ends here...
});
