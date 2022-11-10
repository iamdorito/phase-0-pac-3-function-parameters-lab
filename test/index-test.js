
describe('introduction(name)', function() {
  it('takes in an argument of a name and returns a phrase with that name using string interpolation', function() {
    expect(introduction("Dorothy")).toEqual("Hi, my name is Dorothy.");
  })
})
function introduction(name) {
  return(`Hi, my name is ${name}.`);
}

describe('introductionWithLanguage(name, language)', function() {
  it('takes in two arguments, a name and a language, and returns a phrase using those arguments', function() {
    expect(introductionWithLanguage("Dorothy", "JavaScript")).toEqual("Hi, my name is Dorothy and I am learning to program in JavaScript.");
  })
})
function introductionWithLanguage(name, language) {
  return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

describe('introductionWithLanguageOptional(name, language)', function() {
  it('takes in two arguments, a name and a language, and language defaults to JavaScript', function() {
    expect(introductionWithLanguageOptional("Dorothy")).toEqual("Hi, my name is Dorothy and I am learning to program in JavaScript.");
  })
})
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

describe('introductionWithLanguageOptional(name, language)', function() {
  it('takes in two arguments, a name and a language, and the default value can be overridden with an argument', function() {
    expect(introductionWithLanguageOptional("Gracie", "Python")).toEqual("Hi, my name is Gracie and I am learning to program in Python.");
  })
})