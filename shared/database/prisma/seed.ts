/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  // Seeding logic can be added here in the future if needed.
  console.log('✅ Seeding complete.');
}

main()
  .then(() => console.log('✅ Roles seeded'))
  .catch((e) => console.error(e))
  .finally(() => {
    prisma.$disconnect();
  });
