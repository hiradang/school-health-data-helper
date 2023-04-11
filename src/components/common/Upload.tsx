import { UploadOutlined } from '@ant-design/icons'
import { Button, message, Upload } from 'antd'
import React, { useState } from 'react'
import * as XLSX from 'xlsx'

const UploadInput: React.FC = () => {
  const [data, setData] = useState<any>()

  const handleOnChange = (e: any) => {
    if (e.file.status !== 'uploading') {
    }
    if (e.file.status === 'done') {
      message.success(`${e.file.name} file uploaded successfully`)
    } else if (e.file.status === 'error') {
      message.error(`${e.file.name} file upload failed.`)
    }
  }

  return (
    <Upload onChange={handleOnChange}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
      {data}
    </Upload>
  )
}

export default UploadInput
