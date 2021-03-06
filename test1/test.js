// β Bad Code π©
function getResult(score) {
    let result;
    if (score > 5) {
        result = 'π';
    } else {
        result = 'π';
    }
    return result;
}

// π Good Code π
function getResult(score) {
    return score > 5 ? 'π' : 'π';
}
// -----------------------------------------------------------------------------

// β Bad Code π©
function printMessage(text) {
    let message = text;
    if (text == null || text == undefined) {
        message = 'Nothing to display π';
    }
    console.log(message);
}

// π Good Code π
function printMessage(text) {
    const message = text ?? 'Nothing to display π'; // textκ° μλ€λ©΄ textλ₯Ό κ·Έλλ‘ μ°κ³ , μμΌλ©΄ nothing to displayλ₯Ό μ
    console.log(message);
}

printMessage('Hello');
printMessage(null);
printMessage(undefined);

// ------------------------------------------------------------------------------

const person = {
    name: 'Julia',
    age: 20,
    phone: '0107777777',
};

// β Bad Code π©
function displayPerson(person) {
    displayAvatar(person.name);
    displayName(person.name);
    displayProfile(person.name, person.age);
}

// π Good Code π
function displayPerson(person) {
    const {name, age, phone} = person;
    displayAvatar(name);
    displayName(name);
    displayProfile(name, age);
}
// ------------------------------------------------------------------------------
// β Bad Code π©
function displayJobTitle(person) {
    if (person.job && person.job.title) {
        console.log(person.job.title);
    }
}

// π Good Code π
function displayJobTitle(person) {
    const title = person.job?.title ?? 'No Job Yet π₯';
    console.log(title);
}

// -------------------------------------------------------------------------------
// β Bad Code π©
console.log('Hello ' + person.name + ', Your current score is: ' + person.score);

// π Good Code π
function greetings(person) {
    const {name, score} = person;
    console.log(`Hello ${name}, Your current score is: ${score}`);
}

// --------------------------------------------------------------------------------
const items = [1, 2, 3, 4, 5, 6];

// μ§μλ§ μ°Ύμμ κ·Έ μ«μλ€μ 4λ‘ κ³±ν΄μ ν©μ κ΅¬νμμ€
// β Bad Code π©
function getAllEvens(items) {
    return items.filter(num => num % 2 === 0);
}

function multiplyByFour(items) {
    return items.map((num) => num * 4);
}

function sumArray(items) {
    items.reduce((a, b) => a + b, 0);
}

// π Good Code π
const evens = items.filter((num) => num % 2 === 0);
const multiple = envens.map((num) => num * 4); // μμ
const sum = multiple.reduce((a, b) => a + b, 0); // λμ κ°, νμ¬κ° , μ΄κΉκ°
console.log(sum);

// π Good Code π
const result = items
.filter((num) => num % 2 === 0)
.map((num) => num * 4)
.reduce((a, b) => a + b, 0);
console.log(result);

// -----Promise => Async/await------------------------------------------------------
// β Bad Code π©
function displayUser() {
    fetchUser()
        .then((user) => {
            fetchProfile(user)
                .then((profile) => {
                    updateUI(user, profile);
        });
    });
}

// π Good Code π
async function displayUser() {
    const user = await fetchUser();
    const profile = await fetchProfile(user);
    updateUI(user, profile);
}

// -----μ€λ³΅ μ κ±°-------------------------------------------------------------------
const array = ['a', 'b', 'c', 'd','a'];
console.log(array);

// π Good Code π
console.log([...new Set(array)]);