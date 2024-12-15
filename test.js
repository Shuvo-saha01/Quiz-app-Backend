import bcrypt from 'bcrypt';

const hash = "$2b$10$m8hCHeRx2ZUTTPgNfCux.eV3BlhCddtHaxiDOYQpecsv6sMCMXE0i";
const password = "shuvotesting";

bcrypt.compare(password, hash, (err, isMatch) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Password matches:", isMatch); // Should log true if correct
    }
});
