/*
  You have a list of UserRoles used to classify users in your application.
  You want to create an object called RoleDescription that will map each user role to its description.
*/

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type RoleDescription = Record<UserRole, string>;

// Replace the following code with a version using Record
const roleDescription: RoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

export {};
