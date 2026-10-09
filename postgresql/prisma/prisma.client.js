import 'dotenv/config';
import { PrismaClient } from '../src/generated/client.js';
import { PrismaPg } from '@prisma/adapter-pg';

//setup the adapter
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
//initialize prisma with adpater
const prisma = new PrismaClient({ adapter });
//export global prisma api
export default prisma;