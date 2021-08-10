import React, { useState } from 'react'
import { Button } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import * as styles from './index.module.less'
import Icon from '@/components/Icon'
import { ICONTYPE } from '@/common/constant'

export default function ChoosePlatform({ dataList, onChange }) {
  const [actived, setActived] = useState(-1)
  const itemList = dataList.map((item, index) => (
    <div
      className={[styles.item, index == actived ? styles.active : ''].join(' ')}
      onClick={() => {
        setActived(index)
        onChange(item.platform)
      }}
      key={index}
    >
      <Icon icon={item.icon} type={ICONTYPE.irregular} size={56}></Icon>
      <h3>{item.name}</h3>
      {index == actived && (
        <Button
          type="text"
          icon={<CloseCircleOutlined />}
          className={styles.close}
          onClick={e => {
            setActived(-1)
            onChange(0)
            e.stopPropagation()
          }}
        ></Button>
      )}
    </div>
  ))
  return <div className={styles.contain}>{itemList}</div>
}
