// 1. 手动切换环境
/*
  const BASE_URL = 'http://codexgh.org/prod'
  const BASE_NAME = 'codexgh'
  const BASE_URL = 'http://codexgh.org/dev'
  const BASE_NAME = 'stephen'
  const BASE_URL = 'http://codexgh.org/test'
  const BASE_NAME = 'stephen'
 */

// 2. 工具 process.env.NODE_ENV区分
// 开发环境：development
// 生产环境：production
// 测试环境：test
/*
  let BASE_URL = ''
  let BASE_NAME = ''
  if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://codexgh.org/dev'
    BASE_NAME = 'codexgh'
  } else if (process.env.NODE_ENV === 'production') {
    BASE_URL = 'http://codexgh.org/prod'
    BASE_NAME = 'curry'
  } else {
    BASE_URL = 'http://codexgh.org/test'
    BASE_NAME = 'stephen'
  }

  export { BASE_URL, BASE_NAME }
 */

// 3.
