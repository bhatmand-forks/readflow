import React, { useCallback, ReactNode } from 'react'

import ButtonIcon from './ButtonIcon'

import styles from './Appbar.module.css'

type Props = {
  title?: string
  onClickMenu: Function
  actions?: ReactNode
}

export default ({title, onClickMenu, actions}: Props) => {
  const handleOnClickMenu = useCallback(
    () => onClickMenu(),
    [onClickMenu] 
  )

  return (
    <div className={styles.appBar}>
      <ButtonIcon icon="menu" onClick={handleOnClickMenu} />
      {title && <h1>{title}</h1>}
      {actions}
    </div>
  )
}
