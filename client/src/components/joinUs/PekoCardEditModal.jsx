import React, { useState } from 'react'
import { Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { Label, Input, Form, TextArea } from 'semantic-ui-react'
import PekoCard from './PekoCard'
import isImageUrl from 'is-image-url'
import classNames from 'classnames'
import '../../css/PekoCardEditModal.css'
import { useSpring } from 'react-spring'

const PekoCardEditModal = ({isOpen, toggle, userStr, modifyUser, generate}) => {
    const [user, setUser] = useState(JSON.parse(userStr))
    const [photoValue, setPhotoValue] = useState(user.photo)
    const [name, setName] = useState(user.name)
    const [nameError, setNameError] = useState()
    const [urlError, setURLError] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const pekoCardOnGenerate = () => {
        generate(user)
    }

    const onNameChange = (event, data) => {
        if(data.value.length > 65) {
            setNameError("You can input a maximum of 65 characters")
            return
        }else if(data.value.length === 0) {
            setNameError("Name cannot be empty")
        }else {
            setNameError()
            setName(data.value)
            setUser({...user, name: data.value})
        }
    }

    const onPhotoChange = (event, data) => {
        setPhotoValue(data.value)
        
        if(isImageUrl(data.value)) {
            setURLError(false)
            setUser({ ...user, photo: data.value })

        }else {
            setURLError(true)
        }
    }

    const resetHandler = () => {
        const user = JSON.parse(userStr)
        setPhotoValue(user.photo)
        setName(user.name)
        setUser(user)
    }

    const saveHandler = () => {
        modifyUser(user)
        setEditMode(false)
    }

    return (
        <Modal isOpen={isOpen} className={classNames(editMode && "edit-modal")}>
            <ModalHeader toggle={toggle}>
                <div className="edit-header">PekoCard {editMode ? 'Edit' : 'Preview'}</div>
            </ModalHeader>
            <ModalBody>
                <Container>
                    <div className="mb-3">
                        This is how your PekoCard would look like. You can edit it by clicking the Edit button. After generating your PekoCard, you can share
                        your PekoCard to other people by giving them the PekoCard link
                    </div>
                    <Row>
                        <div className={classNames("edit-wrapper col-md-12", editMode && 'col-lg-6')}>
                            <PekoCard front userStr={JSON.stringify(user)} />
                            
                            <div>
                                <button onClick={() => setEditMode(!editMode)}>{editMode ? 'Cancel' : 'Edit'}</button>
                                
                                {editMode &&
                                <>
                                    <button onClick={resetHandler}>Reset</button>
                                    <button onClick={saveHandler}>Save</button>
                                </>
                                }
                            </div>
                        </div>

                        {editMode &&
                        <div className="edit-editor col-md-12 col-lg-6">
                            <label for="name">Name: </label>
                            <Input error={nameError != null} placeholder='Name' id="name" value={name} onChange={onNameChange} />
                            {nameError &&
                                <Label basic color='red' pointing className="w-100" style={{height: '7%'}}>{nameError}</Label>
                            }
                            
                            <label for="photo-url">Photo URL (<i>Suggested upload is 380px x 380px</i>): </label>
                            <Form>
                                <TextArea placeholder="Photo url" id="photo-url" value={photoValue} onChange={onPhotoChange} rows="5" 
                                    className={urlError ? "error-photo-editor" : ""} />
                                {urlError &&
                                    <Label basic color='red' pointing className="h-100 w-100">Please enter a correct image URL</Label>
                                }
                            </Form>
                        </div>
                        }
                    </Row>
                </Container>
            </ModalBody>

            <ModalFooter className="edit-footer">
                <button disabled={editMode} onClick={pekoCardOnGenerate}>Generate my ID➡</button>
            </ModalFooter>
        </Modal>
    )

}

export default PekoCardEditModal