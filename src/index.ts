import * as md5 from 'md5'


/**
 * Choose a deterministic random number between 0 and 100
 */
export function randomBin(seed: string): number {
  return parseInt(md5(seed).substring(0, 4), 16) % 100
}


/**
 * Choose a deterministic variant.
 */
export function chooseVariant(trackingId: string, code: string, variants: string[]): string {
  const bin = randomBin(code + trackingId)

  const binSize = 100/variants.length

  for (let i = 0; i < variants.length; i++) {
    if (bin < (i + 1) * binSize) {
      return variants[i]
    }
  }

  return variants[variants.length - 1]
}