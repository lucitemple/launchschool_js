/* let brendanEichQuote = () => console.log("Always bet on JavaScript.");

brendanEichQuote(); */
// logs:
// Always bet on JavaScript.

/* let cite = (person, quote) => console.log(`${person} said: "${quote}"`);

cite('Brendan Eich', 'Always bet on JavaScript.'); */
// logs:
// Brendan Eich said: "Always bet on JavaScript."

//Write a function that accepts a single argument, a number, and returns the result of multiplying its argument by an exponent of 2 (also known as squaring the number).

/* let squaredNumber = (num) => num ** 2; 
squaredNumber(3); */

//Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length, as in the following example:

/* let compareByLength = (str, str2) => {
    console.log(
    str.length === str2.length ? 0 
    : str.length > str2.length 
    ? 1
    : -1
    );
}
compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0 */

//Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'

//console.log('Captain Ruby'.replace('Ruby', 'JavaScript'));

// Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.

let iso = {
    en: { 
        US: 'Howdy!',
        GB: 'Hello!',
        AU: "G'day"
    },
    fr: 'Salut!',
    pt: 'Ola!',
    de: 'Hallo!',
    sv: 'Hej!',
    af: 'Haai!'
}

let greet = (word) => console.log(iso[word]);

/* greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!' */

//Write a function that extracts the language code from a locale. A locale is a combination of a language code, a region, and usually also a character set, e.g en_US.UTF-8.

let extractLanguage = (locale) => locale.slice(0,2);

// alternative
/* 
function extractLanguage(locale) {
  return locale.split("_")[0];
} */

/* extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko' */

// Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:
let extractRegion = (locale) => locale.slice(3,5);

/*
// alternative
function extractRegion(locale) {
  return locale.split(".")[0].split("_")[1];
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR' */

//Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example:

/* let localGreet = (locale) => {
    let lang = extractLanguage(locale);
    let region = extractRegion(locale);
    console.log( lang === 'en' ? iso[lang][region] : iso[lang]);

} */
/* 
// alternative
function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case "US":
      return "Hey!";
    case "GB":
      return "Hello!";
    case "AU":
      return "Howdy!";
    default:
      return greet(language);
  }
}

localGreet('en_US.UTF-8'); // 'Howdy!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'G'day!'
localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!' */