import React, { useState } from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'

const langOptions = [
  { key: 'English', text: 'ENG', value: 'en' },
  { key: 'Spanish', text: 'ESP', value: 'es' },
  { key: 'Indonesian', text: 'ID', value: 'id' },
  { key: 'Japanese', text: '日本語', value: 'ja' },
]

const LanguageOptions = (mobile) => {
    const [isOpen, setIsOpen] = useState(false)
    const [onClose, setOnClose] = useState(false)
    const [t, i18n] = useTranslation()
    const pointer = mobile ? "top right" : false

    const changeLanguage = (e, {value}) => {
        i18n.changeLanguage(value)
    }

    const onClick = () => {
        if(!onClose) {
            setIsOpen(true)
        }else {
            setOnClose(false)
        }
    }

    const onCloseEvent = () => {
        setIsOpen(false)
        setOnClose(true)
    }

    return (
        <div style={{padding: '0 15px'}}>
            <Icon name="world" onClick={onClick} style={{cursor: 'pointer'}} />
            <Dropdown
                onChange={(e, data) => changeLanguage(e, data)}
                pointing={pointer}
                floating
                labeled
                options={langOptions}
                value={i18n.language}
                open={isOpen}
                onOpen={() => setIsOpen(true)}
                onClose={onCloseEvent}
            />
        </div>
    )
}

export default LanguageOptions;