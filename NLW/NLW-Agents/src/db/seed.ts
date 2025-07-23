import { reset, seed } from 'drizzle-seed';

import { db, sql } from './connections.ts';
import { schema } from './schema/index.ts';
import { rooms } from './schema/rooms.ts';
import { ZodSchema } from 'zod/v3';

await reset(db, schema);

await seed(db,schema).refine(f => {
    return {
    rooms: {
        count: 10,
        columns: {
            name:f.companyName(),
            description: f.loremIpsum()
    }
}
}});

await sql.end();


console.log('Database seeded successfully!');