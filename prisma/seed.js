const { PrismaClient } = require("@prisma/client")
const { v4: uuidv4 } = require("uuid")
const bcrypt = require("bcrypt")

const prisma = new PrismaClient()

async function seed() {
  const hash = await bcrypt.hash('mrkdvdbgyn', parseInt(process.env.BCRYPT_SALT_ROUNDS))
  await prisma.user.create({
    data: {
      user_uuid: uuidv4(),
      user_firstname: "Mark David",
      user_lastname: "Bogayan",
      user_email: "admin@gmail.com",
      user_username: "admin",
      user_password: hash
    }
  })
}

seed()
