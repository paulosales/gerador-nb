import { generateNb, formatNb } from '../../service/nb-service'

describe('NbService', () => {
  describe('#generate-nb', () => {
    describe('when generate a new NB', () => {
      beforeEach(() => {
        jest
          .spyOn(global.Math, 'random')
          .mockReturnValueOnce(0.111)
          .mockReturnValueOnce(0.666)
          .mockReturnValueOnce(0.888)
          .mockReturnValueOnce(0.777)
          .mockReturnValueOnce(0.444)
          .mockReturnValueOnce(0.888)
          .mockReturnValueOnce(0.555)
          .mockReturnValueOnce(0.222)
          .mockReturnValueOnce(0.999)
      })

      afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
      })

      it('should generate a correct checksum', () => {
        const nb = generateNb()
        expect(nb).toBe('1687485299')
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
