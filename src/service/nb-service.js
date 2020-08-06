export const formatNb = (nb) => {
  nb = nb.replace(/[^\d]/g, '')
  while (nb.length < 10) {
    nb = '0' + nb
  }
  const nbParts = nb.match(/(\d{3}|\d{1})/g)
  return `${nbParts[0]}.${nbParts[1]}.${nbParts[2]}-${nbParts[3]}`
}

export const generateNb = () => {
  let digitoVerificador = 0
  const pesos = [2, 9, 8, 7, 6, 5, 4, 3, 2]
  const nbNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (let i = 0; i < 9; i++) {
    nbNumbers[i] = Math.round(Math.random() * 9)
    digitoVerificador = digitoVerificador + nbNumbers[i] * pesos[i]
  }

  digitoVerificador = digitoVerificador % 11
  if (digitoVerificador === 0 || digitoVerificador === 1) {
    digitoVerificador = 0
  } else {
    digitoVerificador = 11 - digitoVerificador
  }

  nbNumbers[9] = digitoVerificador

  return nbNumbers.join('')
}
