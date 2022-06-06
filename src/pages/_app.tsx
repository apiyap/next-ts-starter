import '../styles/app.scss'
import '../styles/globals.css'
import {
  Configuration,
  ConfigurableIcons,
  ArrowDropDownSVGIcon,
  CheckBoxSVGIcon,
  KeyboardArrowDownSVGIcon,
  KeyboardArrowLeftSVGIcon,
  KeyboardArrowRightSVGIcon,
  MenuSVGIcon,
  NotificationsSVGIcon,
  RadioButtonCheckedSVGIcon,
  RemoveRedEyeSVGIcon,
  ArrowUpwardSVGIcon,
  CheckSVGIcon,
} from 'react-md'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '../app/store'

const icons: ConfigurableIcons = {
  back: <KeyboardArrowLeftSVGIcon />,
  checkbox: <CheckBoxSVGIcon />,
  dropdown: <ArrowDropDownSVGIcon />,
  expander: <KeyboardArrowDownSVGIcon />,
  forward: <KeyboardArrowRightSVGIcon />,
  menu: <MenuSVGIcon />,
  notification: <NotificationsSVGIcon />,
  radio: <RadioButtonCheckedSVGIcon />,
  password: <RemoveRedEyeSVGIcon />,
  selected: <CheckSVGIcon />,
  sort: <ArrowUpwardSVGIcon />,
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Configuration icons={icons}>
        <Component {...pageProps} />
      </Configuration>
    </Provider>
  )
}

export default MyApp
