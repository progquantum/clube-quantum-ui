export const UNAUTHORIZED_ROUTES = [
  {
    route: '/sessions',
    method: 'post'
  },
  {
    route: '/users/individual-persons',
    method: 'post'
  },
  {
    route: '/users/legal-persons',
    method: 'post'
  },
  {
    route: '/support/institutional-contact',
    method: 'post'
  },
  {
    route: '/passwords/recovery-request',
    method: 'post'
  },
  {
    route: '/phones/create-code',
    method: 'post'
  },
  {
    route: '/passwords/reset',
    method: 'patch'
  },
  {
    route: '/phones/check-code',
    method: 'put'
  }
]
