export function stringToSlug(text: string) {
  var from =
      'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ',
    to =
      'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy'
  for (var i = 0, l = from.length; i < l; i++) {
    text = text.replace(RegExp(from[i], 'gi'), to[i])
  }

  text = text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-]/g, ' ')
    .replace(/-+/g, ' ')

  return text
}

export const handleGenerateId = (name: string, birthday: string) => {
  const namePatterns = stringToSlug(name).trim().replace(/\s+/g, ' ').split(' ')

  let result =
    birthday.substring(0, 2) +
    birthday.substring(3, 5) +
    birthday.substring(8, 10)
  result += namePatterns[namePatterns.length - 1]
  for (let i = 0; i < namePatterns.length - 1; i++) {
    result += namePatterns[i][0]
  }

  return result
}
