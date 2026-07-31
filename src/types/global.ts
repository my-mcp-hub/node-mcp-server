export interface ServerOptions {
  name: string
  version: string
}

export interface WebServerOptions extends ServerOptions {
  port: number
}
