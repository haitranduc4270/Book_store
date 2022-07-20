export type Type2faToken = {
  QRCodeImage: string
}
export type TypeDataGenerateQR = {
  status: number,
  data?: Type2faToken
}
