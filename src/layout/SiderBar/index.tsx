import React, { useEffect, useState } from 'react'
import { Layout, Menu, Avatar, Affix, Tooltip } from 'antd'

import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import { getMenuData } from '@/routes/SiderRoutes'
import _ from 'lodash'
import useRoute from '@/hooks/useRoute'
import Icon from '@/components/Icon'
import * as styles from './index.module.less'
import { useThrottle } from '@/hooks/useThrottle'
import styled from 'styled-components'
const { Sider } = Layout

const menuData = getMenuData()
function SiderBar() {
  const route = useRoute()
  const curMenuPath = route.path && `/${route.path.split('/')[1]}`
  const history = useHistory()
  const [menuState, setMenuState] = useState(false)

  function handlerClickMenu(key) {
    history.push(key)
  }

  const throttledMenuState = useThrottle(() => setMenuState(e => !e), 800)

  return route.isShowSiderBar ? (
    <Affix offsetTop={50}>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={!menuState}
        width={50}
        collapsedWidth={50}
        className={styles.siderBar}
      >
        <div>
          {menuData.map(item => {
            return (
              <div key={item.path}>
                <div className={styles.avatarWrapper}>
                  {<div className={item.path == curMenuPath ? styles.leftBarFocused : styles.leftBarNormal} />}
                  <Tooltip placement="right" title={item.name}>
                    <Avatar
                      onClick={() => handlerClickMenu(item.path)}
                      className={item.path == curMenuPath ? styles.avatarFocused : styles.avatar}
                      size={44}
                      icon={<Icon size={22} icon={item.meta && item.meta.icon} />}
                    />
                  </Tooltip>
                </div>
              </div>
            )
          })}
        </div>
      </Sider>
    </Affix>
  ) : null
}
export default React.memo(SiderBar)
