export function slugFormatter(name: string) {
  const removeSpecialCharacters = name
    .replace('ç', 'c')
    .replace('ã', 'a')
    .replace('õ', 'o')
  const toLowerCaseName = removeSpecialCharacters.toLowerCase()
  const slug = toLowerCaseName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, '')
    .replace(/ +/g, '-')

  return slug
}
