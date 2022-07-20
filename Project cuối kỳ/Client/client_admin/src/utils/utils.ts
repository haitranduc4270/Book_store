import { Modal } from 'antd'
import { parse } from 'querystring'
import { formatMessage } from 'umi'

const reg =
  /(((^https?:(?:\/\/)?)(?:[-;:&=\\+\\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\\+\\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\\+~%\\/.\w-_]*)?\??(?:[-\\+=&;%@.\w_]*)#?(?:[\w]*))?)$/

export const isUrl = (path: string): boolean => reg.test(path)

export const getPageQuery = () => parse(window.location.href.split('?')[1])

export const API_URL = 'https://e-service-bookstore-test.herokuapp.com/api/v1' // localhost
// export const API_URL = 'https://eps-api.2soft.top/api/admin'
// export const API_URL = 'https://eps-stg-api.2soft.top/api/admin'
// export const API_URL = 'http://localhost:3000/api/admin'

export const modalConfirmDelete = (onOk?: any) => {
  Modal.confirm({
    title: formatMessage({ id: 'button.delete.selected.confirm' }),
    okText: formatMessage({ id: 'button.yes' }),
    okType: 'danger',
    cancelText: formatMessage({ id: 'button.cancel' }),
    onOk,
  })
}

export const modalApproved = (onOk?: any) => {
  Modal.confirm({
    title: 'Bạn có muốn duyệt nội dung này ?',
    okText: formatMessage({ id: 'button.yes' }),
    okType: 'primary',
    cancelText: formatMessage({ id: 'button.cancel' }),
    onOk,
  })
}

export const convertPosition = (value: any) => {
  switch (value) {
    case 'EMPLOYEE':
      return 'Nhân viên'
    case 'PROJECT_MANAGER':
      return 'Quản lý dự án'
    case 'TEAM_LEAD':
      return 'Trưởng nhóm'
    case 'PARTTIME_EMPLOYEE':
      return 'Nhân viên bán thời gian'
    case 'REMOTE_EMPLOYEE':
      return 'Nhân viên làm từ xa'
    default:
      return ''
  }
}

export const nonAccent = (str: string = '') => {
  let string = str
  string = string.toLowerCase()
  string = string.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  string = string.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  string = string.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  string = string.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  string = string.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  string = string.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  string = string.replace(/đ/g, 'd')
  string = string.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '')
  string = string.replace(/\u02C6|\u0306|\u031B/g, '')
  return string
}
