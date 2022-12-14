const periodicTable = [
	{
		name: "Hydrogen",
		symbol: "H",
		atomic_number: 1,
		atomic_mass: "1.00794",
		group: "1",
		period: "1"
	},
	{
		name: "Helium",
		symbol: "He",
		atomic_number: 2,
		atomic_mass: "4.002602",
		group: "18",
		period: "1"
	},
	{
		name: "Lithium",
		symbol: "Li",
		atomic_number: 3,
		atomic_mass: "6.941",
		group: "1",
		period: "2"
	},
	{
		name: "Beryllium",
		symbol: "Be",
		atomic_number: 4,
		atomic_mass: "9.012182",
		group: "2",
		period: "2"
	},
	{
		name: "Boron",
		symbol: "B",
		atomic_number: 5,
		atomic_mass: "10.811",
		group: "13",
		period: "2"
	},
	{
		name: "Carbon",
		symbol: "C",
		atomic_number: 6,
		atomic_mass: "12.0107",
		group: "14",
		period: "2"
	},
	{
		name: "Nitrogen",
		symbol: "N",
		atomic_number: 7,
		atomic_mass: "14.0067",
		group: "15",
		period: "2"
	},
	{
		name: "Oxygen",
		symbol: "O",
		atomic_number: 8,
		atomic_mass: "15.9994",
		group: "16",
		period: "2"
	},
	{
		name: "Flourine",
		symbol: "F",
		atomic_number: 9,
		atomic_mass: "18.9984032",
		group: "17",
		period: "2"
	},
	{
		name: "Neon",
		symbol: "Ne",
		atomic_number: 10,
		atomic_mass: "20.1797",
		group: "18",
		period: "2"
	},
	{
		name: "Sodium",
		symbol: "Na",
		atomic_number: 11,
		atomic_mass: "22.98977",
		group: "1",
		period: "3"
	},
	{
		name: "Magnesium",
		symbol: "Mg",
		atomic_number: 12,
		atomic_mass: "24.305",
		group: "2",
		period: "3"
	},
	{
		name: "Aliminum",
		symbol: "Al",
		atomic_number: 13,
		atomic_mass: "26.981538",
		group: "13",
		period: "3"
	},
	{
		name: "Silicon",
		symbol: "Si",
		atomic_number: 14,
		atomic_mass: "28.0855",
		group: "14",
		period: "3"
	},
	{
		name: "Phophorus",
		symbol: "P",
		atomic_number: 15,
		atomic_mass: "30.973761",
		group: "15",
		period: "3"
	},
	{
		name: "Sulfur",
		symbol: "S",
		atomic_number: 16,
		atomic_mass: "32.065",
		group: "16",
		period: "3"
	},
	{
		name: "Chlorine",
		symbol: "Cl",
		atomic_number: 17,
		atomic_mass: "35.453",
		group: "17",
		period: "3"
	},
	{
		name: "Argon",
		symbol: "Ar",
		atomic_number: 18,
		atomic_mass: "39.948",
		group: "18",
		period: "3"
	},
	{
		name: "Potassium",
		symbol: "K",
		atomic_number: 19,
		atomic_mass: "39.098",
		group: "1",
		period: "4"
	},
	{
		name: "Calcium",
		symbol: "Ca",
		atomic_number: 20,
		atomic_mass: "40.078",
		group: "2",
		period: "4"
	},
	{
		name: "Scandium",
		symbol: "Sc",
		atomic_number: 21,
		atomic_mass: "44.95591",
		group: "3",
		period: "4"
	},
	{
		name: "Titanium",
		symbol: "Ti",
		atomic_number: 22,
		atomic_mass: "47.867",
		group: "4",
		period: "4"
	},
	{
		name: "Vanadium",
		symbol: "V",
		atomic_number: 23,
		atomic_mass: "50.9415",
		group: "5",
		period: "4"
	},
	{
		name: "Chromium",
		symbol: "Cr",
		atomic_number: 24,
		atomic_mass: "51.9961",
		group: "6",
		period: "4"
	},
	{
		name: "Manganese",
		symbol: "Mn",
		atomic_number: 25,
		atomic_mass: "54.938049",
		group: "7",
		period: "4"
	},
	{
		name: "Iron",
		symbol: "Fe",
		atomic_number: 26,
		atomic_mass: "55.845",
		group: "8",
		period: "4"
	},
	{
		name: "Cobalt",
		symbol: "Co",
		atomic_number: 27,
		atomic_mass: "58.9332",
		group: "9",
		period: "4"
	},
	{
		name: "Nickel",
		symbol: "Ni",
		atomic_number: 28,
		atomic_mass: "58.6934",
		group: "10",
		period: "4"
	},
	{
		name: "Copper",
		symbol: "Cu",
		atomic_number: 29,
		atomic_mass: "63.546",
		group: "11",
		period: "4"
	},
	{
		name: "Zinc",
		symbol: "Zn",
		atomic_number: 30,
		atomic_mass: "65.409",
		group: "12",
		period: "4"
	},
	{
		name: "Galium",
		symbol: "Ga",
		atomic_number: 31,
		atomic_mass: "69.723",
		group: "13",
		period: "4"
	},
	{
		name: "Germanium",
		symbol: "Ge",
		atomic_number: 32,
		atomic_mass: "72.64",
		group: "14",
		period: "4"
	},
	{
		name: "Arsenic",
		symbol: "As",
		atomic_number: 33,
		atomic_mass: "74.9216",
		group: "15",
		period: "4"
	},
	{
		name: "Selenium",
		symbol: "Se",
		atomic_number: 34,
		atomic_mass: "78.96",
		group: "16",
		period: "4"
	},
	{
		name: "Bromine",
		symbol: "Br",
		atomic_number: 35,
		atomic_mass: "79.904",
		group: "17",
		period: "4"
	},
	{
		name: "Krypton",
		symbol: "Kr",
		atomic_number: 36,
		atomic_mass: "83.798",
		group: "18",
		period: "4"
	},
	{
		name: "Rubidium",
		symbol: "Rb",
		atomic_number: 37,
		atomic_mass: "85.4678",
		group: "1",
		period: "5"
	},
	{
		name: "Strontium",
		symbol: "Sr",
		atomic_number: 38,
		atomic_mass: "87.62",
		group: "2",
		period: "5"
	},
	{
		name: "Yttrium",
		symbol: "Y",
		atomic_number: 39,
		atomic_mass: "88.90585",
		group: "3",
		period: "5"
	},
	{
		name: "Zirconium",
		symbol: "Zr",
		atomic_number: 40,
		atomic_mass: "91.224",
		group: "4",
		period: "5"
	},
	{
		name: "Niobium",
		symbol: "Nb",
		atomic_number: 41,
		atomic_mass: "92.90638",
		group: "5",
		period: "5"
	},
	{
		name: "Molybdenum",
		symbol: "Mo",
		atomic_number: 42,
		atomic_mass: "95.94",
		group: "6",
		period: "5"
	},
	{
		name: "Technetium",
		symbol: "Tc",
		atomic_number: 43,
		atomic_mass: "99",
		group: "7",
		period: "5"
	},
	{
		name: "Ruthenium",
		symbol: "Ru",
		atomic_number: 44,
		atomic_mass: "101.07",
		group: "8",
		period: "5"
	},
	{
		name: "Rhodium",
		symbol: "Rh",
		atomic_number: 45,
		atomic_mass: "102.9055",
		group: "9",
		period: "5"
	},
	{
		name: "Palladium",
		symbol: "Pd",
		atomic_number: 46,
		atomic_mass: "106.42",
		group: "10",
		period: "5"
	},
	{
		name: "Silver",
		symbol: "Ag",
		atomic_number: 47,
		atomic_mass: "107.8682",
		group: "11",
		period: "5"
	},
	{
		name: "Cadmium",
		symbol: "Cd",
		atomic_number: 48,
		atomic_mass: "112.411",
		group: "12",
		period: "5"
	},
	{
		name: "Indium",
		symbol: "In",
		atomic_number: 49,
		atomic_mass: "114.813",
		group: "13",
		period: "5"
	},
	{
		name: "Tin",
		symbol: "Sn",
		atomic_number: 50,
		atomic_mass: "118.71",
		group: "14",
		period: "5"
	},
	{
		name: "Antimony",
		symbol: "Sb",
		atomic_number: 51,
		atomic_mass: "121.76",
		group: "15",
		period: "5"
	},
	{
		name: "Tellurium",
		symbol: "Te",
		atomic_number: 52,
		atomic_mass: "127.6",
		group: "16",
		period: "5"
	},
	{
		name: "Iodine",
		symbol: "I",
		atomic_number: 53,
		atomic_mass: "126.90447",
		group: "17",
		period: "5"
	},
	{
		name: "Xenon",
		symbol: "Xe",
		atomic_number: 54,
		atomic_mass: "131.293",
		group: "18",
		period: "5"
	},
	{
		name: "Cesium",
		symbol: "Cs",
		atomic_number: 55,
		atomic_mass: "132.90545",
		group: "1",
		period: "6"
	},
	{
		name: "Barium",
		symbol: "Ba",
		atomic_number: 56,
		atomic_mass: "137.327",
		group: "2",
		period: "6"
	},
	{
		name: "Lanthanum",
		symbol: "La",
		atomic_number: 57,
		atomic_mass: "138.9055",
		group: "",
		period: "6"
	},
	{
		name: "Cerium",
		symbol: "Ce",
		atomic_number: 58,
		atomic_mass: "140.116",
		group: "",
		period: "6"
	},
	{
		name: "Praseodymium",
		symbol: "Pr",
		atomic_number: 59,
		atomic_mass: "140.90765",
		group: "",
		period: "6"
	},
	{
		name: "Neodymium",
		symbol: "Nd",
		atomic_number: 60,
		atomic_mass: "144.24",
		group: "",
		period: "6"
	},
	{
		name: "Promethium",
		symbol: "Pm",
		atomic_number: 61,
		atomic_mass: "145",
		group: "",
		period: "6"
	},
	{
		name: "Samarium",
		symbol: "Sm",
		atomic_number: 62,
		atomic_mass: "150.36",
		group: "",
		period: "6"
	},
	{
		name: "Europium",
		symbol: "Eu",
		atomic_number: 63,
		atomic_mass: "151.964",
		group: "",
		period: "6"
	},
	{
		name: "Gadollnium",
		symbol: "Gd",
		atomic_number: 64,
		atomic_mass: "157.25",
		group: "",
		period: "6"
	},
	{
		name: "Terbium",
		symbol: "Tb",
		atomic_number: 65,
		atomic_mass: "158.92534",
		group: "",
		period: "6"
	},
	{
		name: "Dysprosium",
		symbol: "Dy",
		atomic_number: 66,
		atomic_mass: "162.5",
		group: "",
		period: "6"
	},
	{
		name: "Holmium",
		symbol: "Ho",
		atomic_number: 67,
		atomic_mass: "164.93032",
		group: "",
		period: "6"
	},
	{
		name: "Erbium",
		symbol: "Er",
		atomic_number: 68,
		atomic_mass: "167.259",
		group: "",
		period: "6"
	},
	{
		name: "Thulium",
		symbol: "Tm",
		atomic_number: 69,
		atomic_mass: "168.93421",
		group: "",
		period: "6"
	},
	{
		name: "Ytterbium",
		symbol: "Yb",
		atomic_number: 70,
		atomic_mass: "173.04",
		group: "",
		period: "6"
	},
	{
		name: "Luteium",
		symbol: "Lu",
		atomic_number: 71,
		atomic_mass: "174.967",
		group: "3",
		period: "6"
	},
	{
		name: "Hafnium",
		symbol: "Hf",
		atomic_number: 72,
		atomic_mass: "178.49",
		group: "4",
		period: "6"
	},
	{
		name: "Tantalum",
		symbol: "Ta",
		atomic_number: 73,
		atomic_mass: "180.947",
		group: "5",
		period: "6"
	},
	{
		name: "Tungsten",
		symbol: "W",
		atomic_number: 74,
		atomic_mass: "183.84",
		group: "6",
		period: "6"
	},
	{
		name: "Rhenium",
		symbol: "Re",
		atomic_number: 75,
		atomic_mass: "186.207",
		group: "7",
		period: "6"
	},
	{
		name: "Osmium",
		symbol: "Os",
		atomic_number: 76,
		atomic_mass: "190.23",
		group: "8",
		period: "6"
	},
	{
		name: "Iridium",
		symbol: "Ir",
		atomic_number: 77,
		atomic_mass: "192.217",
		group: "9",
		period: "6"
	},
	{
		name: "Platinum",
		symbol: "Pt",
		atomic_number: 78,
		atomic_mass: "195.078",
		group: "10",
		period: "6"
	},
	{
		name: "Gold",
		symbol: "Au",
		atomic_number: 79,
		atomic_mass: "196.96655",
		group: "11",
		period: "6"
	},
	{
		name: "Mercury",
		symbol: "Hg",
		atomic_number: 80,
		atomic_mass: "200.59",
		group: "12",
		period: "6"
	},
	{
		name: "Thallium",
		symbol: "Tl",
		atomic_number: 81,
		atomic_mass: "204.3833",
		group: "13",
		period: "6"
	},
	{
		name: "Lead",
		symbol: "Pb",
		atomic_number: 82,
		atomic_mass: "207.2",
		group: "14",
		period: "6"
	},
	{
		name: "Bismuth",
		symbol: "Bi",
		atomic_number: 83,
		atomic_mass: "208.98038",
		group: "15",
		period: "6"
	},
	{
		name: "Polonium",
		symbol: "Po",
		atomic_number: 84,
		atomic_mass: "210",
		group: "16",
		period: "6"
	},
	{
		name: "Astatine",
		symbol: "At",
		atomic_number: 85,
		atomic_mass: "210",
		group: "17",
		period: "6"
	},
	{
		name: "Radon",
		symbol: "Rn",
		atomic_number: 86,
		atomic_mass: "222",
		group: "18",
		period: "6"
	},
	{
		name: "Francium",
		symbol: "Fr",
		atomic_number: 87,
		atomic_mass: "223",
		group: "1",
		period: "7"
	},
	{
		name: "Radium",
		symbol: "Ra",
		atomic_number: 88,
		atomic_mass: "226",
		group: "2",
		period: "7"
	},
	{
		name: "Actinium",
		symbol: "Ac",
		atomic_number: 89,
		atomic_mass: "227",
		group: "",
		period: "7"
	},
	{
		name: "Thorium",
		symbol: "Th",
		atomic_number: 90,
		atomic_mass: "232.0381",
		group: "",
		period: "7"
	},
	{
		name: "Protactinium",
		symbol: "Pa",
		atomic_number: 91,
		atomic_mass: "231.03588",
		group: "",
		period: "7"
	},
	{
		name: "Uranium",
		symbol: "U",
		atomic_number: 92,
		atomic_mass: "238.02891",
		group: "",
		period: "7"
	},
	{
		name: "Neptunium",
		symbol: "Np",
		atomic_number: 93,
		atomic_mass: "237",
		group: "",
		period: "7"
	},
	{
		name: "Plutonium",
		symbol: "Pu",
		atomic_number: 94,
		atomic_mass: "244",
		group: "",
		period: "7"
	},
	{
		name: "Americium",
		symbol: "Am",
		atomic_number: 95,
		atomic_mass: "243",
		group: "",
		period: "7"
	},
	{
		name: "Curium",
		symbol: "Cm",
		atomic_number: 96,
		atomic_mass: "247",
		group: "",
		period: "7"
	},
	{
		name: "Berkelium",
		symbol: "Bk",
		atomic_number: 97,
		atomic_mass: "247",
		group: "",
		period: "7"
	},
	{
		name: "Californium",
		symbol: "Cf",
		atomic_number: 98,
		atomic_mass: "251",
		group: "",
		period: "7"
	},
	{
		name: "Einsteinium",
		symbol: "Es",
		atomic_number: 99,
		atomic_mass: "254",
		group: "",
		period: "7"
	},
	{
		name: "Fermium",
		symbol: "Fm",
		atomic_number: 100,
		atomic_mass: "257",
		group: "",
		period: "7"
	},
	{
		name: "Mendelevium",
		symbol: "Md",
		atomic_number: 101,
		atomic_mass: "260",
		group: "",
		period: "7"
	},
	{
		name: "Nobelium",
		symbol: "No",
		atomic_number: 102,
		atomic_mass: "259",
		group: "",
		period: "7"
	},
	{
		name: "Lawrencium",
		symbol: "Lr",
		atomic_number: 103,
		atomic_mass: "262",
		group: "3",
		period: "7"
	},
	{
		name: "Rutherfordium",
		symbol: "Rf",
		atomic_number: 104,
		atomic_mass: "261",
		group: "4",
		period: "7"
	},
	{
		name: "Dubnium",
		symbol: "Db",
		atomic_number: 105,
		atomic_mass: "262",
		group: "5",
		period: "7"
	},
	{
		name: "Seaborgium",
		symbol: "Sg",
		atomic_number: 106,
		atomic_mass: "266",
		group: "6",
		period: "7"
	},
	{
		name: "Bohrium",
		symbol: "Bh",
		atomic_number: 107,
		atomic_mass: "262",
		group: "7",
		period: "7"
	},
	{
		name: "Hassium",
		symbol: "Hs",
		atomic_number: 108,
		atomic_mass: "265",
		group: "8",
		period: "7"
	},
	{
		name: "Meitnerium",
		symbol: "Mt",
		atomic_number: 109,
		atomic_mass: "266",
		group: "9",
		period: "7"
	},
	{
		name: "Darmstadtium",
		symbol: "Ds",
		atomic_number: 110,
		atomic_mass: "281",
		group: "10",
		period: "7"
	},
	{
		name: "Roentgenium",
		symbol: "Rg",
		atomic_number: 111,
		atomic_mass: "272",
		group: "11",
		period: "7"
	},
	{
		name: "Copernicium",
		symbol: "Cn",
		atomic_number: 112,
		atomic_mass: "285",
		group: "12",
		period: "7"
	},
	{
		name: "Ununtrium",
		symbol: "Uut",
		atomic_number: 113,
		atomic_mass: "284",
		group: "13",
		period: "7"
	},
	{
		name: "Flerovium",
		symbol: "Fl",
		atomic_number: 114,
		atomic_mass: "289",
		group: "14",
		period: "7"
	},
	{
		name: "Ununpentium",
		symbol: "Uup",
		atomic_number: 115,
		atomic_mass: "288",
		group: "15",
		period: "7"
	},
	{
		name: "Livermorium",
		symbol: "Lv",
		atomic_number: 116,
		atomic_mass: "293",
		group: "16",
		period: "7"
	},
	{
		name: "Ununseptium",
		symbol: "Uus",
		atomic_number: 117,
		atomic_mass: "294",
		group: "17",
		period: "7"
	},
	{
		name: "Ununoctium",
		symbol: "Uuo",
		atomic_number: 118,
		atomic_mass: "294",
		group: "18",
		period: "7"
	}
]

export default periodicTable;