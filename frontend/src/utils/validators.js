export const validators = {
  required: () => {
    return (value) => !!value || "Required field."
  },
  email: (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email) || `${email} isn't a valid email.`
  },
  minimumLength: (length) => {
    return (value) =>
      (value && value.length >= length) ||
      `Must be at least ${length} characters long.`
  },
}
