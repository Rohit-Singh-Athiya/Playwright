async function generateEmail(): Promise<string> {
  const time = new Date().getTime();
  const email = time + '@test.com';
  return email;
};

export { generateEmail };