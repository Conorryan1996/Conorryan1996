import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@proshop.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'johndoe@proshop.com',
        password: bcrypt.hashSync('123456', 10),

    },
    {
        name: 'Jane Doe',
        email: 'janedoe@proshop.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users