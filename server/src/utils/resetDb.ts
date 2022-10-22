import { prisma } from "./prisma"

const resetDb = async () => {
    await prisma.user.deleteMany();
    await prisma.session.deleteMany();
    await prisma.uploadFood.deleteMany();
    await prisma.orderedFood.deleteMany();
}

resetDb();