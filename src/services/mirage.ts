import { createServer } from 'miragejs'

export function makeServer ({ environment = 'test' } = {}) {
  const server = createServer({
    environment,

    routes () {
      this.urlPrefix = 'http://localhost:3000'
    }
  })

  return server
}
