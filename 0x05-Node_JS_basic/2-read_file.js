const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line); // Filter out empty lines

    // Get the headers and remove the first column (ID)
    const headers = lines[0].split(',').slice(1);

    // Count the number of students in each field
    const counts = {};
    for (const header of headers) {
      counts[header] = 0;
    }
    for (const line of lines.slice(1)) {
      const fields = line.split(',');
      for (let i = 1; i < fields.length; i++) {
        const field = headers[i - 1];
        if (fields[i].trim()) {
          counts[field]++;
        }
      }
    }

    // Log the results
    console.log(`Number of students: ${lines.length - 1}`);
    for (const [field, count] of Object.entries(counts)) {
      const list = lines.slice(1)
        .filter((line) => line.split(',')[headers.indexOf(field) + 1].trim())
        .map((line) => line.split(',')[0])
        .join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    }
  } catch (err) {
    console.error(`Cannot load the database: ${err}`);
  }
}

countStudents('database.csv');
