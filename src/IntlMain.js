import React ,{useState,useEffect} from 'react'
import ReduxToastr from 'react-redux-toastr';
import { IntlProvider } from "react-intl";
import { connect} from 'react-redux';
import Routes from './routes/Routes';
import { changeLanguage } from "./redux/actions/languageActions";
import enLanguage from "./translations/en.json";
import jaLanguage from "./translations/ja.json";

const IntlMain = ({language,changeLanguage})  => {
    const [engLang, setEngLang] = useState({});
    const [jaLang, setJaLang] = useState({});
   
    console.log("language in intl",language)

    const messages = {
      en: engLang,
      ja: jaLang,
    };

    useEffect(() => {
        fetchLanguage()
    }, [language]);

    const fetchLanguage = async () => {
        if(language === "en"){
          changeLanguage("en");
          setEngLang(enLanguage)
        // await fetch(`https://cdn.angelium.net/lang/touku/en.json?t=${Date.now()}`)
        //   .then((response) => response.json())
        //   .then((res) => {
        //     localStorage.setItem("lang", "en");
        //     changeLanguage("en");
        //     // setEngLang(res.common)
        //     setEngLang(enLanguage)
        //   })
        //   .catch((err) => {
        //     // console.log("err", err)
        //   });
        } else if (language === "ja") {
          changeLanguage("ja");
          setJaLang(jaLanguage)
        // await fetch(`https://cdn.angelium.net/lang/touku/ja.json?t=${Date.now()}`)
        //   .then((response) => response.json())
        //   .then((res) => {
        //     localStorage.setItem("lang", "ja");
        //     changeLanguage("ja");
        //     // setJaLang(res.common)
        //     setJaLang(jaLanguage)
        //   });
        }
      }

    return (
      <IntlProvider onError={() => { }} locale={language} messages={messages[language]}>
      <Routes />
      <ReduxToastr
        timeOut={5000}
        newestOnTop={true}
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
      </IntlProvider>
    )
  }

  const mapDispatchToProps = {
    changeLanguage,
  };
  
  const mapStateToProps = (state) => {
    return {
      language: state.languageReducer.language,
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(IntlMain);
  