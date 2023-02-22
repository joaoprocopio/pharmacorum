export const validators = {
  required: () => {
    return (value) => !!value || "Required field."
  },
  email: (email) => {
    const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/
    return regex.test(email) || `${email} isn't a valid email.`
  },
  minimumLength: (length) => {
    return (value) =>
      (value && value.length >= length) ||
      `Must be at least ${length} characters long.`
  },
}
