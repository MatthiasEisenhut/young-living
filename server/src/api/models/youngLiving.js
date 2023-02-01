import { query } from '../../db/index.js';

const dbGetArticles = async () => {
  const { rows } = await query('SELECT * FROM articles');
  return rows;
};

const dbGetProducts = async () => {
  const { rows } = await query(
    'SELECT p.item_number, p.name, p.image, c.name AS category, p.discount, p.price FROM products p JOIN category c ON p.cat_id = c.cat_id',
  );
  return rows;
};

export { dbGetArticles, dbGetProducts };
