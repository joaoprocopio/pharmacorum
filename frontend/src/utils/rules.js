export const rules = {
  required: () => {
    return (value) => !!value || "Required field."
  },
  minimumLength: (length) => {
    return (value) =>
      (value && value.length >= length) ||
      `Must be at least ${length} characters long.`
  },
}
