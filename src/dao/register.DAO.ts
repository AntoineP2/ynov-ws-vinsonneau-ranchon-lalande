import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export async function registerDao({name, userMail, userPassword, userAge, isStudent}) {
    try {
        const user = await prisma.user.create({
            data : {
                name,
                email: userMail,
                password: userPassword,
                age: userAge,
                isStudent: isStudent
            },
          })
        await prisma.$disconnect()
        return user
    } catch (e) {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    }
}

export async function verifyIsRegister({userMail}) {
    try {
        const user = await prisma.user.findFirst({
            where : {
                email: userMail,
            },
          })
        await prisma.$disconnect()
        return user
    } catch (e) {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    }
}