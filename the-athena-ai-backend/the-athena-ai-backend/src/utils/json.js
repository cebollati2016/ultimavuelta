const closeOf = {
  '"': '"',
  '{': '}',
  '[': ']'
}

export const JSONbalance = (jsonStrInput) => {
  let jsonStr = jsonStrInput.slice().trim()

  const stack = []
  let quotesCount = 0

  for (const i in jsonStr) {
    const l = jsonStr[i]
    const ant = i - 1 >= 0 ? jsonStr[i - 1] : undefined

    if (quotesCount % 2 !== 0 && l !== '"') {
      continue
    }

    if (quotesCount % 2 !== 0 && l === '"' && ant === '\\') {
      continue
    }

    if (['[', '{'].includes(l)) {
      stack.push(l)
    }

    if ([']', '}'].includes(l)) {
      stack.pop()
    }

    if (['"'].includes(l)) {
      if (stack[stack.length - 1] === '[') {
        quotesCount = (quotesCount + 1) % 2
      }

      if (stack[stack.length - 1] === '{') {
        quotesCount = (quotesCount + 1) % 4
      }
    }

    if (['[', '{', ','].includes(l)) {
      quotesCount = 0
    }
  }

  if (jsonStr[jsonStr.length - 1] === ':' && quotesCount % 2 === 0) {
    jsonStr += '""'
    quotesCount = (quotesCount + 2) % 4
  }

  if (jsonStr[jsonStr.length - 1] === ',') {
    jsonStr = jsonStr.slice(0, jsonStr.length - 1)
  }

  if (jsonStr[jsonStr.length - 1] === '.') {
    jsonStr = jsonStr.slice(0, jsonStr.length - 1)
  }

  if (stack[stack.length - 1] === '[') {
    if (quotesCount === 1) {
      jsonStr += '"'
    }
  }

  if (stack[stack.length - 1] === '{') {
    if (quotesCount === 1) {
      jsonStr += '":""'
    }
    if (quotesCount === 2 && jsonStr[jsonStr.length - 1] === '"') {
      jsonStr += ':""'
    }
    if (quotesCount === 3) {
      jsonStr += '"'
    }
  }

  return jsonStr + stack.reverse().map(open => closeOf[open]).join('')
}
