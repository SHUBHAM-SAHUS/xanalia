import async from "../components/Async";
import React from "react";
import {
  faHeart,
  faSignInAlt,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import * as Icon from 'react-feather';

// import {
//     faPlus,
// } from '@fortawesome/free-solid-svg-icons';

// Translation
import { FormattedMessage } from "react-intl";

// Landing

// Auth
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import Page404 from "../pages/auth/Page404";
import Page500 from "../pages/auth/Page500";

// Layouts
import SidebarLeft from "../pages/layouts/SidebarLeft";
import SidebarRight from "../pages/layouts/SidebarRight";
import ThemeModern from "../pages/layouts/ThemeModern";
import ThemeClassic from "../pages/layouts/ThemeClassic";
import ThemeDark from "../pages/layouts/ThemeDark";
import ThemeLight from "../pages/layouts/ThemeLight";

// Misc
import Blank from "../pages/misc/Blank";

// UI Elements
import Alerts from "../pages/ui-elements/Alerts";
import Buttons from "../pages/ui-elements/Buttons";
import Cards from "../pages/ui-elements/Cards";
import General from "../pages/ui-elements/General";
import Grid from "../pages/ui-elements/Grid";
import Modals from "../pages/ui-elements/Modals";
import Notifications from "../pages/ui-elements/Notifications";
import Tabs from "../pages/ui-elements/Tabs";
import Typography from "../pages/ui-elements/Typography";

// Pages
const Settings = async(() => import("../pages/pages/Settings"));
const ChannelInformation = async(() => import("../pages/pages/ChannelInformation"));
const Password = async(() => import("../pages/pages/Password"));
const EmailNotification = async(() => import("../pages/pages/EmailNotification"));
// const ApplyToken = async(() => import("../pages/pages/ApplyToken"));
const Logout = async(() => import("../pages/pages/Logout"));
const Clients = async(() => import("../pages/pages/Clients"));
const Invoice = async(() => import("../pages/pages/Invoice"));
const Pricing = async(() => import("../pages/pages/Pricing"));
const Tasks = async(() => import("../pages/pages/Tasks"));
const BlindBox = async(() => import("../pages/stats/BlindBox"));
const Collection = async(() => import("../components/create/Collection"));
const BlindBoxComponent = async(() => import("../components/create/BlindBox"));
const Rarity = async(() => import ("../components/rarity/Rarity"));
const CardList = async(() => import ("../pages/stats/CardList"));
const NFTPage = async(() => import ("../pages/stats/NFTPage"));
const Filters = async(() => import ("../components/filters/Filters"));

const NFT = async(() => import("../components/create/NFT"));
const NftDuel = async(() => import("../components/create/NftDuel"));
const MyCollections = async(() => import("../components/mycollections/MyCollections"));
const MyBlindBox = async(() => import("../components/myblindbox/MyBlindBox"));
const Pepenz = async(() => import("../components/mynftduel/Pepenz"));
// Documentation
const Plugins = async(() => import("../pages/docs/Plugins"));
const Changelog = async(() => import("../pages/docs/Changelog"));

// Dashboards
const Default = async(() => import("../pages/dashboards/Default"));

// Forms
const Layouts = async(() => import("../pages/forms/Layouts"));
const BasicElements = async(() => import("../pages/forms/BasicElements"));
const AdvancedElements = async(() => import("../pages/forms/AdvancedElements"));
const Editors = async(() => import("../pages/forms/Editors"));
const Validation = async(() => import("../pages/forms/Validation"));

// Tables
const BootstrapTables = async(() => import("../pages/tables/Bootstrap"));
const AdvancedTables = async(() => import("../pages/tables/Advanced"));

// Charts
const Chartjs = async(() => import("../pages/charts/Chartjs"));
const ApexCharts = async(() => import("../pages/charts/ApexCharts"));

// Icons
const FontAwesome = async(() => import("../pages/icons/FontAwesome"));
const IonIcons = async(() => import("../pages/icons/IonIcons"));
const Feather = async(() => import("../pages/icons/Feather"));

// Calendar
const Calendar = async(() => import("../pages/calendar/Calendar"));

// Maps
const VectorMaps = async(() => import("../pages/maps/VectorMaps"));
const GoogleMaps = async(() => import("../pages/maps/GoogleMaps"));

const dashboardRoutes = {
  path: "/",
  name: <FormattedMessage id="dashboard"/>,
  header: "",
  icon: <Icon.Home />,
  component: Default,
  children: null
};

const rarityRoutes = {
  path: "/rarity",
  name: <FormattedMessage id="rarity"/>,
  header: "",
  component: Rarity,
  children: null
};

const cardListRoutes = {
  path: "/cardList",
  name: <FormattedMessage id="CardList"/>,
  header: "",
  component: CardList,
  children: null
};

const nftPageRoutes = {
  path: "/nftPage",
  name: <FormattedMessage id="nftPage"/>,
  header: "",
  component: NFTPage,
  children: null
};

const filtersRoutes = {
  path: "/filters",
  name: <FormattedMessage id="Filters"/>,
  header: "",
  component: Filters,
  children: null
};

const uiRoutes = {
  path: "/ui",
  name: <FormattedMessage id="evnt"/>,
  header: "",
  icon: <Icon.Calendar />,
  children: [
    {
      path: "/ui/alerts",
      name: <FormattedMessage id="createevnt"/>,
      component: Alerts
    },
    {
      path: "/ui/buttons",
      name: <FormattedMessage id="manageevnt"/>,
      component: Buttons
    }
  ]
};



const chartRoutes = {
  path: "/charts",
  name: <FormattedMessage id="prdt"/>,
  icon: <Icon.ShoppingBag />,
  badgeColor: "primary",
  // badgeText: "New",
  children: [
    {
      path: "/charts/chartjs",
      name: <FormattedMessage id="createprdt"/>,
      component: Chartjs
    },
    {
      path: "/charts/apexcharts",
      name: <FormattedMessage id="manageprdt"/>,
      component: ApexCharts
    }
  ]
};

const formRoutes = {
  path: "/forms",
  name: <FormattedMessage id="finance"/>,
  icon: <Icon.ShoppingBag />,
  children: [
    {
      path: "/forms/layouts",
      name: <FormattedMessage id="createtoken"/>,
      component: Layouts
    },
    {
      path: "/forms/basic-elements",
      name: <FormattedMessage id="createcrowdfunding"/>,
      component: BasicElements
    },
    {
      path: "/forms/advanced-elements",
      name: <FormattedMessage id="managecrowdfunding"/>,
      component: AdvancedElements
    },
    {
      path: "/pages/invoice",
      name: <FormattedMessage id="invoice"/>,
      component: Invoice
    },
  ]
};

const tableRoutes = {
  path: "/tables",
  name: <FormattedMessage id="custmer"/>,
  icon: <Icon.Users />,
  children: [
    {
      path: "/clients",
      name: <FormattedMessage id="custmerlist"/>,
      component: Clients,
      badgeColor: "primary",
      badgeText: "New"
    },
  ]
};

const iconRoutes = {
  path: "/icons",
  name: <FormattedMessage id="Icons"/>,
  icon: faHeart,
  children: [
    {
      path: "/icons/feather",
      name: <FormattedMessage id="Feather"/>,
      component: Feather
    },
    {
      path: "/icons/ion-icons",
      name: <FormattedMessage id="Ion Icons"/>,
      component: IonIcons
    },
    {
      path: "/icons/font-awesome",
      name: <FormattedMessage id="Font Awesome"/>,
      component: FontAwesome
    }
  ]
};


const myCollectionsRoutes = {
  icon: <Icon.ShoppingBag />,
  path: "/mycollections",
  name: <FormattedMessage id="My Collection"/>,
  component: MyCollections
}

const myBlindBoxRoutes = {
  icon: <Icon.ShoppingBag />,
  path: "/myblindbox",
  name: <FormattedMessage id="My Blindbox"/>,
  component: MyBlindBox
}

const createRoutes = {
  icon: <Icon.Gift />,
  path: "/create",
  name: <FormattedMessage id="Create"/>,
  children: [
    {
      path: "/collection",
      name: "- Collection",
      component: Collection
    },
    {
      path: "/NFTPage",
      name: "- NFT",
      component: NFTPage
    },
    {
      path: "/blindbox",
      name: "- Blindbox",
      component: BlindBox
    },
    {
      path: "/collection",
      name: "- NFT DUEL",
      component: Collection
    }
  ]
}

const blindboxRoutes = {
  icon: <Icon.Gift />,
  path: "/store",
  name: <FormattedMessage id="My NFT Duel"/>,
  children: [
    {
      path: "/pepenz",
      name: "- PEPENZ",
      component: Pepenz,
      // icon: <Icon.Plus />,
    },
    {
      path: "/store",
      name: "- XXXXXXXXX",
      component: Pepenz,
      // icon: <Icon.Plus />,
    }
  ]
}

const authRoutes = {
  path: "/auth",
  name: "Auth",
  icon: faSignInAlt,
  children: [
    {
      path: "/",
      name: "Sign In",
      component: SignIn
    },
    {
      path: "/auth/sign-in",
      name: "Sign In",
      component: SignIn
    },
    {
      path: "/auth/sign-up",
      name: "Sign Up",
      component: SignUp
    },
    {
      path: "/auth/reset-password",
      name: "Reset Password",
      component: ResetPassword
    },
    {
      path: "/auth/404",
      name: "404 Page",
      component: Page404
    },
    {
      path: "/auth/500",
      name: "500 Page",
      component: Page500
    }
  ]
};

// This route is not visisble in the sidebar
const privateRoutes = {
  path: "/private",
  name: "Private",
  children: [
    {
      path: "/private/blank",
      name: "Blank Page",
      component: Blank
    }
  ]
}

const settingRoutes = {
  path: "/settings",
  name: <FormattedMessage id="settings"/>,
  icon: <Icon.Settings />,
  children: [
    {
      path: "/settings",
      name: "Account",
      component: Settings,
    },
    // {
    //   path: "/channel-information",
    //   name: "Create Channel",
    //   component: ChannelInformation,
    // },
    {
      path: "/password",
      name: "Password",
      component: Password,
    },
    {
      path: "/email-notification",
      name: "Email Notification",
      component: EmailNotification,
    },
    // {
    //   path: "/apply-token",
    //   name: "Apply Token",
    //   component: ApplyToken,
    // },
    {
      path: "/logout",
      name: "Logout",
      component: Logout,
    }
  ]
};


// Dashboard specific routes
export const dashboard = [
  dashboardRoutes,
  createRoutes,
  myCollectionsRoutes,
  myBlindBoxRoutes,
  // storeRoutes,
  settingRoutes,
  blindboxRoutes,
  rarityRoutes,
  cardListRoutes,
  nftPageRoutes,
  filtersRoutes
  // iconRoutes
];

// Landing specific routes
// export const landing = [landingRoutes];

// Auth specific routes
export const auth = [authRoutes];

// All routes
export default [
  dashboardRoutes,
  createRoutes,
  myCollectionsRoutes,
  myBlindBoxRoutes,
  // storeRoutes,
  blindboxRoutes,
  settingRoutes
  // iconRoutes
];
