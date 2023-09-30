import React, { useState, useCallback } from "react";
import Cropper from 'react-easy-crop'
import getCroppedImg from './GetCropedImage'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';
import './styles.scss';

const MyModal = ({ isOpen, onRequestClose, name, mediaFile, savePreview }) => {

    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, , setCroppedImage] = useState(null)

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                mediaFile?.preview,
                croppedAreaPixels,
                rotation
            )
            savePreview(croppedImage)
            setCroppedImage(croppedImage);
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels, rotation])

    const onClose = useCallback(() => {
        setCroppedImage(null)
    }, []);


    const initOpenModals = () => {
        let modals = {};
        return modals;
    };

    const [openModals, setOpenModals] = useState(() => initOpenModals());

    return (
        <Card>
            <CardBody className="text-center">
                <Modal className="croped-popup" isOpen={openModals}>
                    <ModalHeader>Create Thumbnail Image</ModalHeader>
                    <ModalBody>
                        {!!mediaFile.preview && mediaFile?.imgType !== "image/video" ?
                            <>

                                <Cropper
                                    image={mediaFile?.preview}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={4 / 3}
                                    onCropChange={setCrop}
                                    onCropComplete={onCropComplete}
                                    onZoomChange={setZoom}
                                />:

                                <Cropper
                                    video={mediaFile?.preview}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={4 / 3}
                                    onCropChange={setCrop}
                                    onZoomChange={setZoom}
                                    onImageLoaded={res => {
                                        console.log(res)
                                    }}
                                />
                            </>
                            :
                            <img src="https://ik.imagekit.io/xanalia/Images/chooseFile.png" alt="file" className="file-img" />
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={onRequestClose}>
                            Close
                        </Button>{' '}
                        <Button color="primary" onClick={mediaFile?.imgType !=="image/mp4"?savePreview: showCroppedImage}>
                            Save
                        </Button>
                    </ModalFooter>
                </Modal>
            </CardBody>
        </Card>
    );
};

export default MyModal;