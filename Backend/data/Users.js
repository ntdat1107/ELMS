import bcrypt from 'bcryptjs'


const users = [
    {
        firstName : 'NgoTien',
        lastName : 'Dat',
        email: 'tiendat@gmail.com',
        accountID: 'tiendat',
        password: bcrypt.hashSync('123456', 10),
        isIns: true
    },
    {
        firstName : 'NgoTien',
        lastName : 'Dat',
        email: 'lamduong@gmail.com',
        accountID: 'lamduong',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        firstName : 'NgoTien',
        lastName : 'Dat',
        email: 'mailong@gmail.com',
        accountID: 'mailong',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    }   
]

export default users