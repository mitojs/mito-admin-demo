import React from 'react'
import RegisterForm from '../components/RegisterForm'
import TranslateSwitch from '@/components/TransSwitch'

import { useSelector } from 'react-redux'
import { Translation } from '../utils/translation'
import { RootState } from '@/store/index.type'
import { LoginHeader } from '@/modules/Login/components/LoginHeader'

import registerImage from '@/assets/images/register.png'
import * as styles from './index.module.less'

export default function Register() {
  const lang = useSelector((state: RootState) => state.global.lang)

  return (
    <>
      <LoginHeader />
      <div id={styles.register}>
        {/* 翻译按钮 */}
        <div className={styles.translation}>
          <TranslateSwitch />
        </div>

        {/* 注册表单 */}
        <div className={styles.registerForm}>
          {/* 注册图片 */}
          <img src={registerImage} className={styles.registerImage} />
          <div>
            {/* title */}
            <h1 className={styles.registerTitle}>{Translation.registerWelcome[lang]}</h1>

            {/* 表单本体 */}
            <div className={styles.formProperty}>
              <RegisterForm />
            </div>
          </div>
        </div>

        <div className={styles.copyRight}>{Translation.copyRight[lang]}</div>
      </div>
    </>
  )
}
