import renameFile from '../index';

const sampleFileName = 'sample-file-name';
const pascalCaseFileName = 'SampleFileName';
const camelCaseFileName = 'sampleFileName';
const snakeCaseFileName = 'sample_file_name';
const kebabCaseFileName = 'sample-file-name';

describe('Rename File', () => {
  // Test case for "C"
  it(`should rename ${sampleFileName}.c to ${pascalCaseFileName}.c`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.c` })).toEqual(`${pascalCaseFileName}.c`);
  });

  // Test case for "C#"
  it(`should rename ${sampleFileName}.cs to ${pascalCaseFileName}.cs`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.cs` })).toEqual(`${pascalCaseFileName}.cs`);
  });

  // Test case for "C++"
  it(`should rename ${sampleFileName}.cpp to ${pascalCaseFileName}.cpp`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.cpp` })).toEqual(`${pascalCaseFileName}.cpp`);
  });

  // Test case for "Dart"
  it(`should rename ${sampleFileName}.dart to ${pascalCaseFileName}.dart`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.dart` })).toEqual(`${pascalCaseFileName}.dart`);
  });

  // Test case for "F#"
  it(`should rename ${sampleFileName}.fs to ${pascalCaseFileName}.fs`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.fs` })).toEqual(`${pascalCaseFileName}.fs`);
  });

  // Test case for "GO"
  it(`should rename ${sampleFileName}.go to ${snakeCaseFileName}.go`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.go` })).toEqual(`${snakeCaseFileName}.go`);
  });

  // Test case for "Haskell"
  it(`should rename ${sampleFileName}.hs to ${snakeCaseFileName}.hs`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.hs` })).toEqual(`${snakeCaseFileName}.hs`);
  });

  // Test case for "Java"
  it(`should rename ${sampleFileName}.java to ${pascalCaseFileName}.java`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.java` })).toEqual(`${pascalCaseFileName}.java`);
  });

  // Test case for "JavaScript"
  it(`should rename ${sampleFileName}.js to ${pascalCaseFileName}.js`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.js` })).toEqual(`${pascalCaseFileName}.js`);
  });

  // Test case for "Julia"
  it(`should rename ${sampleFileName}.jl to ${snakeCaseFileName}.jl`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.jl` })).toEqual(`${snakeCaseFileName}.jl`);
  });

  // Test case for "Kotlin"
  it(`should rename ${sampleFileName}.kt to ${pascalCaseFileName}.kt`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.kt` })).toEqual(`${pascalCaseFileName}.kt`);
  });

  // Test case for "Perl"
  it(`should rename ${sampleFileName}.pl to ${snakeCaseFileName}.pl`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.pl` })).toEqual(`${snakeCaseFileName}.pl`);
  });

  // Test case for "PHP"
  it(`should rename ${sampleFileName}.php to ${snakeCaseFileName}.php`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.php` })).toEqual(`${snakeCaseFileName}.php`);
  });

  // Test case for "Python"
  it(`should rename ${sampleFileName}.py to ${snakeCaseFileName}.py`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.py` })).toEqual(`${snakeCaseFileName}.py`);
  });

  // Test case for "R"
  it(`should rename ${sampleFileName}.r to ${snakeCaseFileName}.r`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.r` })).toEqual(`${snakeCaseFileName}.r`);
  });

  // Test case for "Ruby"
  it(`should rename ${sampleFileName}.rb to ${pascalCaseFileName}.rb`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.rb` })).toEqual(`${pascalCaseFileName}.rb`);
  });

  // Test case for "Rust"
  it(`should rename ${sampleFileName}.rs to ${snakeCaseFileName}.rs`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.rs` })).toEqual(`${snakeCaseFileName}.rs`);
  });

  // Test case for "Scala"
  it(`should rename ${sampleFileName}.scala to ${camelCaseFileName}.scala`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.scala` })).toEqual(`${camelCaseFileName}.scala`);
  });

  // Test case for "Swift"
  it(`should rename ${sampleFileName}.swift to ${pascalCaseFileName}.swift`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.swift` })).toEqual(`${pascalCaseFileName}.swift`);
  });

  // Test case for "TypeScript"
  it(`should rename ${sampleFileName}.ts to ${pascalCaseFileName}.ts`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.ts` })).toEqual(`${pascalCaseFileName}.ts`);
  });
});
