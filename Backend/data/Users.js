import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Ngo Tien Dat',
        email: 'tiendat@gmail.com',
        accountID: 'tiendat',
        password: bcrypt.hashSync('123456', 10),
        isIns: true
    },
    {
        name: 'Lam Thanh Duong',
        email: 'lamduong@gmail.com',
        accountID: 'lamduong',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Mai Duc Long',
        email: 'mailong@gmail.com',
        accountID: 'mailong',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    }   
]

export default users