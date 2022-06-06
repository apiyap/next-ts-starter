import type { ReactElement } from 'react'
import cn from 'classnames'
import type { ButtonThemeProps } from '@react-md/button'
import { buttonThemeClassNames } from '@react-md/button'
import type { LinkProps } from '@react-md/link'
import { Link } from '@react-md/link'

import button_styles from './WithButtonStyles.module.scss'

function LinkStyledButton({
    className,
    theme,
    themeType,
    buttonType,
    disabled,
    children,
  
    ...props
  }: ButtonThemeProps & LinkProps): ReactElement {
    return (
      <Link
        {...props}
        className={buttonThemeClassNames({
          disabled,
          theme,
          themeType,
          buttonType,
          className: cn(button_styles.link, className),
        })}
      >
        {children}
      </Link>
    )
  }
  
  LinkStyledButton.defaultProps = {
    theme: 'primary',
    themeType: 'contained',
    buttonType: 'text',
  }


  export default LinkStyledButton