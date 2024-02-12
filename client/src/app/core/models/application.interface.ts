export interface Application {
  _id: string,
  company: string,
  position: string,
  location: string,
  salary: string,
  duties: {
    desc: string,
    list: [string]
  }
}