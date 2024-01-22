import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export async function loginDao(userMail: string) {
    try {
        const userInfo = await prisma.user.findFirst({  where : {email : userMail}, select: { email: true, name: true, age:true, isStudent: true, password: true }})
        await prisma.$disconnect()
        return userInfo
    } catch (e) {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    }
}