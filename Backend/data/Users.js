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
        isLeaner: true
    },
    {
        firstName : 'Mai Duc',
        lastName : 'Long',
        email: 'mailong@gmail.com',
        accountID: 'mailong',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    }   
]

export default users