export const getContent = (content) => {
  return content
    .replace(/\n/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}