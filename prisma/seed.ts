/* eslint-disable prettier/prettier */
import { PrismaClient, RoleName } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const roles = [
    'ADMIN',
    'FARMER',
    'ORGANIZATION',
    'INVESTOR',
    'SUPPLIER',
    'MANUFACTURER',
  ];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role as RoleName },
      update: {},
      create: { name: role as RoleName },
    });
  }
}

main()
  .then(() => console.log('✅ Roles seeded'))
  .catch((e) => console.error(e))
  .finally(() => {
    prisma.$disconnect();
  });
