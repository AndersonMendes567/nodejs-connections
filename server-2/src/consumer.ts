import axios from "axios";
import http from 'http'

async function request() {

  const options = {
    httpAgent: new http.Agent()
  }

  try {
    const before = Date.now()
    const resp = await axios.get('http://localhost:3333')
    const elapsed = Date.now() - before
    console.log(resp.data, ' - em ' + elapsed + ' ms')
    //console.log(resp.headers)

  } catch (error) {
    console.log(error)
  }
}

async function request2() {

  const options = {
    httpAgent: new http.Agent({
      keepAlive: true
    })
  }

  const session = 'NERDWHATS_AMERICA'
  const token = 'THISISMYSECURETOKEN'
  const url = `http://localhost:21465/api/${session}/${token}/generate-token`

  try {
    const before = Date.now()
    const resp = await axios.post(url, null)
    const elapsed = Date.now() - before

    console.log(resp.data.status, ' - em ' + elapsed + ' ms')
    //console.log(resp.headers)

  } catch (error) {
    console.log(error)
  }
}

request()
setInterval(request, 1000)