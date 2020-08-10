import { generateNb, formatNb } from '../../service/nb-service'

describe('NbService', () => {
  const mockRandomSequence = (sequence) => {
    if (typeof sequence === 'string') {
      sequence = sequence.split('').map((item) => Number.parseInt(item))
    }
    sequence.forEach((item) => {
      jest.spyOn(global.Math, 'random').mockReturnValueOnce(item / 9)
    })
  }

  describe('#generate-nb', () => {
    const nbs = [
      '168748529',
      '101297644',
      '700057189',
      '700095016',
      '700095137',
      '700084448',
      '700097959',
      '700098161',
      '700098476',
      '700100656',
    ]
    const nbsWithChecksum = [
      '1687485299',
      '1012976448',
      '7000571897',
      '7000950162',
      '7000951371',
      '7000844486',
      '7000979594',
      '7000981610',
      '7000984768',
      '7001006565',
    ]

    describe(`when generate the NBs ${nbs.join(', ')}`, () => {
      afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
      })

      it(`should generate the NBs with checksum ${nbsWithChecksum.join(
        ', '
      )}`, () => {
        nbs.forEach((nb, i) => {
          mockRandomSequence(nb)
          const generatedNb = generateNb()
          expect(generatedNb).toBe(nbsWithChecksum[i])
        })
      })
    })
  })

  describe('#format-nb', () => {
    describe('when format the nb 1687485299', () => {
      it('should return 168.748.529-9', () => {
        const formatedNb = formatNb('1687485299')
        expect(formatedNb).toBe('168.748.529-9')
      })
    })
  })
})
