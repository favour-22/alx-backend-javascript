import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;
  let firstname;
  let lastname;
  return uploadPhoto()
    .then((results) => {
      body = results.body;
      createUser()
        .then((results) => {
          firstname = results.firstName;
          lastname = results.lastName;
          console.log(`${body} ${firstname} ${lastname}`);
        })
        .catch(() => console.log('Signup system offline'));
    })
    .catch(() => console.log('Signup system offline'));
}
