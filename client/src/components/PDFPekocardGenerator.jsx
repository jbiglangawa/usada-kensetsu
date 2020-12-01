import React, { useEffect, useRef, useState } from 'react'
import { Page, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer'
import { useReactToPrint } from 'react-to-print'
import ImagePekocardGenerator from './ImagePekocardGenerator'

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    overlay: {
        position: 'absolute',
        top: '50'
    },
    pekocard: {
        height: '243.180px', // height: '324.48px',
        width: '169.740px', // width: '226.56px',
        margin: '10px'
    }
})

const PDFPekocardGenerator = ({userStr}) => {
    const [isGenerated, setIsGenerated] = useState(false)
    const [sourceFront, setSourceFront] = useState()
    const [sourceBack, setSourceBack] = useState()
    const pageRef = useRef()
    const printA4 = useReactToPrint({
        content: () => pageRef.current
    })

    const getImageURL = (frontImageURL, backImageURL) => {
        setSourceFront(frontImageURL)
        setSourceBack(backImageURL)
        setIsGenerated(true)
    }
    
    useEffect(() => {
        
    })

    return (
        <div>
            {isGenerated ? 
            <PDFViewer width='100%' height='100%' style={{border: 'none'}}>
                <Document>
                    <Page size="A4" ref={pageRef}>
                        <View style={styles.view}>
                            <Image source={sourceFront} style={styles.pekocard} />
                            <Image source={sourceBack} style={styles.pekocard} />
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
            :
            <ImagePekocardGenerator userStr={userStr} getImageURL={getImageURL} />
            }
        </div>
    )
}

export default PDFPekocardGenerator