import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    await knex('products').del();

    await knex('products').insert([
        { name: 'Four-cheese gnocchi', price: 45 },
        { name: 'Chicken strips', price: 60 },
        { name: 'Tilapia with capers', price: 100 },
        { name: 'Shredded beef casserole', price: 75 },
        { name: 'French fries portion', price: 65 },
        { name: 'Grilled chicken executive meal', price: 40 },
        { name: 'Grilled tilapia executive meal', price: 39 },
        { name: 'Hearts of palm soup', price: 30 },
        { name: 'Soda 350ml', price: 7.5 },
        { name: 'Orange juice 440ml', price: 10 },
    ]);
}
