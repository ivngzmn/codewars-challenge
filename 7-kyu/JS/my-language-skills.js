/*
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)
Examples

{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
P strings? kinda, ints? kinda, object? Yes
R return the keys/langs that are > 60
E --> See below
P
*/

function myLanguages(results) {
    // let langs = []
    // for (lang in results) {
    //     if (results[lang] >= 60) {
    //         langs.push(lang)
    //     }
    // }
    // return langs // solves but does not sort by lang val
    return Object.keys(results)
        .filter(lang => results[lang] >= 60)
        .sort((a, b) => results[b] - results[a])
}

console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }), ["Ruby", "Python"])
console.log(myLanguages({ "Hindi": 60, "Greek": 71, "Dutch": 93 }), ["Dutch", "Greek", "Hindi"])
console.log(myLanguages({ "C++": 50, "ASM": 10, "Haskell": 20 }), [])