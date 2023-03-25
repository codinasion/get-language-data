import Language from '../index';
import LanguageData from '../data';

describe('Language', () => {
  // Test case for "C"
  it('should return C data based on name "C"', () => {
    expect(Language({ name: 'C' })).toEqual(LanguageData.filter((language) => language.name === 'C'));
  });

  it('should return C data based on file extension "c"', () => {
    expect(Language({ fileExtension: 'c' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('c')),
    );
  });
  // Test case for "C" ends here...

  // Test case for "C#"
  it('should return C# data based on name "C#"', () => {
    expect(Language({ name: 'C#' })).toEqual(LanguageData.filter((language) => language.name === 'C#'));
  });

  it('should return C# data based on file extension "cs"', () => {
    expect(Language({ fileExtension: 'cs' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('cs')),
    );
  });
  // Test case for "C#" ends here...

  // Test case for "C++"
  it('should return C++ data based on name "C++"', () => {
    expect(Language({ name: 'C++' })).toEqual(LanguageData.filter((language) => language.name === 'C++'));
  });

  it('should return C++ data based on file extension "cpp"', () => {
    expect(Language({ fileExtension: 'cpp' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('cpp')),
    );
  });
  // Test case for "C++" ends here...

  // Test case for "Dart"
  it('should return Dart data based on name "Dart"', () => {
    expect(Language({ name: 'Dart' })).toEqual(LanguageData.filter((language) => language.name === 'Dart'));
  });

  it('should return Dart data based on file extension "dart"', () => {
    expect(Language({ fileExtension: 'dart' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('dart')),
    );
  });
  // Test case for "Dart" ends here...

  // Test case for "F#"
  it('should return F# data based on name "F#"', () => {
    expect(Language({ name: 'F#' })).toEqual(LanguageData.filter((language) => language.name === 'F#'));
  });

  it('should return F# data based on file extension "fs"', () => {
    expect(Language({ fileExtension: 'fs' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('fs')),
    );
  });
  // Test case for "F#" ends here...

  // Test case for "GO"
  it('should return GO data based on name "GO"', () => {
    expect(Language({ name: 'GO' })).toEqual(LanguageData.filter((language) => language.name === 'GO'));
  });

  it('should return GO data based on file extension "go"', () => {
    expect(Language({ fileExtension: 'go' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('go')),
    );
  });
  // Test case for "GO" ends here...

  // Test case for "Haskell"
  it('should return Haskell data based on name "Haskell"', () => {
    expect(Language({ name: 'Haskell' })).toEqual(LanguageData.filter((language) => language.name === 'Haskell'));
  });

  it('should return Haskell data based on file extension "hs"', () => {
    expect(Language({ fileExtension: 'hs' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('hs')),
    );
  });
  // Test case for "Haskell" ends here...

  // Test case for "Java"
  it('should return Java data based on name "Java"', () => {
    expect(Language({ name: 'Java' })).toEqual(LanguageData.filter((language) => language.name === 'Java'));
  });

  it('should return Java data based on file extension "java"', () => {
    expect(Language({ fileExtension: 'java' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('java')),
    );
  });
  // Test case for "Java" ends here...

  // Test case for "JavaScript"
  it('should return JavaScript data based on name "JavaScript"', () => {
    expect(Language({ name: 'JavaScript' })).toEqual(LanguageData.filter((language) => language.name === 'JavaScript'));
  });

  it('should return JavaScript data based on file extension "js"', () => {
    expect(Language({ fileExtension: 'js' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('js')),
    );
  });
  // Test case for "JavaScript" ends here...

  // Test case for "Julia"
  it('should return Julia data based on name "Julia"', () => {
    expect(Language({ name: 'Julia' })).toEqual(LanguageData.filter((language) => language.name === 'Julia'));
  });

  it('should return Julia data based on file extension "jl"', () => {
    expect(Language({ fileExtension: 'jl' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('jl')),
    );
  });
  // Test case for "Julia" ends here...

  // Test case for "Kotlin"
  it('should return Kotlin data based on name "Kotlin"', () => {
    expect(Language({ name: 'Kotlin' })).toEqual(LanguageData.filter((language) => language.name === 'Kotlin'));
  });

  it('should return Kotlin data based on file extension "kt"', () => {
    expect(Language({ fileExtension: 'kt' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('kt')),
    );
  });
  // Test case for "Kotlin" ends here...

  // Test case for "Perl"
  it('should return Perl data based on name "Perl"', () => {
    expect(Language({ name: 'Perl' })).toEqual(LanguageData.filter((language) => language.name === 'Perl'));
  });

  it('should return Perl data based on file extension "pl"', () => {
    expect(Language({ fileExtension: 'pl' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('pl')),
    );
  });
  // Test case for "Perl" ends here...

  // Test case for "PHP"
  it('should return PHP data based on name "PHP"', () => {
    expect(Language({ name: 'PHP' })).toEqual(LanguageData.filter((language) => language.name === 'PHP'));
  });

  it('should return PHP data based on file extension "php"', () => {
    expect(Language({ fileExtension: 'php' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('php')),
    );
  });
  // Test case for "PHP" ends here...

  // Test case for "Python"
  it('should return Python data based on name "Python"', () => {
    expect(Language({ name: 'Python' })).toEqual(LanguageData.filter((language) => language.name === 'Python'));
  });

  it('should return Python data based on file extension "py"', () => {
    expect(Language({ fileExtension: 'py' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('py')),
    );
  });
  // Test case for "Python" ends here...

  // Test case for "R"
  it('should return R data based on name "R"', () => {
    expect(Language({ name: 'R' })).toEqual(LanguageData.filter((language) => language.name === 'R'));
  });

  it('should return R data based on file extension "r"', () => {
    expect(Language({ fileExtension: 'r' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('r')),
    );
  });
  // Test case for "R" ends here...

  // Test case for "Ruby"
  it('should return Ruby data based on name "Ruby"', () => {
    expect(Language({ name: 'Ruby' })).toEqual(LanguageData.filter((language) => language.name === 'Ruby'));
  });

  it('should return Ruby data based on file extension "rb"', () => {
    expect(Language({ fileExtension: 'rb' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('rb')),
    );
  });
  // Test case for "Ruby" ends here...

  // Test case for "Rust"
  it('should return Rust data based on name "Rust"', () => {
    expect(Language({ name: 'Rust' })).toEqual(LanguageData.filter((language) => language.name === 'Rust'));
  });

  it('should return Rust data based on file extension "rs"', () => {
    expect(Language({ fileExtension: 'rs' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('rs')),
    );
  });
  // Test case for "Rust" ends here...

  // Test case for "Scala"
  it('should return Scala data based on name "Scala"', () => {
    expect(Language({ name: 'Scala' })).toEqual(LanguageData.filter((language) => language.name === 'Scala'));
  });

  it('should return Scala data based on file extension "scala"', () => {
    expect(Language({ fileExtension: 'scala' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('scala')),
    );
  });
  // Test case for "Scala" ends here...

  // Test case for "Swift"
  it('should return Swift data based on name "Swift"', () => {
    expect(Language({ name: 'Swift' })).toEqual(LanguageData.filter((language) => language.name === 'Swift'));
  });

  it('should return Swift data based on file extension "swift"', () => {
    expect(Language({ fileExtension: 'swift' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('swift')),
    );
  });
  // Test case for "Swift" ends here...

  // Test case for "TypeScript"
  it('should return TypeScript data based on name "TypeScript"', () => {
    expect(Language({ name: 'TypeScript' })).toEqual(LanguageData.filter((language) => language.name === 'TypeScript'));
  });

  it('should return TypeScript data based on file extension "ts"', () => {
    expect(Language({ fileExtension: 'ts' })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes('ts')),
    );
  });
  // Test case for "TypeScript" ends here...
});
