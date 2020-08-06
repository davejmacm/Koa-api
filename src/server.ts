import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from 'koa2-cors'
import logger from 'koa-logger'

const app = new Koa()

const PORT = process.env.PORT || 7654

app.use(bodyParser())
app.use(
  cors({
    origin: '*',
  })
)
app.use(logger())

//router for info -- will have own file later
import Router from 'koa-router'
const router = new Router()

router.get('/', async (ctx) => {
  try {
    ctx.body = {
      status: 'success',
    }
  } catch (e) {
    console.error(e)
  }
})

app.use(router.routes())

const server = app
  .listen(PORT, async () => {
    console.log(`server listening on port: ${PORT}`)
  })
  .on('error', (err) => {
    console.log(err)
  })

export default server
