import React, { useState } from 'react'
import { Modal, Upload } from 'antd'
import { UploadProps } from 'antd/lib/upload/Upload'
import { UploadFile } from 'antd/lib/upload/interface'
import { InboxOutlined } from '@ant-design/icons'

const { Dragger } = Upload

interface UploadSourcemapProps {
  trigger: React.ReactElement
  onConfirm?: (files: UploadFile[]) => unknown
}

const UploadSourcemap = (props: UploadSourcemapProps) => {
  const [visible, setVisible] = useState(false)
  const [fileList, setFileLis] = useState([])

  const trigger = React.cloneElement(props.trigger, {
    onClick: () => {
      setVisible(true)
      setFileLis([])
    },
  })

  const onHide = () => setVisible(false)

  const uploadProps: UploadProps = {
    name: 'file',
    method: 'POST',
    withCredentials: true,
    headers: {
      'X-Requested-With': null,
    },
    fileList,
    // 文件上传地址
    action: '//apigw.@url.com/api/spider-fileupload/1.0/upload',
    onChange(info) {
      setFileLis(info.fileList)
    },
  }

  const onConfirm = async () => {
    const finalFileList = fileList.filter(n => n.status === 'done')
    if (finalFileList.length > 0) {
      if (typeof props.onConfirm === 'function') {
        await props.onConfirm(finalFileList.map(n => n.response.result))
      }
    }
    setVisible(false)
  }

  return (
    <>
      {trigger}
      <Modal title="上传source map" onCancel={onHide} onOk={onConfirm} visible={visible}>
        <Dragger {...uploadProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
          </p>
        </Dragger>
      </Modal>
    </>
  )
}

export default UploadSourcemap
