/*
  You have a user registration form.
  Sometimes it's necessary to prefill the form with user data for updating their profile.
  However, it's not always necessary to fill in all the fields. For instance, a user might only want to update their email and password,
  leaving their name and surname unchanged.

  Fix the type in the function argument to avoid type errors.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  // User Update
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });

export {};
