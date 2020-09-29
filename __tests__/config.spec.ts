import { config } from '../src/config'

describe('config', () => {
  it('should return type of string for port', () => {
    expect(typeof config.port).toBe('string')
  })
  describe('port variable', () => {
    const ENV = process.env
    beforeEach(() => {
      jest.resetModules()
      process.env = { ...ENV }
    })
    afterAll(() => {
      delete process.env.Node
      process.env = ENV
    })
    it('should return port equal to process.env.PORT when present', () => {
      //   process.env.PORT = '1234'
      console.log('port is:', process.env.PORT)

      expect(config.port).toEqual(process.env.PORT)
    })
    // it('should return port equal to 7654 when no process.env.PORT is present', () => {
    //   process.env.PORT = undefined
    //   expect(config.port).toEqual('7654')
    // })
  })
})
