import React , {useState , useEffect} from 'react';
import {Dropdown , Image} from 'react-bootstrap'
import { changeLanguage } from "../redux/actions/languageActions";
import { connect} from 'react-redux';


const enFlag = "https://cdn.angelium.net/touku/assets/images/flags/en.svg"
const jaFlag = "https://cdn.angelium.net/touku/assets/images/flags/ja.png"

const LangDropDown = ({language,changeLanguage}) => {
    console.log("language",language)
    const [selectedLang, setSelectedLang] = useState(language || "en");
    const [selectedFlag, setSelectedFlag] = useState(language == "en" ?  enFlag : jaFlag );
    const [show, setShow] = useState(false)

    useEffect(() => {
      if(show) {
        document.getElementById("dropdown-flags").classList.add("change-toggle");
      } else {
        document.getElementById("dropdown-flags").classList.remove("change-toggle");
      }
    } , [show])

    const toggleDropdownItem = (lang , flag) => {
        // setShow(!show)
        setSelectedLang(lang);
        setSelectedFlag(flag);
        changeLanguage(lang)
        localStorage.setItem("lang", lang);
    }

    return (
        <div className="flag-dropdown">
        <Dropdown size="sm" onToggle={() => setShow(!show)}>
          <Dropdown.Toggle variant="secondary" id="dropdown-flags">
            <Image height="28px" width="28px" roundedCircle src={selectedFlag}/>
          </Dropdown.Toggle>
          <Dropdown.Menu className="lang-drop-menu">
          <Dropdown.Item className={`drop-padding ${selectedLang == "en" && 'd-none'}`} eventKey={"en"} onClick={() => toggleDropdownItem("en",enFlag)}><Image height="28px" width="28px" src={enFlag} roundedCircle/></Dropdown.Item>
          <Dropdown.Item className={`drop-padding ${selectedLang == "ja" && 'd-none'}`} eventKey={"ja"} onClick={() => toggleDropdownItem("ja",jaFlag)}><Image height="28px" width="28px" src={jaFlag} roundedCircle/></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
    );
}

const mapDispatchToProps = {
    changeLanguage,
};
  
const mapStateToProps = (state) => {
    return {
      language: state.languageReducer.language,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LangDropDown);
