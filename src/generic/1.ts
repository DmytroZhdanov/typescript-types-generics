/*
  There's a function getPromise() that returns a promise allowing an array containing both strings and numbers.
  Enhance this function using generics to return the correct type.
*/

function getPromise(): Promise<[string, number]> {
  return new Promise(resolve => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data: [string, number]): void => {
  console.log(data);
});

export {};
