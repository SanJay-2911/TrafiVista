export interface LocationSpot {
    id: string;
    name: string;
}

export interface City {
    id: string;
    name: string;
    spots: LocationSpot[];
}

export interface District {
    id: string;
    name: string;
    cities: City[];
}

export interface State {
    id: string;
    name: string;
    districts: District[];
}

export const indiaLocations: State[] = [
    {
        id: "AN",
        name: "Andaman and Nicobar Islands",
        districts: [
            {
                id: "AN-SA",
                name: "South Andaman",
                cities: [
                    {
                        id: "AN-SA-PBL",
                        name: "Port Blair",
                        spots: [{ id: "AN1", name: "Aberdeen Bazaar Junction" }],
                    },
                ],
            },
        ],
    },
    {
        id: "AP",
        name: "Andhra Pradesh",
        districts: [
            {
                id: "AP-VSP",
                name: "Visakhapatnam",
                cities: [
                    {
                        id: "AP-VSP-VSP",
                        name: "Visakhapatnam City",
                        spots: [
                            { id: "AP1", name: "Gajuwaka Junction" },
                            { id: "AP2", name: "NAD Junction" },
                            { id: "AP3", name: "Jagadamba Centre" },
                            { id: "AP31", name: "Siripuram Circle" },
                            { id: "AP32", name: "Rushikonda Beach Road" },
                        ],
                    },
                ],
            },
            {
                id: "AP-VJX",
                name: "Vijayawada",
                cities: [
                    {
                        id: "AP-VJX-VJW",
                        name: "Vijayawada City",
                        spots: [
                            { id: "AP4", name: "Benz Circle" },
                            { id: "AP5", name: "PNM Bus Station Junction" },
                            { id: "AP51", name: "Ramavarappadu Ring" },
                            { id: "AP52", name: "Governorpet" },
                        ],
                    },
                ],
            },
            {
                id: "AP-GNT",
                name: "Guntur",
                cities: [
                    {
                        id: "AP-GNT-GNT",
                        name: "Guntur City",
                        spots: [
                            { id: "AP6", name: "Lodge Centre" },
                            { id: "AP61", name: "Naaz Centre" },
                        ],
                    },
                ],
            },
            {
                id: "AP-KRN",
                name: "Kurnool",
                cities: [
                    {
                        id: "AP-KRN-KRN",
                        name: "Kurnool Town",
                        spots: [{ id: "AP7", name: "Raj Vihar Centre" }],
                    },
                ],
            },
            {
                id: "AP-TPR",
                name: "Tirupati",
                cities: [
                    {
                        id: "AP-TPR-TPR",
                        name: "Tirupati City",
                        spots: [
                            { id: "AP8", name: "Alipiri Gate" },
                            { id: "AP9", name: "Tiruchanoor Road Junction" },
                        ],
                    },
                ],
            },
            {
                id: "AP-NLR",
                name: "Nellore",
                cities: [
                    {
                        id: "AP-NLR-NLR",
                        name: "Nellore City",
                        spots: [{ id: "AP10", name: "VRC Centre" }],
                    },
                ],
            },
            {
                id: "AP-KKT",
                name: "Kakinada",
                cities: [
                    {
                        id: "AP-KKT-KKT",
                        name: "Kakinada Town",
                        spots: [{ id: "AP11", name: "Main Road Cinema Road Junction" }],
                    },
                ],
            },
            {
                id: "AP-RJY",
                name: "Rajahmundry",
                cities: [
                    {
                        id: "AP-RJY-RJY",
                        name: "Rajahmundry City",
                        spots: [{ id: "AP12", name: "Kotagummam Junction" }],
                    },
                ],
            },
            {
                id: "AP-ANP",
                name: "Anantapur",
                cities: [
                    {
                        id: "AP-ANP-ANP",
                        name: "Anantapur City",
                        spots: [{ id: "AP13", name: "Clock Tower Junction" }],
                    },
                ],
            },
            {
                id: "AP-KDP",
                name: "Kadapa",
                cities: [
                    {
                        id: "AP-KDP-KDP",
                        name: "Kadapa City",
                        spots: [{ id: "AP14", name: "Seven Roads Junction" }],
                    },
                ],
            },
        ],
    },
    {
        id: "AS",
        name: "Assam",
        districts: [
            {
                id: "AS-GHY",
                name: "Kamrup Metropolitan",
                cities: [
                    {
                        id: "AS-GHY-GHY",
                        name: "Guwahati",
                        spots: [
                            { id: "AS1", name: "Paltan Bazaar" },
                            { id: "AS2", name: "Ganeshguri Flyover" },
                            { id: "AS3", name: "Adabari Bus Stand" },
                            { id: "AS4", name: "Maligaon Chariali" },
                            { id: "AS6", name: "Six Mile Flying Bridge" },
                        ],
                    },
                ],
            },
            {
                id: "AS-DBR",
                name: "Dibrugarh",
                cities: [
                    {
                        id: "AS-DBR-DBR",
                        name: "Dibrugarh City",
                        spots: [{ id: "AS5", name: "Thana Chariali" }],
                    },
                ],
            },
            {
                id: "AS-SIL",
                name: "Cachar",
                cities: [
                    {
                        id: "AS-SIL-SIL",
                        name: "Silchar City",
                        spots: [{ id: "AS7", name: "Devooti Market Junction" }],
                    },
                ],
            },
            {
                id: "AS-JOR",
                name: "Jorhat",
                cities: [
                    {
                        id: "AS-JOR-JOR",
                        name: "Jorhat City",
                        spots: [{ id: "AS8", name: "Gar Ali Junction" }],
                    },
                ],
            },
            {
                id: "AS-TEZ",
                name: "Sonitpur",
                cities: [
                    {
                        id: "AS-TEZ-TEZ",
                        name: "Tezpur Town",
                        spots: [{ id: "AS9", name: "Court Chariali" }],
                    },
                ],
            },
            {
                id: "AS-TIN",
                name: "Tinsukia",
                cities: [
                    {
                        id: "AS-TIN-TIN",
                        name: "Tinsukia Town",
                        spots: [{ id: "AS10", name: "Chirwapatty Junction" }],
                    },
                ],
            },
        ],
    },
    {
        id: "BR",
        name: "Bihar",
        districts: [
            {
                id: "BR-PAT",
                name: "Patna",
                cities: [
                    {
                        id: "BR-PAT-PAT",
                        name: "Patna City",
                        spots: [
                            { id: "BR1", name: "Dak Bungalow Crossing" },
                            { id: "BR2", name: "Gandhi Maidan Circle" },
                            { id: "BR3", name: "Boring Road Crossing" },
                            { id: "BR4", name: "Patna Junction Area" },
                            { id: "BR7", name: "Bailey Road - High Court" },
                            { id: "BR8", name: "Kankarbagh Road Junction" },
                        ],
                    },
                ],
            },
            {
                id: "BR-MUZ",
                name: "Muzaffarpur",
                cities: [
                    {
                        id: "BR-MUZ-MUZ",
                        name: "Muzaffarpur City",
                        spots: [
                            { id: "BR5", name: "Imli Chatti" },
                            { id: "BR9", name: "Kalyani Chowk" },
                        ],
                    },
                ],
            },
            {
                id: "BR-GAY",
                name: "Gaya",
                cities: [
                    {
                        id: "BR-GAY-GAY",
                        name: "Gaya City",
                        spots: [
                            { id: "BR6", name: "Gaya Station Road" },
                            { id: "BR10", name: "Tower Chowk" },
                        ],
                    },
                ],
            },
            {
                id: "BR-BHA",
                name: "Bhagalpur",
                cities: [
                    {
                        id: "BR-BHA-BHA",
                        name: "Bhagalpur City",
                        spots: [{ id: "BR11", name: "Khalifabag Chowk" }],
                    },
                ],
            },
            {
                id: "BR-DAR",
                name: "Darbhanga",
                cities: [
                    {
                        id: "BR-DAR-DAR",
                        name: "Darbhanga City",
                        spots: [{ id: "BR12", name: "Leheriasarai Tower" }],
                    },
                ],
            },
            {
                id: "BR-PUR",
                name: "Purnia",
                cities: [
                    {
                        id: "BR-PUR-PUR",
                        name: "Purnia City",
                        spots: [{ id: "BR13", name: "Line Bazaar Junction" }],
                    },
                ],
            },
            {
                id: "BR-ARS",
                name: "Arrah",
                cities: [
                    {
                        id: "BR-ARS-ARS",
                        name: "Arrah City",
                        spots: [{ id: "BR14", name: "Ramna Maidan Junction" }],
                    },
                ],
            },
            {
                id: "BR-BEG",
                name: "Begusarai",
                cities: [
                    {
                        id: "BR-BEG-BEG",
                        name: "Begusarai City",
                        spots: [{ id: "BR15", name: "Station Road Bridge" }],
                    },
                ],
            },
        ],
    },
    {
        id: "DL",
        name: "Delhi",
        districts: [
            {
                id: "DL-ND",
                name: "Central Delhi",
                cities: [
                    {
                        id: "DL-ND-DLH",
                        name: "Central Delhi Area",
                        spots: [
                            { id: "DL1", name: "ITO Crossing" },
                            { id: "DL2", name: "Rajiv Chowk (CP)" },
                            { id: "DL3", name: "Mandi House Circle" },
                            { id: "DL10", name: "Paharganj Junction" },
                        ],
                    },
                ],
            },
            {
                id: "DL-SW",
                name: "South West Delhi",
                cities: [
                    {
                        id: "DL-SW-DLH",
                        name: "South West Delhi Area",
                        spots: [
                            { id: "DL4", name: "Dhaula Kuan Junction" },
                            { id: "DL5", name: "Mahipalpur Bypass" },
                            { id: "DL11", name: "Vasant Kunj Crossing" },
                            { id: "DL12", name: "Dwarka Sector 9 Junction" },
                        ],
                    },
                ],
            },
            {
                id: "DL-E",
                name: "East Delhi",
                cities: [
                    {
                        id: "DL-E-DLH",
                        name: "East Delhi Area",
                        spots: [
                            { id: "DL6", name: "Akshardham Flyover" },
                            { id: "DL7", name: "Anand Vihar ISBT" },
                            { id: "DL13", name: "Laxmi Nagar Crossing" },
                        ],
                    },
                ],
            },
            {
                id: "DL-W",
                name: "West Delhi",
                cities: [
                    {
                        id: "DL-W-DLH",
                        name: "West Delhi Area",
                        spots: [
                            { id: "DL8", name: "Peera Garhi Chowk" },
                            { id: "DL9", name: "Punjabi Bagh Circle" },
                            { id: "DL14", name: "Tilak Nagar Junction" },
                        ],
                    },
                ],
            },
            {
                id: "DL-SE",
                name: "South East Delhi",
                cities: [
                    {
                        id: "DL-SE-DLH",
                        name: "South East Area",
                        spots: [
                            { id: "DL15", name: "Ashram Chowk Crossing" },
                            { id: "DL16", name: "Sarita Vihar Junction" },
                        ],
                    },
                ],
            },
            {
                id: "DL-N",
                name: "North Delhi",
                cities: [
                    {
                        id: "DL-N-DLH",
                        name: "North Area",
                        spots: [
                            { id: "DL17", name: "Model Town Crossing" },
                            { id: "DL18", name: "ISBT Kashmere Gate" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "GA",
        name: "Goa",
        districts: [
            {
                id: "GA-NG",
                name: "North Goa",
                cities: [
                    {
                        id: "GA-NG-PAN",
                        name: "Panaji",
                        spots: [
                            { id: "GA1", name: "Dona Paula Junction" },
                            { id: "GA2", name: "Panjim Bus Stand Circle" },
                            { id: "GA5", name: "Miramar Circle" },
                        ],
                    },
                    {
                        id: "GA-NG-MPU",
                        name: "Mapusa",
                        spots: [
                            { id: "GA3", name: "Khorlim Junction" },
                            { id: "GA6", name: "Mapusa Market Square" },
                        ],
                    },
                    {
                        id: "GA-NG-CAL",
                        name: "Calangute",
                        spots: [{ id: "GA7", name: "Calangute-Baga Main Road" }],
                    },
                ],
            },
            {
                id: "GA-SG",
                name: "South Goa",
                cities: [
                    {
                        id: "GA-SG-MRG",
                        name: "Margao",
                        spots: [
                            { id: "GA4", name: "Colva Circle" },
                            { id: "GA8", name: "Comba Junction" },
                        ],
                    },
                    {
                        id: "GA-SG-VAS",
                        name: "Vasco da Gama",
                        spots: [{ id: "GA9", name: "Dabolim Airport Bridge" }],
                    },
                ],
            },
        ],
    },
    {
        id: "GJ",
        name: "Gujarat",
        districts: [
            {
                id: "GJ-AH",
                name: "Ahmedabad",
                cities: [
                    {
                        id: "GJ-AH-AHM",
                        name: "Ahmedabad City",
                        spots: [
                            { id: "GJ1", name: "Sarkhej-Gandhinagar Highway" },
                            { id: "GJ2", name: "Shivranjani Cross Roads" },
                            { id: "GJ3", name: "Iskcon Cross Road" },
                            { id: "GJ4", name: "Nehrunagar Circle" },
                            { id: "GJ11", name: "C.G. Road Junction" },
                            { id: "GJ12", name: "Thaltej Cross Road" },
                        ],
                    },
                ],
            },
            {
                id: "GJ-SU",
                name: "Surat",
                cities: [
                    {
                        id: "GJ-SU-SRT",
                        name: "Surat City",
                        spots: [
                            { id: "GJ5", name: "Varachha Main Road" },
                            { id: "GJ6", name: "Udhna Darwaja" },
                            { id: "GJ7", name: "Majura Gate" },
                            { id: "GJ13", name: "Ring Road Market" },
                        ],
                    },
                ],
            },
            {
                id: "GJ-VD",
                name: "Vadodara",
                cities: [
                    {
                        id: "GJ-VD-VAD",
                        name: "Vadodara City",
                        spots: [
                            { id: "GJ8", name: "Genda Circle" },
                            { id: "GJ9", name: "Sayajigunj Junction" },
                            { id: "GJ14", name: "Station Road Bridge" },
                        ],
                    },
                ],
            },
            {
                id: "GJ-RK",
                name: "Rajkot",
                cities: [
                    {
                        id: "GJ-RK-RAJ",
                        name: "Rajkot City",
                        spots: [
                            { id: "GJ10", name: "Indira Gandhi Circle" },
                            { id: "GJ15", name: "Trikon Baug Junction" },
                        ],
                    },
                ],
            },
            {
                id: "GJ-BH",
                name: "Bhavnagar",
                cities: [
                    {
                        id: "GJ-BH-BHV",
                        name: "Bhavnagar City",
                        spots: [{ id: "GJ16", name: "Mahila College Chowk" }],
                    },
                ],
            },
            {
                id: "GJ-JN",
                name: "Junagadh",
                cities: [
                    {
                        id: "GJ-JN-JUN",
                        name: "Junagadh Town",
                        spots: [{ id: "GJ17", name: "Azad Chowk" }],
                    },
                ],
            },
            {
                id: "GJ-JAM",
                name: "Jamnagar",
                cities: [
                    {
                        id: "GJ-JAM-JAM",
                        name: "Jamnagar City",
                        spots: [{ id: "GJ18", name: "Seven Section Road Crossing" }],
                    },
                ],
            },
            {
                id: "GJ-GAN",
                name: "Gandhinagar",
                cities: [
                    {
                        id: "GJ-GAN-GAN",
                        name: "Gandhinagar City",
                        spots: [{ id: "GJ19", name: "Sargasan Cross Road" }],
                    },
                ],
            },
        ],
    },
    {
        id: "HR",
        name: "Haryana",
        districts: [
            {
                id: "HR-GR",
                name: "Gurugram",
                cities: [
                    {
                        id: "HR-GR-GGM",
                        name: "Gurgaon",
                        spots: [
                            { id: "HR1", name: "IFFCO Chowk" },
                            { id: "HR2", name: "Cyber Hub Entrance" },
                            { id: "HR3", name: "Rajiv Chowk" },
                            { id: "HR4", name: "Sohna Road Crossing" },
                            { id: "HR5", name: "HUDA City Centre" },
                            { id: "HR7", name: "Bakhtawar Chowk Junction" },
                        ],
                    },
                ],
            },
            {
                id: "HR-FR",
                name: "Faridabad",
                cities: [
                    {
                        id: "HR-FR-FDB",
                        name: "Faridabad City",
                        spots: [
                            { id: "HR6", name: "Old Faridabad Chowk" },
                            { id: "HR8", name: "NHPC Metro Road Crossing" },
                        ],
                    },
                ],
            },
            {
                id: "HR-PAN",
                name: "Panipat",
                cities: [
                    {
                        id: "HR-PAN-PAN",
                        name: "Panipat City",
                        spots: [{ id: "HR9", name: "Gohana Road Overbridge" }],
                    },
                ],
            },
            {
                id: "HR-AMB",
                name: "Ambala",
                cities: [
                    {
                        id: "HR-AMB-AMB",
                        name: "Ambala Cantt",
                        spots: [{ id: "HR10", name: "Main Bazaar Road" }],
                    },
                ],
            },
            {
                id: "HR-HIS",
                name: "Hisar",
                cities: [
                    {
                        id: "HR-HIS-HIS",
                        name: "Hisar Town",
                        spots: [{ id: "HR11", name: "Nagori Gate Chowk" }],
                    },
                ],
            },
            {
                id: "HR-KAR",
                name: "Karnal",
                cities: [
                    {
                        id: "HR-KAR-KAR",
                        name: "Karnal City",
                        spots: [{ id: "HR12", name: "Committee Chowk" }],
                    },
                ],
            },
        ],
    },
    {
        id: "HP",
        name: "Himachal Pradesh",
        districts: [
            {
                id: "HP-SM",
                name: "Shimla",
                cities: [
                    {
                        id: "HP-SM-SML",
                        name: "Shimla City",
                        spots: [
                            { id: "HP1", name: "Victory Tunnel Junction" },
                            { id: "HP2", name: "ISBT Tutikandi Crossing" },
                            { id: "HP4", name: "Sanjauli Market Chowk" },
                        ],
                    },
                ],
            },
            {
                id: "HP-KU",
                name: "Kullu",
                cities: [
                    {
                        id: "HP-KU-KU",
                        name: "Manali Town",
                        spots: [
                            { id: "HP3", name: "Mall Road Entry" },
                            { id: "HP5", name: "Old Manali Bridge" },
                        ],
                    },
                ],
            },
            {
                id: "HP-KA",
                name: "Kangra",
                cities: [
                    {
                        id: "HP-KA-DHR",
                        name: "Dharamshala",
                        spots: [{ id: "HP6", name: "Kotwali Bazaar Junction" }],
                    },
                ],
            },
            {
                id: "HP-MA",
                name: "Mandi",
                cities: [
                    {
                        id: "HP-MA-MAN",
                        name: "Mandi Town",
                        spots: [{ id: "HP7", name: "Indira Market Entrance" }],
                    },
                ],
            },
        ],
    },
    {
        id: "JK",
        name: "Jammu and Kashmir",
        districts: [
            {
                id: "JK-SR",
                name: "Srinagar",
                cities: [
                    {
                        id: "JK-SR-SRN",
                        name: "Srinagar City",
                        spots: [
                            { id: "JK1", name: "Lal Chowk" },
                            { id: "JK2", name: "Pantha Chowk" },
                            { id: "JK4", name: "Hyderpora Bypass" },
                            { id: "JK5", name: "Jahangir Chowk Flyover" },
                        ],
                    },
                ],
            },
            {
                id: "JK-JM",
                name: "Jammu",
                cities: [
                    {
                        id: "JK-JM-JAM",
                        name: "Jammu City",
                        spots: [
                            { id: "JK3", name: "Bari Brahmana" },
                            { id: "JK6", name: "Jewel Chowk" },
                        ],
                    },
                ],
            },
            {
                id: "JK-AN",
                name: "Anantnag",
                cities: [
                    {
                        id: "JK-AN-ANA",
                        name: "Anantnag Town",
                        spots: [{ id: "JK7", name: "KP Road Junction" }],
                    },
                ],
            },
        ],
    },
    {
        id: "JH",
        name: "Jharkhand",
        districts: [
            {
                id: "JH-RS",
                name: "Ranchi",
                cities: [
                    {
                        id: "JH-RS-RNC",
                        name: "Ranchi City",
                        spots: [
                            { id: "JH1", name: "Albert Ekka Chowk" },
                            { id: "JH2", name: "Kanke Road Crossing" },
                            { id: "JH4", name: "Lalpur Chowk" },
                            { id: "JH5", name: "Birsa Chowk Bridge" },
                        ],
                    },
                ],
            },
            {
                id: "JH-JM",
                name: "East Singhbhum",
                cities: [
                    {
                        id: "JH-JM-JSR",
                        name: "Jamshedpur",
                        spots: [
                            { id: "JH3", name: "Bistupur Main Road" },
                            { id: "JH6", name: "Sakchi Market Junction" },
                        ],
                    },
                ],
            },
            {
                id: "JH-DHN",
                name: "Dhanbad",
                cities: [
                    {
                        id: "JH-DHN-DHN",
                        name: "Dhanbad City",
                        spots: [{ id: "JH7", name: "Bank More Junction" }],
                    },
                ],
            },
            {
                id: "JH-BOK",
                name: "Bokaro",
                cities: [
                    {
                        id: "JH-BOK-BOK",
                        name: "Bokaro Steel City",
                        spots: [{ id: "JH8", name: "Ram Mandir Crossing" }],
                    },
                ],
            },
            {
                id: "JH-HAZ",
                name: "Hazaribagh",
                cities: [
                    {
                        id: "JH-HAZ-HAZ",
                        name: "Hazaribagh Town",
                        spots: [{ id: "JH9", name: "Indra Chowk" }],
                    },
                ],
            },
        ],
    },
    {
        id: "KA",
        name: "Karnataka",
        districts: [
            {
                id: "KA-BU",
                name: "Bengaluru Urban",
                cities: [
                    {
                        id: "KA-BU-BLR",
                        name: "Bengaluru",
                        spots: [
                            { id: "KA1", name: "Silk Board Junction" },
                            { id: "KA2", name: "KR Puram Hanging Bridge" },
                            { id: "KA3", name: "Hebbal Flyover" },
                            { id: "KA4", name: "Marathahalli Bridge" },
                            { id: "KA5", name: "Sony World Signal Koramangala" },
                            { id: "KA6", name: "Tin Factory Junction" },
                            { id: "KA7", name: "Richmond Circle" },
                            { id: "KA8", name: "Dairy Circle" },
                            { id: "KA13", name: "Outer Ring Road - Manyata" },
                            { id: "KA14", name: "Electronic City Flyover Entrance" },
                            { id: "KA15", name: "Old Madras Road - Baiyappanahalli" },
                        ],
                    },
                ],
            },
            {
                id: "KA-MYS",
                name: "Mysuru",
                cities: [
                    {
                        id: "KA-MYS-MYS",
                        name: "Mysuru City",
                        spots: [
                            { id: "KA9", name: "Hardinge Circle" },
                            { id: "KA10", name: "KRS Road Junction" },
                            { id: "KA16", name: "JLR Railway Station Circle" },
                        ],
                    },
                ],
            },
            {
                id: "KA-MLR",
                name: "Dakshina Kannada",
                cities: [
                    {
                        id: "KA-MLR-MLR",
                        name: "Mangaluru",
                        spots: [
                            { id: "KA11", name: "Pumpwell Junction" },
                            { id: "KA17", name: "Kottara Chowki" },
                        ],
                    },
                ],
            },
            {
                id: "KA-HUB",
                name: "Dharwad",
                cities: [
                    {
                        id: "KA-HUB-HUB",
                        name: "Hubballi",
                        spots: [
                            { id: "KA12", name: "Chennamma Circle" },
                            { id: "KA18", name: "Gokul Road Junction" },
                        ],
                    },
                ],
            },
            {
                id: "KA-BEL",
                name: "Belagavi",
                cities: [
                    {
                        id: "KA-BEL-BEL",
                        name: "Belagavi City",
                        spots: [{ id: "KA19", name: "Rani Chennamma Circle" }],
                    },
                ],
            },
            {
                id: "KA-UDS",
                name: "Udupi",
                cities: [
                    {
                        id: "KA-UDS-UDP",
                        name: "Udupi Town",
                        spots: [{ id: "KA20", name: "Tiger Circle Manipal" }],
                    },
                ],
            },
            {
                id: "KA-DAV",
                name: "Davanagere",
                cities: [
                    {
                        id: "KA-DAV-DAV",
                        name: "Davanagere City",
                        spots: [{ id: "KA21", name: "Harihara Road Junction" }],
                    },
                ],
            },
            {
                id: "KA-SHI",
                name: "Shivamogga",
                cities: [
                    {
                        id: "KA-SHI-SHI",
                        name: "Shimoga City",
                        spots: [{ id: "KA22", name: "Gopi Circle" }],
                    },
                ],
            },
            {
                id: "KA-KAL",
                name: "Kalaburagi",
                cities: [
                    {
                        id: "KA-KAL-KAL",
                        name: "Gulbarga City",
                        spots: [{ id: "KA23", name: "Sardar Vallabhbhai Patel Chowk" }],
                    },
                ],
            },
        ],
    },
    {
        id: "KL",
        name: "Kerala",
        districts: [
            {
                id: "KL-EK",
                name: "Ernakulam",
                cities: [
                    {
                        id: "KL-EK-KOC",
                        name: "Kochi/Ernakulam",
                        spots: [
                            { id: "KL1", name: "Vyttila Mobility Hub Junction" },
                            { id: "KL2", name: "Edappally Bypass Junction" },
                            { id: "KL3", name: "Aluva Bypass" },
                            { id: "KL4", name: "Kadavanthra Junction" },
                            { id: "KL8", name: "Palarivattom Signal" },
                            { id: "KL9", name: "Kalamassery Premier Junction" },
                        ],
                    },
                ],
            },
            {
                id: "KL-TV",
                name: "Thiruvananthapuram",
                cities: [
                    {
                        id: "KL-TV-TVM",
                        name: "Trivandrum City",
                        spots: [
                            { id: "KL5", name: "Thampanoor Junction" },
                            { id: "KL6", name: "East Fort Bridge" },
                            { id: "KL10", name: "Kazhakuttam Technopark Road" },
                        ],
                    },
                ],
            },
            {
                id: "KL-KZ",
                name: "Kozhikode",
                cities: [
                    {
                        id: "KL-KZ-CLT",
                        name: "Calicut",
                        spots: [
                            { id: "KL7", name: "Mananchira Square" },
                            { id: "KL11", name: "Mavoor Road Junction" },
                        ],
                    },
                ],
            },
            {
                id: "KL-TS",
                name: "Thrissur",
                cities: [
                    {
                        id: "KL-TS-TCR",
                        name: "Thrissur City",
                        spots: [{ id: "KL12", name: "Swaraj Round" }],
                    },
                ],
            },
            {
                id: "KL-KL",
                name: "Kollam",
                cities: [
                    {
                        id: "KL-KL-KLM",
                        name: "Kollam City",
                        spots: [{ id: "KL13", name: "Chinnakada Chauraha" }],
                    },
                ],
            },
            {
                id: "KL-PL",
                name: "Palakkad",
                cities: [
                    {
                        id: "KL-PL-PKD",
                        name: "Palakkad Town",
                        spots: [{ id: "KL14", name: "KSRTC Bus Stand Road" }],
                    },
                ],
            },
            {
                id: "KL-ML",
                name: "Malappuram",
                cities: [
                    {
                        id: "KL-ML-MPM",
                        name: "Malappuram Town",
                        spots: [{ id: "KL15", name: "Kottakkal Junction" }],
                    },
                ],
            },
            {
                id: "KL-KT",
                name: "Kottayam",
                cities: [
                    {
                        id: "KL-KT-KTM",
                        name: "Kottayam Town",
                        spots: [{ id: "KL16", name: "Kanjikuzhy Junction" }],
                    },
                ],
            },
        ],
    },
    {
        id: "LA",
        name: "Ladakh",
        districts: [
            {
                id: "LA-LE",
                name: "Leh",
                cities: [
                    {
                        id: "LA-LE-LEH",
                        name: "Leh Town",
                        spots: [
                            { id: "LA1", name: "Main Bazaar Road" },
                            { id: "LA2", name: "Shanti Stupa Road Crossing" },
                        ],
                    },
                ],
            },
            {
                id: "LA-KR",
                name: "Kargil",
                cities: [
                    {
                        id: "LA-KR-KGL",
                        name: "Kargil Town",
                        spots: [{ id: "LA3", name: "Main Chowk Kargil" }],
                    },
                ],
            },
        ],
    },
    {
        id: "LD",
        name: "Lakshadweep",
        districts: [
            {
                id: "LD-KV",
                name: "Kavaratti",
                cities: [
                    {
                        id: "LD-KV-KAV",
                        name: "Kavaratti Island",
                        spots: [{ id: "LD1", name: "Main Jetty Road" }],
                    },
                ],
            },
        ],
    },
    {
        id: "MP",
        name: "Madhya Pradesh",
        districts: [
            {
                id: "MP-ID",
                name: "Indore",
                cities: [
                    {
                        id: "MP-ID-IDR",
                        name: "Indore City",
                        spots: [
                            { id: "MP1", name: "Rajwada Circle" },
                            { id: "MP2", name: "Bhawarkua Square" },
                            { id: "MP3", name: "Vijay Nagar Square" },
                            { id: "MP7", name: "Chapan Bhog Crossing" },
                            { id: "MP8", name: "LIG Square" },
                        ],
                    },
                ],
            },
            {
                id: "MP-BH",
                name: "Bhopal",
                cities: [
                    {
                        id: "MP-BH-BPL",
                        name: "Bhopal City",
                        spots: [
                            { id: "MP4", name: "Board Office Square" },
                            { id: "MP5", name: "Cheetak Bridge" },
                            { id: "MP9", name: "MP Nagar Zone 1" },
                            { id: "MP10", name: "Hamidia Road" },
                        ],
                    },
                ],
            },
            {
                id: "MP-GW",
                name: "Gwalior",
                cities: [
                    {
                        id: "MP-GW-GWL",
                        name: "Gwalior City",
                        spots: [
                            { id: "MP6", name: "Phool Bagh Centre" },
                            { id: "MP11", name: "Gole Ka Mandir Junction" },
                        ],
                    },
                ],
            },
            {
                id: "MP-JB",
                name: "Jabalpur",
                cities: [
                    {
                        id: "MP-JB-JBL",
                        name: "Jabalpur City",
                        spots: [{ id: "MP12", name: "Civic Centre Chauraha" }],
                    },
                ],
            },
            {
                id: "MP-UJ",
                name: "Ujjain",
                cities: [
                    {
                        id: "MP-UJ-UJN",
                        name: "Ujjain City",
                        spots: [{ id: "MP13", name: "Mahakal Temple Road" }],
                    },
                ],
            },
            {
                id: "MP-SA",
                name: "Sagar",
                cities: [
                    {
                        id: "MP-SA-SGR",
                        name: "Sagar City",
                        spots: [{ id: "MP14", name: "Katira Market Road" }],
                    },
                ],
            },
            {
                id: "MP-RE",
                name: "Rewa",
                cities: [
                    {
                        id: "MP-RE-REWA",
                        name: "Rewa City",
                        spots: [{ id: "MP15", name: "Sirmaur Chauraha" }],
                    },
                ],
            },
        ],
    },
    {
        id: "MH",
        name: "Maharashtra",
        districts: [
            {
                id: "MH-MUM",
                name: "Mumbai City",
                cities: [
                    {
                        id: "MH-MUM-MUM",
                        name: "Mumbai",
                        spots: [
                            { id: "MH1", name: "Dadar TT Circle" },
                            { id: "MH2", name: "Sion Circle" },
                            { id: "MH3", name: "Western Express Highway Exit" },
                            { id: "MH4", name: "Bandra-Worli Sea Link Entrance" },
                            { id: "MH5", name: "Kurla West Signal" },
                            { id: "MH6", name: "Powai Hiranandani Garden" },
                            { id: "MH7", name: "Vashi Bridge" },
                            { id: "MH14", name: "Andheri East Station Road" },
                            { id: "MH15", name: "Borivali Station Landing" },
                        ],
                    },
                ],
            },
            {
                id: "MH-PUN",
                name: "Pune",
                cities: [
                    {
                        id: "MH-PUN-PUN",
                        name: "Pune City",
                        spots: [
                            { id: "MH8", name: "Hinjewadi IT Park Exit" },
                            { id: "MH9", name: "Swargate Junction" },
                            { id: "MH10", name: "Wakad Bridge" },
                            { id: "MH11", name: "Viman Nagar Square" },
                            { id: "MH16", name: "Hadapsar Gadital" },
                            { id: "MH17", name: "Magarpatta City Entrance" },
                        ],
                    },
                ],
            },
            {
                id: "MH-NG",
                name: "Nagpur",
                cities: [
                    {
                        id: "MH-NG-NGP",
                        name: "Nagpur City",
                        spots: [
                            { id: "MH12", name: "Vari Square" },
                            { id: "MH18", name: "Zero Mile Circle" },
                        ],
                    },
                ],
            },
            {
                id: "MH-NS",
                name: "Nashik",
                cities: [
                    {
                        id: "MH-NS-NSK",
                        name: "Nashik City",
                        spots: [
                            { id: "MH13", name: "Dwarka Circle" },
                            { id: "MH19", name: "Mumbai Naka" },
                        ],
                    },
                ],
            },
            {
                id: "MH-TH",
                name: "Thane",
                cities: [
                    {
                        id: "MH-TH-THA",
                        name: "Thane City",
                        spots: [
                            { id: "MH20", name: "Teen Haath Naka" },
                            { id: "MH21", name: "Cadbury Junction" },
                        ],
                    },
                ],
            },
            {
                id: "MH-AU",
                name: "Aurangabad",
                cities: [
                    {
                        id: "MH-AU-AUR",
                        name: "Aurangabad City",
                        spots: [{ id: "MH22", name: "Kranti Chowk" }],
                    },
                ],
            },
            {
                id: "MH-SO",
                name: "Solapur",
                cities: [
                    {
                        id: "MH-SO-SOL",
                        name: "Solapur City",
                        spots: [{ id: "MH23", name: "Saat Rasta Junction" }],
                    },
                ],
            },
            {
                id: "MH-AM",
                name: "Amravati",
                cities: [
                    {
                        id: "MH-AM-AMR",
                        name: "Amravati City",
                        spots: [{ id: "MH24", name: "Rajkamal Chowk" }],
                    },
                ],
            },
            {
                id: "MH-KO",
                name: "Kolhapur",
                cities: [
                    {
                        id: "MH-KO-KOL",
                        name: "Kolhapur City",
                        spots: [{ id: "MH25", name: "Rajarampuri Main Road" }],
                    },
                ],
            },
            {
                id: "MH-SA",
                name: "Satara",
                cities: [
                    {
                        id: "MH-SA-SAT",
                        name: "Satara City",
                        spots: [{ id: "MH26", name: "Powai Naka" }],
                    },
                ],
            },
            {
                id: "MH-AK",
                name: "Akola",
                cities: [
                    {
                        id: "MH-AK-AKL",
                        name: "Akola City",
                        spots: [{ id: "MH27", name: "Tower Chowk Akola" }],
                    },
                ],
            },
        ],
    },
    {
        id: "MN",
        name: "Manipur",
        districts: [
            {
                id: "MN-IW",
                name: "Imphal West",
                cities: [
                    {
                        id: "MN-IW-IMP",
                        name: "Imphal",
                        spots: [
                            { id: "MN1", name: "Kangla Gate Junction" },
                            { id: "MN2", name: "BT Road Crossing" },
                        ],
                    },
                ],
            },
            {
                id: "MN-IE",
                name: "Imphal East",
                cities: [
                    {
                        id: "MN-IE-IMP",
                        name: "Porompat",
                        spots: [{ id: "MN3", name: "DC Office Road" }],
                    },
                ],
            },
        ],
    },
    {
        id: "ML",
        name: "Meghalaya",
        districts: [
            {
                id: "ML-EK",
                name: "East Khasi Hills",
                cities: [
                    {
                        id: "ML-EK-SHL",
                        name: "Shillong City",
                        spots: [
                            { id: "ML1", name: "Police Bazaar Circle" },
                            { id: "ML2", name: "Anjalee Petrol Pump Junction" },
                        ],
                    },
                ],
            },
            {
                id: "ML-TU",
                name: "West Garo Hills",
                cities: [
                    {
                        id: "ML-TU-TURA",
                        name: "Tura Town",
                        spots: [{ id: "ML3", name: "Tura Bazaar Road" }],
                    },
                ],
            },
        ],
    },
    {
        id: "MZ",
        name: "Mizoram",
        districts: [
            {
                id: "MZ-AZ",
                name: "Aizawl",
                cities: [
                    {
                        id: "MZ-AZ-AIZ",
                        name: "Aizawl City",
                        spots: [
                            { id: "MZ1", name: "Mission Veng Junction" },
                            { id: "MZ2", name: "Zarkawt Crossing" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "NL",
        name: "Nagaland",
        districts: [
            {
                id: "NL-KO",
                name: "Kohima",
                cities: [
                    {
                        id: "NL-KO-KOH",
                        name: "Kohima Town",
                        spots: [
                            { id: "NL1", name: "Razhu Point Junction" },
                            { id: "NL2", name: "Box Cutting Road" },
                        ],
                    },
                ],
            },
            {
                id: "NL-DI",
                name: "Dimapur",
                cities: [
                    {
                        id: "NL-DI-DIM",
                        name: "Dimapur City",
                        spots: [{ id: "NL3", name: "Holy Cross Junction" }],
                    },
                ],
            },
        ],
    },
    {
        id: "OR",
        name: "Odisha",
        districts: [
            {
                id: "OR-KH",
                name: "Khurda",
                cities: [
                    {
                        id: "OR-KH-BBU",
                        name: "Bhubaneswar",
                        spots: [
                            { id: "OR1", name: "Jayadev Vihar Junction" },
                            { id: "OR2", name: "Master Canteen Square" },
                            { id: "OR3", name: "Khandagiri Crossing" },
                            { id: "OR5", name: "Rasulgarh Square" },
                            { id: "OR6", name: "Patia Station Road Crossing" },
                        ],
                    },
                ],
            },
            {
                id: "OR-CU",
                name: "Cuttack",
                cities: [
                    {
                        id: "OR-CU-CUT",
                        name: "Cuttack City",
                        spots: [
                            { id: "OR4", name: "Badambadi Bus Stand" },
                            { id: "OR7", name: "Link Road Junction" },
                        ],
                    },
                ],
            },
            {
                id: "OR-PU",
                name: "Puri",
                cities: [
                    {
                        id: "OR-PU-PUR",
                        name: "Puri Town",
                        spots: [{ id: "OR8", name: "Grand Road Entrance" }],
                    },
                ],
            },
            {
                id: "OR-RU",
                name: "Rourkela",
                cities: [
                    {
                        id: "OR-RU-ROU",
                        name: "Rourkela City",
                        spots: [{ id: "OR9", name: "Udit Nagar Crossing" }],
                    },
                ],
            },
            {
                id: "OR-SA",
                name: "Sambalpur",
                cities: [
                    {
                        id: "OR-SA-SAM",
                        name: "Sambalpur City",
                        spots: [{ id: "OR10", name: "Laxmi Talkies Chauraha" }],
                    },
                ],
            },
        ],
    },
    {
        id: "PY",
        name: "Puducherry",
        districts: [
            {
                id: "PY-PD",
                name: "Pondicherry",
                cities: [
                    {
                        id: "PY-PD-PON",
                        name: "Puducherry Town",
                        spots: [
                            { id: "PY1", name: "Main Canal Road Square" },
                            { id: "PY2", name: "Auroville Junction" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PB",
        name: "Punjab",
        districts: [
            {
                id: "PB-AS",
                name: "Amritsar",
                cities: [
                    {
                        id: "PB-AS-AMR",
                        name: "Amritsar City",
                        spots: [
                            { id: "PB1", name: "Golden Temple Entry Point" },
                            { id: "PB5", name: "Hall Bazaar Crossing" },
                        ],
                    },
                ],
            },
            {
                id: "PB-LD",
                name: "Ludhiana",
                cities: [
                    {
                        id: "PB-LD-LDH",
                        name: "Ludhiana City",
                        spots: [
                            { id: "PB2", name: "Jalandhar Bypass Chowk" },
                            { id: "PB3", name: "Samrala Chowk" },
                            { id: "PB6", name: "Bharat Nagar Chowk" },
                        ],
                    },
                ],
            },
            {
                id: "PB-JL",
                name: "Jalandhar",
                cities: [
                    {
                        id: "PB-JL-JAL",
                        name: "Jalandhar City",
                        spots: [
                            { id: "PB4", name: "PAP Chowk" },
                            { id: "PB7", name: "Model Town Crossing" },
                        ],
                    },
                ],
            },
            {
                id: "PB-PT",
                name: "Patiala",
                cities: [
                    {
                        id: "PB-PT-PTL",
                        name: "Patiala City",
                        spots: [{ id: "PB8", name: "Phawara Chowk" }],
                    },
                ],
            },
            {
                id: "PB-BA",
                name: "Bathinda",
                cities: [
                    {
                        id: "PB-BA-BAT",
                        name: "Bathinda City",
                        spots: [{ id: "PB9", name: "Fauji Chowk Bathinda" }],
                    },
                ],
            },
            {
                id: "PB-SA",
                name: "Mohali",
                cities: [
                    {
                        id: "PB-SA-SAS",
                        name: "Mohali City",
                        spots: [{ id: "PB10", name: "Phase 7 Market Crossing" }],
                    },
                ],
            },
        ],
    },
    {
        id: "RJ",
        name: "Rajasthan",
        districts: [
            {
                id: "RJ-JP",
                name: "Jaipur",
                cities: [
                    {
                        id: "RJ-JP-JPR",
                        name: "Jaipur City",
                        spots: [
                            { id: "RJ1", name: "Statue Circle" },
                            { id: "RJ2", name: "Ajmeri Gate Junction" },
                            { id: "RJ3", name: "Jawahar Circle" },
                            { id: "RJ4", name: "Panch Batti Signal" },
                            { id: "RJ7", name: "Badi Chaupar Crossing" },
                            { id: "RJ8", name: "Mansarovar Metro Corridor Crossing" },
                        ],
                    },
                ],
            },
            {
                id: "RJ-JD",
                name: "Jodhpur",
                cities: [
                    {
                        id: "RJ-JD-JDH",
                        name: "Jodhpur City",
                        spots: [
                            { id: "RJ5", name: "Jalori Gate" },
                            { id: "RJ9", name: "Sojati Gate" },
                        ],
                    },
                ],
            },
            {
                id: "RJ-UD",
                name: "Udaipur",
                cities: [
                    {
                        id: "RJ-UD-UDI",
                        name: "Udaipur City",
                        spots: [
                            { id: "RJ6", name: "Surajpole Square" },
                            { id: "RJ10", name: "Cheetak Circle" },
                        ],
                    },
                ],
            },
            {
                id: "RJ-KO",
                name: "Kota",
                cities: [
                    {
                        id: "RJ-KO-KOT",
                        name: "Kota City",
                        spots: [{ id: "RJ11", name: "Gumanpura Market Square" }],
                    },
                ],
            },
            {
                id: "RJ-BI",
                name: "Bikaner",
                cities: [
                    {
                        id: "RJ-BI-BIK",
                        name: "Bikaner City",
                        spots: [{ id: "RJ12", name: "Ratan Bihari Temple Junction" }],
                    },
                ],
            },
            {
                id: "RJ-AJ",
                name: "Ajmer",
                cities: [
                    {
                        id: "RJ-AJ-AJM",
                        name: "Ajmer City",
                        spots: [{ id: "RJ13", name: "Madar Gate Chauraha" }],
                    },
                ],
            },
            {
                id: "RJ-BH",
                name: "Bhilwara",
                cities: [
                    {
                        id: "RJ-BH-BHL",
                        name: "Bhilwara City",
                        spots: [{ id: "RJ14", name: "Station Road Bridge Bhilwara" }],
                    },
                ],
            },
            {
                id: "RJ-AL",
                name: "Alwar",
                cities: [
                    {
                        id: "RJ-AL-ALW",
                        name: "Alwar Town",
                        spots: [{ id: "RJ15", name: "Hope Circus Alwar" }],
                    },
                ],
            },
        ],
    },
    {
        id: "SK",
        name: "Sikkim",
        districts: [
            {
                id: "SK-EG",
                name: "East Sikkim",
                cities: [
                    {
                        id: "SK-EG-GKT",
                        name: "Gangtok City",
                        spots: [
                            { id: "SK1", name: "MG Marg Entry" },
                            { id: "SK2", name: "Deorali Road Crossing" },
                        ],
                    },
                ],
            },
            {
                id: "SK-WG",
                name: "West Sikkim",
                cities: [
                    {
                        id: "SK-WG-GYS",
                        name: "Gyalshing Town",
                        spots: [{ id: "SK3", name: "Main Market Road" }],
                    },
                ],
            },
        ],
    },
    {
        id: "TN",
        name: "Tamil Nadu",
        districts: [
            {
                id: "TN-CHN",
                name: "Chennai",
                cities: [
                    {
                        id: "TN-CHN-CHN",
                        name: "Chennai City",
                        spots: [
                            { id: "TN1", name: "Kathipara Junction" },
                            { id: "TN2", name: "Tidel Park Signal" },
                            { id: "TN3", name: "Koyambedu Roundtana" },
                            { id: "TN4", name: "Tambaram Junction" },
                            { id: "TN5", name: "Guindy Flyover" },
                            { id: "TN6", name: "Central Station Road" },
                            { id: "TN10", name: "Velachery Main Road Junction" },
                            { id: "TN11", name: "Anna Salai - Gemini Flyover" },
                        ],
                    },
                ],
            },
            {
                id: "TN-CMB",
                name: "Coimbatore",
                cities: [
                    {
                        id: "TN-CMB-CBE",
                        name: "Coimbatore City",
                        spots: [
                            { id: "TN7", name: "Gandhipuram Signal" },
                            { id: "TN8", name: "Avinashi Road Junction" },
                            { id: "TN12", name: "Laxmi Mills Junction" },
                        ],
                    },
                ],
            },
            {
                id: "TN-MAD",
                name: "Madurai",
                cities: [
                    {
                        id: "TN-MAD-MDU",
                        name: "Madurai City",
                        spots: [
                            { id: "TN9", name: "Mattuthavani Area" },
                            { id: "TN13", name: "Goripalyam Junction" },
                        ],
                    },
                ],
            },
            {
                id: "TN-TRI",
                name: "Tiruchirappalli",
                cities: [
                    {
                        id: "TN-TRI-TRY",
                        name: "Trichy City",
                        spots: [{ id: "TN14", name: "Main Guard Gate" }],
                    },
                ],
            },
            {
                id: "TN-SLM",
                name: "Salem",
                cities: [
                    {
                        id: "TN-SLM-SLM",
                        name: "Salem City",
                        spots: [{ id: "TN15", name: "Five Road Junction" }],
                    },
                ],
            },
            {
                id: "TN-TIR",
                name: "Tiruppur",
                cities: [
                    {
                        id: "TN-TIR-TPR",
                        name: "Tiruppur Town",
                        spots: [{ id: "TN16", name: "Avinashi Road Crossing" }],
                    },
                ],
            },
            {
                id: "TN-ERO",
                name: "Erode",
                cities: [
                    {
                        id: "TN-ERO-ERD",
                        name: "Erode City",
                        spots: [{ id: "TN17", name: "Collectorate Junction" }],
                    },
                ],
            },
            {
                id: "TN-VEL",
                name: "Vellore",
                cities: [
                    {
                        id: "TN-VEL-VEL",
                        name: "Vellore City",
                        spots: [{ id: "TN18", name: "Green Circle" }],
                    },
                ],
            },
            {
                id: "TN-TUT",
                name: "Thoothukudi",
                cities: [
                    {
                        id: "TN-TUT-TUT",
                        name: "Tuticorin City",
                        spots: [{ id: "TN19", name: "VVD Junction" }],
                    },
                ],
            },
            {
                id: "TN-TNJ",
                name: "Thanjavur",
                cities: [
                    {
                        id: "TN-TNJ-TNJ",
                        name: "Thanjavur City",
                        spots: [
                            { id: "TN20", name: "Old Bus Stand Crossing" },
                            { id: "TN21", name: "New Bus Stand Road" },
                            { id: "TN22", name: "Big Temple Entry Road" },
                            { id: "TN23", name: "Medical College Road Junction" },
                            { id: "TN24", name: "Thanjavur Junction Station Road" },
                        ],
                    },
                    {
                        id: "TN-TNJ-KUM",
                        name: "Kumbakonam",
                        spots: [
                            { id: "TN25", name: "Mahamaham Tank Area" },
                            { id: "TN26", name: "Kumbakonam Bus Stand Junction" },
                            { id: "TN27", name: "Cauvery Bridge Crossing" },
                        ],
                    },
                    {
                        id: "TN-TNJ-PAT",
                        name: "Pattukkottai",
                        spots: [
                            { id: "TN28", name: "Clock Tower Junction" },
                            { id: "TN29", name: "Pattukkottai Bus Stand Area" },
                        ],
                    },
                    {
                        id: "TN-TNJ-THR",
                        name: "Thiruvaiyaru",
                        spots: [{ id: "TN30", name: "Thiruvaiyaru Bus Stand Circle" }],
                    },
                    {
                        id: "TN-TNJ-PAP",
                        name: "Papanasam",
                        spots: [{ id: "TN31", name: "Papanasam Railway Station Road" }],
                    },
                    {
                        id: "TN-TNJ-ADI",
                        name: "Adirampattinam",
                        spots: [{ id: "TN32", name: "Adirampattinam Port Road" }],
                    },
                    {
                        id: "TN-TNJ-ORA",
                        name: "Orathanadu",
                        spots: [{ id: "TN33", name: "Orathanadu Mukthambalpuram Crossing" }],
                    },
                    {
                        id: "TN-TNJ-PER",
                        name: "Peravurani",
                        spots: [{ id: "TN34", name: "Peravurani Market Junction" }],
                    },
                    {
                        id: "TN-TNJ-VAL",
                        name: "Vallam",
                        spots: [{ id: "TN35", name: "Vallam Thanjavur Road Junction" }],
                    },
                ],
            },
        ],
    },
    {
        id: "TG",
        name: "Telangana",
        districts: [
            {
                id: "TG-HYD",
                name: "Hyderabad",
                cities: [
                    {
                        id: "TG-HYD-HYD",
                        name: "Hyderabad City",
                        spots: [
                            { id: "TG1", name: "Hitech City Arch Junction" },
                            { id: "TG2", name: "Jubilee Hills Check Post" },
                            { id: "TG3", name: "Panjagutta Circle" },
                            { id: "TG4", name: "Secunderabad Station Square" },
                            { id: "TG5", name: "Ameerpet Crossing" },
                            { id: "TG6", name: "Begumpet Flyover" },
                            { id: "TG8", name: "LB Nagar X Roads" },
                            { id: "TG9", name: "Mehdipatnam Junction" },
                            { id: "TG10", name: "Kukatpally Housing Board Crossing" },
                        ],
                    },
                ],
            },
            {
                id: "TG-WR",
                name: "Warangal",
                cities: [
                    {
                        id: "TG-WR-WGL",
                        name: "Warangal City",
                        spots: [
                            { id: "TG7", name: "Hanamkonda Junction" },
                            { id: "TG11", name: "Mulugu Road Junction" },
                        ],
                    },
                ],
            },
            {
                id: "TG-NI",
                name: "Nizamabad",
                cities: [
                    {
                        id: "TG-NI-NIZ",
                        name: "Nizamabad Town",
                        spots: [{ id: "TG12", name: "Phulong Chauraha" }],
                    },
                ],
            },
            {
                id: "TG-KA",
                name: "Karimnagar",
                cities: [
                    {
                        id: "TG-KA-KAR",
                        name: "Karimnagar City",
                        spots: [{ id: "TG13", name: "Court Centre Junction" }],
                    },
                ],
            },
            {
                id: "TG-KH",
                name: "Khammam",
                cities: [
                    {
                        id: "TG-KH-KHM",
                        name: "Khammam Town",
                        spots: [{ id: "TG14", name: "Wyra Road Junction" }],
                    },
                ],
            },
        ],
    },
    {
        id: "TR",
        name: "Tripura",
        districts: [
            {
                id: "TR-WT",
                name: "West Tripura",
                cities: [
                    {
                        id: "TR-WT-AGT",
                        name: "Agartala City",
                        spots: [
                            { id: "TR1", name: "Radhanagar Junction" },
                            { id: "TR2", name: "Battala Square" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "UP",
        name: "Uttar Pradesh",
        districts: [
            {
                id: "UP-LK",
                name: "Lucknow",
                cities: [
                    {
                        id: "UP-LK-LKO",
                        name: "Lucknow City",
                        spots: [
                            { id: "UP1", name: "Hazratganj Crossing" },
                            { id: "UP2", name: "Polytechnic Chauraha" },
                            { id: "UP3", name: "Charbagh Station Area" },
                            { id: "UP4", name: "Alambagh Signal" },
                            { id: "UP10", name: "Munshipulia Crossing" },
                            { id: "UP11", name: "Engineering College Chauraha" },
                        ],
                    },
                ],
            },
            {
                id: "UP-KN",
                name: "Kanpur",
                cities: [
                    {
                        id: "UP-KN-KNP",
                        name: "Kanpur City",
                        spots: [
                            { id: "UP5", name: "Bada Chauraha" },
                            { id: "UP6", name: "Jhakarkati Bus Stand Junction" },
                            { id: "UP12", name: "Rawatpur Crossing" },
                        ],
                    },
                ],
            },
            {
                id: "UP-GZ",
                name: "Ghaziabad",
                cities: [
                    {
                        id: "UP-GZ-GZB",
                        name: "Ghaziabad City",
                        spots: [
                            { id: "UP7", name: "Indirapuram Crossing" },
                            { id: "UP13", name: "Mohan Nagar Junction" },
                        ],
                    },
                ],
            },
            {
                id: "UP-NO",
                name: "Gautam Buddha Nagar",
                cities: [
                    {
                        id: "UP-NO-NOI",
                        name: "Noida",
                        spots: [
                            { id: "UP8", name: "Sector 18 Crossing" },
                            { id: "UP9", name: "Pari Chowk Greater Noida" },
                            { id: "UP14", name: "Botanical Garden Metro Crossing" },
                        ],
                    },
                ],
            },
            {
                id: "UP-AG",
                name: "Agra",
                cities: [
                    {
                        id: "UP-AG-AGR",
                        name: "Agra City",
                        spots: [
                            { id: "UP15", name: "Bhagwan Talkies Crossing" },
                            { id: "UP16", name: "Raja Ki Mandi Junction" },
                        ],
                    },
                ],
            },
            {
                id: "UP-VA",
                name: "Varanasi",
                cities: [
                    {
                        id: "UP-VA-VNS",
                        name: "Varanasi City",
                        spots: [
                            { id: "UP17", name: "Godowlia Crossing" },
                            { id: "UP18", name: "Lanka BHU Gate Junction" },
                        ],
                    },
                ],
            },
            {
                id: "UP-ME",
                name: "Meerut",
                cities: [
                    {
                        id: "UP-ME-MRT",
                        name: "Meerut City",
                        spots: [{ id: "UP19", name: "Begumpul Chauraha" }],
                    },
                ],
            },
            {
                id: "UP-PR",
                name: "Prayagraj",
                cities: [
                    {
                        id: "UP-PR-ALD",
                        name: "Prayagraj City",
                        spots: [{ id: "UP20", name: "Civil Lines Junction" }],
                    },
                ],
            },
            {
                id: "UP-BR",
                name: "Bareilly",
                cities: [
                    {
                        id: "UP-BR-BLY",
                        name: "Bareilly City",
                        spots: [{ id: "UP21", name: "Chowki Chauraha Bareilly" }],
                    },
                ],
            },
            {
                id: "UP-AL",
                name: "Aligarh",
                cities: [
                    {
                        id: "UP-AL-ALG",
                        name: "Aligarh City",
                        spots: [{ id: "UP22", name: "Center Point Junction Aligarh" }],
                    },
                ],
            },
            {
                id: "UP-GO",
                name: "Gorakhpur",
                cities: [
                    {
                        id: "UP-GO-GKP",
                        name: "Gorakhpur City",
                        spots: [{ id: "UP23", name: "Golghar Market Crossing" }],
                    },
                ],
            },
            {
                id: "UP-JH",
                name: "Jhansi",
                cities: [
                    {
                        id: "UP-JH-JHS",
                        name: "Jhansi City",
                        spots: [{ id: "UP24", name: "Elite Chauraha" }],
                    },
                ],
            },
        ],
    },
    {
        id: "UT",
        name: "Uttarakhand",
        districts: [
            {
                id: "UT-DD",
                name: "Dehradun",
                cities: [
                    {
                        id: "UT-DD-DDN",
                        name: "Dehradun City",
                        spots: [
                            { id: "UT1", name: "Clock Tower Junction" },
                            { id: "UT2", name: "ISBT Dehradun Crossing" },
                            { id: "UT4", name: "Rajpur Road Crossing" },
                        ],
                    },
                ],
            },
            {
                id: "UT-HR",
                name: "Haridwar",
                cities: [
                    {
                        id: "UT-HR-HRI",
                        name: "Haridwar Town",
                        spots: [
                            { id: "UT3", name: "Har Ki Pauri Entry Side" },
                            { id: "UT5", name: "Chandighat Bridge Junction" },
                        ],
                    },
                ],
            },
            {
                id: "UT-NA",
                name: "Nainital",
                cities: [
                    {
                        id: "UT-NA-HAL",
                        name: "Haldwani",
                        spots: [{ id: "UT6", name: "Mukhani Chauraha" }],
                    },
                ],
            },
        ],
    },
    {
        id: "WB",
        name: "West Bengal",
        districts: [
            {
                id: "WB-KO",
                name: "Kolkata",
                cities: [
                    {
                        id: "WB-KO-KOL",
                        name: "Kolkata City",
                        spots: [
                            { id: "WB1", name: "Howrah Bridge Entrance" },
                            { id: "WB2", name: "Esplanade Junction" },
                            { id: "WB3", name: "Park Street Crossing" },
                            { id: "WB4", name: "Ultadanga Crossing" },
                            { id: "WB5", name: "Sealadah Station Area" },
                            { id: "WB6", name: "Gariahat Crossing" },
                            { id: "WB9", name: "Shyam Bazaar Five Road Crossing" },
                            { id: "WB10", name: "Ruby General Hospital Crossing" },
                        ],
                    },
                ],
            },
            {
                id: "WB-DA",
                name: "Darjeeling",
                cities: [
                    {
                        id: "WB-DA-DAR",
                        name: "Darjeeling Town",
                        spots: [
                            { id: "WB7", name: "Chowrasta Entrance" },
                            { id: "WB11", name: "Ghoom Monastery Road Crossing" },
                        ],
                    },
                    {
                        id: "WB-DA-SGU",
                        name: "Siliguri",
                        spots: [{ id: "WB12", name: "Venus More Siliguri" }],
                    },
                ],
            },
            {
                id: "WB-HW",
                name: "Howrah",
                cities: [
                    {
                        id: "WB-HW-HWH",
                        name: "Howrah City",
                        spots: [
                            { id: "WB8", name: "Howrah Maidan Junction" },
                            { id: "WB13", name: "Santragachi Crossing" },
                        ],
                    },
                ],
            },
            {
                id: "WB-PU",
                name: "Purba Medinipur",
                cities: [
                    {
                        id: "WB-PU-HAL",
                        name: "Haldia",
                        spots: [{ id: "WB14", name: "City Centre Square" }],
                    },
                ],
            },
            {
                id: "WB-DU",
                name: "Paschim Bardhaman",
                cities: [
                    {
                        id: "WB-DU-DUR",
                        name: "Durgapur",
                        spots: [{ id: "WB15", name: "Muchipara Crossing" }],
                    },
                    {
                        id: "WB-DU-ASL",
                        name: "Asansol",
                        spots: [{ id: "WB16", name: "Burnpur Road Crossing" }],
                    },
                ],
            },
        ],
    },
];


