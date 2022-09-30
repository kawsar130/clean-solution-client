import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAllergies,
    faWater,
    faHome,
    faRoute,
    faLaptopCode,
    faTractor,
    faHandsWash,
    faBacteria,
    faUserNinja,
    faHandHoldingWater,
    faCogs,
    faWarehouse,
    faEgg,
    faFish,
    faCheese,
    faHamburger,
    faDiceD6,
    faSmog,
    faHotel,
    faDog,
    faSeedling,
    faBreadSlice
} from "@fortawesome/free-solid-svg-icons";

// AppHome Icons
const skinContactIcon = <FontAwesomeIcon icon={faAllergies} />;
const waterTreatmentIcon = <FontAwesomeIcon icon={faWater} />;
const homeAndGardenIcon = <FontAwesomeIcon icon={faHome} />;
const travelAndLeisureIcon = <FontAwesomeIcon icon={faRoute} />;
const professionalIcon = <FontAwesomeIcon icon={faLaptopCode} />;
const farmAndRanchIcon = <FontAwesomeIcon icon={faTractor} />;

export const appHomeIcons = [
    skinContactIcon,
    waterTreatmentIcon,
    homeAndGardenIcon,
    travelAndLeisureIcon,
    professionalIcon,
    farmAndRanchIcon
];

// SkinContact Icons
const handsWashIcon = <FontAwesomeIcon icon={faHandsWash} />;
const bacteriaIcon = <FontAwesomeIcon icon={faBacteria} />;
const dandruffIcon = <FontAwesomeIcon icon={faUserNinja} />;

const skinIcons = [handsWashIcon, bacteriaIcon, dandruffIcon];

// WaterTreatment Icons
const drinkingWaterIcon = <FontAwesomeIcon icon={faHandHoldingWater} />;
const systemDisinfectionIcon = <FontAwesomeIcon icon={faCogs} />;
const waterStorageIcon = <FontAwesomeIcon icon={faWarehouse} />;

const waterTreatmentIcons = [
    drinkingWaterIcon,
    systemDisinfectionIcon,
    waterStorageIcon
];

// Home and Garden Icons
const eggIcon = <FontAwesomeIcon icon={faEgg} />;
const fishIcon = <FontAwesomeIcon icon={faFish} />;
const packagedFoodIcon = <FontAwesomeIcon icon={faCheese} />;
const foodContactSurfaceIcon = <FontAwesomeIcon icon={faHamburger} />;
const hardAndSoftSurfaceIcon = <FontAwesomeIcon icon={faDiceD6} />;
const foggingIcon = <FontAwesomeIcon icon={faSmog} />;

const homeAndGardenIcons = [
    eggIcon,
    fishIcon,
    packagedFoodIcon,
    foodContactSurfaceIcon,
    hardAndSoftSurfaceIcon,
    foggingIcon
];

// Travel and Leisure Icons
const hotelAirHospitalIcon = <FontAwesomeIcon icon={faHotel} />;

const travelAndLeisureIcons = [
    drinkingWaterIcon,
    hotelAirHospitalIcon,
    foggingIcon,
    systemDisinfectionIcon,
    waterStorageIcon
];

// Professional Establishments Icons
const professionalEstablishmentIcons = [
    hardAndSoftSurfaceIcon,
    systemDisinfectionIcon,
    waterStorageIcon,
    eggIcon,
    fishIcon,
    foodContactSurfaceIcon,
    foggingIcon
];

// Farm and Ranch Icons
const livestockDisinfectionIcon = <FontAwesomeIcon icon={faDog} />;
const seedsAndPlantsIcon = <FontAwesomeIcon icon={faSeedling} />;
const mushroomsIcon = <FontAwesomeIcon icon={faBreadSlice} />;
const farmAndRanchIcons = [
    hardAndSoftSurfaceIcon,
    foggingIcon,
    eggIcon,
    fishIcon,
    livestockDisinfectionIcon,
    waterTreatmentIcon,
    seedsAndPlantsIcon,
    mushroomsIcon
];

// All Section Icons
export const allSectionIcons = [
    skinIcons,
    waterTreatmentIcons,
    homeAndGardenIcons,
    travelAndLeisureIcons,
    professionalEstablishmentIcons,
    farmAndRanchIcons
];
