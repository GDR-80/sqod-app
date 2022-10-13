export const reverseJoiErrorObject = (details) => {
  const errorsMod = {};

  details.forEach((error) => {
    errorsMod[error.context.key] = error.message;
  });

  return errorsMod;
};
