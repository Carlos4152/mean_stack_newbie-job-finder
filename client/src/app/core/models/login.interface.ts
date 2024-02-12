interface Login {
  userEmail: string,
  password: string
}

interface Data {
  _id: string,
  name: string,
  token: string, 
  email: string,
  message: string
}

export { Login, Data}