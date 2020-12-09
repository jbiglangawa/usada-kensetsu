import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'

const langOptions = [
  { key: 'English', text: 'ENG', value: 'en' },
  { key: 'Spanish', text: 'ESP', value: 'es' },
  { key: 'Indonesian', text: 'ID', value: 'id' },
  { key: 'Japanese', text: '日本語', value: 'ja' },
]

const LanguageOptions = (mobile) => {
    const [t, i18n] = useTranslation()
    const pointer = mobile ? "top right" : false

    const changeLanguage = (e, {value}) => {
        i18n.changeLanguage(value)
    }

    return (
        <>
        <Icon name="world" />
        <Dropdown
            onChange={(e, data) => changeLanguage(e, data)}
            pointing={pointer}
            floating
            labeled
            options={langOptions}
            defaultValue={i18n.language}
        />
        </>
    )
}

export default LanguageOptions;