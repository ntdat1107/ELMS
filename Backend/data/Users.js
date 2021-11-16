import bcrypt from 'bcryptjs'


const users = [
    {
        firstName : 'Ngo Tien',
        lastName : 'Dat',
        email: 'tiendat@gmail.com',
        accountID: 'tiendat',
        password: bcrypt.hashSync('123456', 10),
        isIns: true
    },
    {
        firstName : 'Lam Thanh',
        lastName : 'Duong',
        email: 'lamduong@gmail.com',
        accountID: 'lamduong',
        password: bcrypt.hashSync('123456', 10),
        isLearner: true
    },
    {
        firstName : 'Mai Duc',
        lastName : 'Long',
        email: 'mailong@gmail.com',
        accountID: 'mailong',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        firstName : 'Ngu Quan',
        lastName : 'Linh',
        email: 'ridfrock@gmail.com',
        accountID: 'ridfrock',
        password: bcrypt.hashSync('asdsferrgg123', 10),
        isLearner: true
    },
    {
        firstName : 'Jenna',
        lastName : 'OMoore',
        email: 'cheerfulpaperclips@gmail.com',
        accountID: 'cheerfulpaperclips',
        password: bcrypt.hashSync('lingoas', 10),
        isLearner: true
    },
    {
        firstName : 'Joshua',
        lastName : 'Murray',
        email: 'risottogarbage@gmail.com',
        accountID: 'risottogarbage',
        password: bcrypt.hashSync('asdsferrgg123', 10),
        isLearner: true
    },
    {
        firstName : 'John',
        lastName : 'Thomas',
        email: 'accountantowner@gmail.com',
        accountID: 'accountantowner',
        password: bcrypt.hashSync('lingoas', 10),
        isLearner: true
    },
    {
        firstName : 'Hamza',
        lastName : 'Murray',
        email: 'fossilbum@gmail.com',
        accountID: 'fossilbum',
        password: bcrypt.hashSync('lingoas', 10),
        isLearner: true
    },
    {
        firstName : 'Katrina',
        lastName : 'William',
        email: 'dingybend@gmail.com',
        accountID: 'dingybend',
        password: bcrypt.hashSync('asdsferrgg123', 10),
        isLearner: true
    },
    {
        firstName : 'Sebastian',
        lastName : 'Robert',
        email: 'Remontant@gmail.com',
        accountID: 'Remontant',
        password: bcrypt.hashSync('hello123', 10),
        isLearner: true
    },
    {
        firstName : 'Spencer',
        lastName : 'James',
        email: 'Behoove@gmail.com',
        accountID: 'Behoove',
        password: bcrypt.hashSync('asdsferrgg123', 10),
        isLearner: true
    },
    {
        firstName : 'Sonny',
        lastName : 'Joseph',
        email: 'Ubiquitous@gmail.com',
        accountID: 'Ubiquitous',
        password: bcrypt.hashSync('asdsferrgg123', 10),
        isLearner: true
    },
    {
        firstName : 'Seth',
        lastName : 'Antonio',
        email: 'Thuggee@gmail.com',
        accountID: 'Thuggee',
        password: bcrypt.hashSync('hello123', 10),
        isLearner: true
    },
    {
        firstName : 'Sean',
        lastName : 'George',
        email: 'IairFuligo@gmail.com',
        accountID: 'IairFuligo',
        password: bcrypt.hashSync('hello123', 10),
        isLearner: true
    },
    {
        firstName : 'Scott',
        lastName : 'Albert',
        email: 'Boondocks@gmail.com',
        accountID: 'Boondocks',
        password: bcrypt.hashSync('hello123', 10),
        isLearner: true
    },
    {
        firstName : 'Seth',
        lastName : 'Aaron',
        email: 'Hobbish@gmail.com',
        accountID: 'Hobbish',
        password: bcrypt.hashSync('asdsferrgg123', 10),
        isLearner: true
    },
    {
        firstName : 'Ben',
        lastName : 'Adam',
        email: 'lamduong@gmail.com',
        accountID: 'dingybend',
        password: bcrypt.hashSync('hello123', 10),
        isLearner: true
    },
    {
        firstName : 'Nathan',
        lastName : 'Abram',
        email: 'Succubus@gmail.com',
        accountID: 'Succubus',
        password: bcrypt.hashSync('asdsferrgg123', 10),
        isLearner: true
    },
    {
        firstName : 'Owen',
        lastName : 'Abraham',
        email: 'Cliometrics@gmail.com',
        accountID: 'Cliometrics',
        password: bcrypt.hashSync('jfuut7664', 10),
        isLearner: true
    },
    {
        firstName : 'Christian',
        lastName : 'Alfred',
        email: 'Dodecahedron@gmail.com',
        accountID: 'Dodecahedron',
        password: bcrypt.hashSync('asdsferrgg123', 10),
        isLearner: true
    },
    {
        firstName : 'Stephen',
        lastName : 'Arthur',
        email: 'lamduong@gmail.com',
        accountID: 'dingybend',
        password: bcrypt.hashSync('jfuut7664', 10),
        isLearner: true
    },
    {
        firstName : 'Shaun',
        lastName : 'Alexander',
        email: 'Curmudgeon@gmail.com',
        accountID: 'Curmudgeon',
        password: bcrypt.hashSync('jfuut7664', 10),
        isLearner: true
    },
    {
        firstName : 'Maximilian ',
        lastName : 'Andrew',
        email: 'Hogwash@gmail.com',
        accountID: 'Hogwash',
        password: bcrypt.hashSync('jfuut7664', 10),
        isLearner: true
    },
    {
        firstName : 'Finn',
        lastName : 'Ethan',
        email: 'Slangwhanger@gmail.com',
        accountID: 'Slangwhanger',
        password: bcrypt.hashSync('hello123', 10),
        isLearner: true
    },


]

export default users