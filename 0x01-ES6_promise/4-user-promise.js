export default function signUpUser(firstName, lastName) {
  return new Promise(((myresolve) => {
    myresolve({
      firstName,
      lastName,
    });
  }));
}
