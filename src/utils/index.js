export const paramCase = str => str.toLowerCase().replace(` `, `-`)

export const titleCase = str => {
  if (!str || typeof str !== `string`) return str
  return str
    .split(` `)
    .map(word => word[0].toUpperCase() + word.substr(1).toLowerCase())
    .join(` `)
}
