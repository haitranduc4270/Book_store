import type { FC } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import styles from './styles.less'

type Props = {
  value?: string
  onChange?: any
}

const Richtext: FC<Props> = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
    ],
  }

  const formats = [
    'header',
    'font',
    'size',
    'color',
    'background',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ]
  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      className={styles.custom_quill}
      value={value || ''}
      onChange={onChange}
    />
  )
}

export default Richtext
