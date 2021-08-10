import React from 'react'
import { Modal, Button, Transfer, Switch, Table, Tag } from 'antd'
import _ from 'lodash'

export default function TableTransfer({ leftColumns, rightColumns, ...restProps }) {
  return (
    <Transfer {...restProps} showSelectAll={false}>
      {({
        direction,
        filteredItems,
        onItemSelectAll,
        onItemSelect,
        selectedKeys: listSelectedKeys,
        disabled: listDisabled,
      }) => {
        const columns = direction === 'left' ? leftColumns : rightColumns

        const rowSelection = {
          getCheckboxProps: item => ({ disabled: listDisabled || item.disabled }),
          onSelectAll(selected, selectedRows) {
            const treeSelectedKeys = selectedRows.filter(item => !item.disabled).map(({ key }) => key)
            const diffKeys = selected
              ? _.difference(treeSelectedKeys, listSelectedKeys)
              : _.difference(listSelectedKeys, treeSelectedKeys)
            onItemSelectAll(diffKeys, selected)
          },
          onSelect({ key }, selected) {
            onItemSelect(key, selected)
          },
          selectedRowKeys: listSelectedKeys,
        }

        return (
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={filteredItems}
            size="small"
            style={{ pointerEvents: listDisabled ? 'none' : null }}
            onRow={({ key, disabled: itemDisabled }) => ({
              onClick: () => {
                if (itemDisabled || listDisabled) return
                onItemSelect(key, !listSelectedKeys.includes(key))
              },
            })}
          />
        )
      }}
    </Transfer>
  )
}
