module.exports = {
  customerList: `select * from customers`,
  customerInsert: `INSERT INTO customers SET ?`,
  customerUpdate: `UPDATE customers SET ? WHERE id = ?`,
  customerDelete: `DELETE FROM customers WHERE id = ?`,
  customerSelect: `SELECT * FROM customers WHERE email = ?`,
};
