/*
  You have a type Form that contains information about a form, including the 'errors' field.
  You want to create a new type Params that includes all fields from Form except 'errors'.
*/

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Implement Params to prevent the inclusion of the 'errors' field from the Form type
type Params = Omit<Form, "errors">;

export {};
