const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const runMigrations = async function () {
  return new Promise((resolve, reject) => {
    const migrate = exec(
      "npx sequelize-cli db:migrate",
      { env: process.env },
      (err) => (err ? reject(err) : resolve())
    );
  });
};

// module.exports.removeTestDB = async function () {
//   return new Promise((resolve, reject) => {
//     const deleteDB = exec(
//       `del ${process.env.DB_FILE}`,
//       { env: process.env },
//       (err) => (err ? reject(err) : resolve())
//     );
//   });
// };

async function removeTestDB() {
  const filePath = path.resolve(process.env.DB_FILE);
  try {
    await fs.unlink(filePath);
    console.log(`Successfully deleted: ${filePath}`);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(`File not found: ${filePath}`);
    } else {
      console.log(`file found`);
    }
  }
}

module.exports = {
  runMigrations,
  removeTestDB,
};
