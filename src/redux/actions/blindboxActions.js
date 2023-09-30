import  {BlindBoxData} from "../../utils/BlindBoxData"

export const BlindBoxList = (data) => {
    return {
        type: 'BLIND_BOX_LIST',
        payload: data,
    };
};

export const ADD_NFT_IN_BOX = (data) => {
    return {
        type: 'ADD_NFT_IN_BOX',
        payload: data,
    };
};

export const SINGLE_BOX_DETAILS = (data) => {
    return {
        type: 'SINGLE_BOX_DETAILS',
        payload: data,
    };
};

export const GetBlindBoxList = () => {
    dispatch(BlindBoxList(BlindBoxData))
}
