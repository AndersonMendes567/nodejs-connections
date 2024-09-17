import axios from "axios";
import http from 'http'

async function request() {

  const options = {
    httpAgent: new http.Agent({
      keepAlive: true
    })
  }

  try {
    const before = Date.now()
    const resp = await axios.get('http://localhost:3333')
    const elapsed = Date.now() - before
    console.log(resp.data, ' - em ' + elapsed + ' ms')
    console.log(resp.headers)

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

async function request3() {

  const options = {
    httpAgent: new http.Agent({
      keepAlive: true
    })
  }

  const session = 'NERDWHATS_AMERICA'
  const token = 'THISISMYSECURETOKEN'
  const url = `http://localhost:21465/api/${token}/show-all-sessions`

  try {
    const before = Date.now()
    const resp = await axios.get(url)
    const elapsed = Date.now() - before

    console.log(resp.data.response, ' - em ' + elapsed + ' ms')
    //console.log(resp.headers)

  } catch (error) {
    console.log(error)
  }
}

//request2()
setInterval(request2, 10000)
setInterval(request3, 5000)