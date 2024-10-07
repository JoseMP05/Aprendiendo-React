const ENDPINT_RAMDOM_FACT = 'https://catfact.ninja/fact'

// In this way this method is reusable and can be used in any component
export const getRandomFact = async () => {
  const res = await fetch(ENDPINT_RAMDOM_FACT)
  const data = await res.json()
  return data.fact
}