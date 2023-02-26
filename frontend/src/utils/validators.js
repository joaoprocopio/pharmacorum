export const validators = {
  required: () => {
    return (field) => !!field || "This field is required."
  },
  username: () => {
    const regex = /^[\w.@+-]+$/
    return (username) =>
      regex.test(username) || `${username} isn't a valid username`
  },
  email: () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return (email) => regex.test(email) || `${email} isn't a valid email.`
  },
  notEntirelyNumeric: () => {
    const regex = /^\d+$/
    return (field) =>
      !regex.test(field) || "This field shouldn't be completely numeric."
  },
  minimumLength: (length) => {
    return (field) =>
      field.length >= length ||
      `This field should be at least ${length} characters long.`
  },
}
