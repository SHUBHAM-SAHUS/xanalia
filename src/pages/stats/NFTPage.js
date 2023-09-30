import React, { useEffect, useState } from 'react';
import { addUriCategoryAction } from '../../redux/actions/addUriCategoryAction';
import { useDispatch } from 'react-redux';
import MyModal from './ImgModal';
import NavTabs from './NavTabs';
import axios from 'axios';

import {
    Card,
    CardBody,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Label,
    Row,
    Col,
    Button
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import './styles.scss';
import { s3UploadService } from '../../services/s3UploadService';

const NFTPage = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [errors, setErrors] = useState({});
    const [saveThumbnail, setSaveThumbnail] = useState(false);
    const [cropedImage, setCropedImage] = useState();

    const [mediaFile, setMediaFile] = useState(
        {
            preview: "",
            raw: "",
            imgType: "",
            name: "",
            description: "",
            image: "",
            properties: "",
            totalSupply: "",
            externalLink: "",
            thumbnft: "",
        }
    );
    const [values, setValues] = useState({
        chainType: "polygon",
        name: "",
        tokenUri: "test",
        rarityInput: "",
        cost: null,
        attack: null,
        cardType: "",
        toughness: null,
        abilities: ["TEST"],
        element: "",
        title: "Test 1",
        contractType: "nftduel",
    })
    const validate = () => {
        let errors = {};
        if (!values.name)
        //|| !(values.chainType) || !(values.tokenUri) || !(values.rarityInput) || !(values.cost) || !(values.attack) || !(values.cardType) || !(values.toughness) || !(values.abilities) || !(values.element) || !(values.title) || !(values.contractType) 
        {
            errors.name = "This Field is Required";
        }
        if (!values.cost) {
            errors.cost = "This field is Required";
        }
        else if (!/^[0-9\b]+$/.test(values.cost)) {
            errors.cost = "Invalid Input"
        }
        if (!values.attack) {
            errors.attack = "This field is Required";
        }
        else if (!/^[0-9\b]+$/.test(values.attack)) {
            errors.attack = "Invalid Input"
        }
        if (!values.toughness) {
            errors.toughness = "This field is Required";
        }
        else if (!/^[0-9\b]+$/.test(values.toughness)) {
            errors.toughness = "Invalid Input"
        }
        setErrors(errors)
        return !Object.keys(errors)?.length;
    }
    const handleFileUpload = (e) => {
        if (e.target.files.length) {
            setMediaFile({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0],
                imgType: e.target.files[0]?.type
            });
        }

    };

    const handleOpenModal = () => {
        setShow(!show);
    };
    useEffect(() => {
        if (mediaFile?.preview !== "") {
            handleOpenModal();
        }
    }, [mediaFile?.preview]);

    const handleSave = (e) => {
        e.preventDefault()
        const isValidated = validate();
        if (isValidated) {
            dispatch(addUriCategoryAction(values));
        }
    }

    const handleChange = (event) => {
        event.persist();
        setValues({ ...values, [event.target.name]: event.target.value });
    }
    const savePreview = (croppedImage) => {
        setCropedImage(croppedImage);
        setSaveThumbnail(true);
        setShow(!show);
        upload();
    }

    const upload = async () => {
        if (mediaFile?.preview !== "") {
            let formDataFile = new FormData();
            formDataFile.append("image", mediaFile?.raw);
            const result = await s3UploadService(mediaFile?.raw);
            const fileData = JSON.stringify({
                name: values?.name,
                description: mediaFile?.description,
                image: result?.Location,
                properties: values?.cardType,
                totalSupply: "",
                externalLink: "",
                thumbnft: result?.Location,
            });
            const blob = new Blob([fileData], { type: "text/plain" });
            let formData = new FormData();
            formData.append("path", blob);
            axios.post("https://ipfs.infura.io:5001/api/v0/add", formData).
                then((hashRes) => {
                    if (hashRes) {
                        setValues({ ...values, tokenUri: hashRes?.data?.Hash });
                    }
                }
                )
        }
    }

    const getThumbnailImg = () => {

    }
    return (
        <>
        <div className="add_new">
                <Button color="primary">Add new NFTs</Button>
            </div>
        <NavTabs />
        <Row className="penpenz-fields">
            {show && mediaFile?.imgType !== "audio/mpeg" && (
                <MyModal
                    isOpen={show}
                    onRequestClose={handleOpenModal}
                    mediaFile={mediaFile}
                    savePreview={savePreview}
                    thumbnailImg={getThumbnailImg}
                />
            )}
            <Col sm={6}>
                <div className="drag-drop">
                    <h2 style={{ marginBottom: '7px', fontWeight: '700', fontSize: '27px', color: '#008fff' }}>Create New Item</h2>
                    <p style={{ fontSize: "15px", marginBottom: "0" }}>Image, Video, Audio, or 3D Model</p>
                    <p style={{ fontSize: "12px", color: "#979797;" }}>File types supported: JPG, JPEG, PNG,MP3,MP4,MOV. Max size: 50MB</p>
                    <div class="placeholder">
                        <Label for="file-input" className="font-weight-bold">
                            {!saveThumbnail || mediaFile == '' ?
                                '' : mediaFile.imgType == 'image/jpg' ||
                                    mediaFile.imgType == 'image/jpeg' ||
                                    mediaFile.imgType == 'image/png'
                                    ?
                                    <img style={{ height: 'auto', width: '315px', objectFit: 'cover' }} src={mediaFile.preview} alt="dummy" className="img-preview" />
                                    : !!mediaFile.preview && mediaFile.imgType == 'video/mp4' ||
                                        mediaFile.imgType == 'video/quicktime'
                                        ?
                                        <>
                                            <video width="320" height="240" controls autoPlay>
                                                <source src={mediaFile.preview} type="video/mp4" />
                                            </video>
                                        </>
                                        :
                                        ''
                            }
                            {mediaFile.imgType == 'audio/mpeg' ||
                                mediaFile.imgType == 'audio/mp3' || mediaFile.imgType == 'audio/ogg'
                                ? <><audio controls>
                                    <source src={mediaFile.preview} type="audio/ogg" />
                                </audio></> : !mediaFile.preview ? <img src="https://ik.imagekit.io/xanalia/Images/chooseFile.png" alt="file" className="file-img" /> : ''

                            }
                        </Label>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <input
                                        id="file-input"
                                        type="file"
                                        name="nftImage"
                                        accept=".jpg , .jpeg , .png , .gif, .mp4, .mp3, .mpeg, .mov, video/quickTime"
                                        className="fileInput"
                                        onChange={(e) => handleFileUpload(e)}
                                    />
                                    <p className="placeholder-text">{!!mediaFile.preview ? 'Change' : 'Drag &amp; drop file'} <br /> {!mediaFile.preview ? 'or' : ''} <br />{!mediaFile.preview && <><span className="browse">Browse media on your device</span></>}</p>
                                </InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                {!!mediaFile.preview && !!saveThumbnail &&
                    <>
                        <img src={mediaFile.preview} alt="dummy" className="thumbnail-preview" />
                    </>
                }
            </Col>
            <Col sm={6} className="mb-3">
                <Card>
                    <CardBody className="nft_details">
                        <Row>
                            <Col>
                                <Label className="font-weight-bold">
                                    <FormattedMessage id="Name" />
                                </Label>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroup>
                                        <Input
                                            type="text"
                                            name="name"
                                            value={values?.name || ''}
                                            errors={errors?.name}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label className="font-weight-bold">
                                    <FormattedMessage id="Description" />
                                </Label>
                                <span className="shot_desc"> 1 / 150 </span>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroup>
                                        <Input
                                            type="textarea"
                                            rows="6"
                                            name="name"
                                            value={values?.name || ''}
                                            errors={errors?.name}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label className="font-weight-bold">
                                    <FormattedMessage id="Rarity" />
                                </Label>
                                <FormGroup className="nft_rarity mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroup>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Label className="font-weight-bold">
                                    <FormattedMessage id="Allocation" />
                                </Label>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroup>
                                        <Input
                                            type="text"
                                            name="name"
                                            value={values?.name || ''}
                                            errors={errors?.name}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Label className="font-weight-bold">
                                    <FormattedMessage id="%" />
                                </Label>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroup>
                                        <Input
                                            type="text"
                                            name="name"
                                            value={values?.name || ''}
                                            errors={errors?.name}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="nft_details filter_nft">
                        <h5 className="nft_title">Filter</h5>
                        <Row>
                            <Col>
                                <Label className="font-weight-bold">
                                    <FormattedMessage id="Cost" />
                                </Label>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroup>
                                        <Input
                                            type="text"
                                            name="attack"
                                            value={values?.attack || ''}
                                            errors={errors?.attack}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Label className="font-weight-bold">
                                    {/* <FormattedMessage id="" /> */}
                                </Label>
                                <FormGroup className="mt-2 mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroup>
                                        <Input
                                            type="text"
                                            name="rarityInput"
                                            value={values?.rarityInput || ''}
                                            errors={errors?.rarityInput}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label className="font-weight-bold">
                                    <FormattedMessage id="Attack" />
                                </Label>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroup>
                                        <Input
                                            type="text"
                                            name="attack"
                                            value={values?.attack || ''}
                                            errors={errors?.attack}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Label className="font-weight-bold">
                                    <FormattedMessage id="Toughness" />
                                </Label>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroup>
                                        <Input
                                            type="text"
                                            name="rarityInput"
                                            value={values?.rarityInput || ''}
                                            errors={errors?.rarityInput}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                             <Col md={6}>
                                <Label className="font-weight-bold">
                                    <FormattedMessage id="Mouth" />
                                </Label>
                                <FormGroup className="nft_rarity mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroup>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Sexy Lip</option>
                                        <option value="1">Fat Lip</option>
                                    </select>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                {/* <Card>
                    <CardBody>
                        <Row>
                            <Col>
                                <Label className="font-weight-bold">
                                    <FormattedMessage id="Element" />
                                </Label>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroup>
                                        <InputGroup>
                                            <Input
                                                type="text"
                                                name="element"
                                                value={values?.element || ''}
                                                errors={errors?.element}
                                                onChange={handleChange}
                                            />
                                        </InputGroup>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Row>
                            <Col>
                                <Label className="font-weight-bold">
                                    <FormattedMessage id="Attack" />
                                </Label>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroup>
                                        <Input
                                            type="text"
                                            name="attack"
                                            value={values?.attack || ''}
                                            errors={errors?.attack}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Label className="font-weight-bold">
                                    <FormattedMessage id="Rarity" />
                                </Label>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroup>
                                        <Input
                                            type="text"
                                            name="rarityInput"
                                            value={values?.rarityInput || ''}
                                            errors={errors?.rarityInput}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Row>
                            <Col>
                                <Label className="font-weight-bold">
                                    <FormattedMessage id="Cost" />
                                </Label>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroup>
                                        <Input
                                            type="text"
                                            name="cost"
                                            value={values?.cost || ''}
                                            errors={errors?.cost}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Label className="font-weight-bold">
                                    <FormattedMessage id="Toughness" />
                                </Label>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroup>
                                        <Input
                                            type="text"
                                            name="toughness"
                                            value={values?.toughness || ''}
                                            errors={errors?.toughness}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card> */}
                <Card>
                    <CardBody>
                        <Row>
                            <Col>
                                <Label className="font-weight-bold">
                                    <FormattedMessage id="Ability" />
                                </Label>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroup>
                                        <Input
                                            type="textarea"
                                            rows="7"
                                            name="abilities"
                                            value={values?.abilities}
                                            errors={errors?.abilities}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <div className="nft-details_btn">
                <Button color="primary" outline>Cancel</Button>
                <Button color="primary ml-2" onClick={handleSave}>Save</Button>
                </div>
            </Col>
        </Row>
        </>
    );
}

export default NFTPage;
