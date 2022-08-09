const adresse = ['Groninger Straße', '13347', 'Berlin', 'Berlin']
const freunde = ['Pia', 'Lisa', 'Michelle', 'Beni', 'Karsten', 'Andy', 'Andaras', 'Cyra']
const person = ['Katrin', 'Kleemann', 'Käthe', 35, 'Tanzen & Musik', 'Wonderland', 'SuperCode']

// Arrays "adresse" und "freunde" dem Array "person" hinzufügen
person.push(adresse, freunde)

console.log(person)
console.log('This is the array person inside person: ' + person)
console.log('This is the array adresse inside person: ' + adresse)
console.log('This is the array freunde inside person: ' + freunde)


// Ausgabe des Array "adresse" innerhalb des Arrays "person"
console.log('This is the array adresse inside person: ' + person[7].join(', '))
// Ausgabe des Array "freunde" innerhalb des Arrays "person"
console.log('This is the array freunde inside person: ' + person[8].join(', '))
