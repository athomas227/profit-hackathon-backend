import pgpConstructor from "pg-promise";

const initOptions = {};

const pgp = pgpConstructor(initOptions);
const db = pgp({
  host: "localhost",
  port: 5432,
  database: "swiftswirl",
  user: "clairepetitfrere", 
  password: "Kysim1722!" 
})

export default db;