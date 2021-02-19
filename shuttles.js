const shuttles = [
    {
        name: "Lotlux",
        launch_date: "12/1/2011",
        crew: "Tamil",
        success: false
    },
    {
        name: "Zontrax",
        launch_date: "1/22/1992",
        crew: "Macedonian",
        success: true
    },
    {
        name: "Stim",
        launch_date: "7/24/1995",
        crew: "Guaraní",
        success: true
    },
    {
        name: "Lotlux",
        launch_date: "9/18/1967",
        crew: "Aymara",
        success: true
    },
    {
        name: "Home Ing",
        launch_date: "2/6/1978",
        crew: "Moldovan",
        success: true
    },
    {
        name: "Quo Lux",
        launch_date: "6/24/1977",
        crew: "Haitian Creole",
        success: true
    },
    {
        name: "Biodex",
        launch_date: "5/26/1976",
        crew: "Belarusian",
        success: false
    },
    {
        name: "Flowdesk",
        launch_date: "5/10/2015",
        crew: "Aymara",
        success: true
    },
    {
        name: "Vagram",
        launch_date: "7/29/1989",
        crew: "Montenegrin",
        success: true
    },
    {
        name: "Prodder",
        launch_date: "7/14/1997",
        crew: "Lithuanian",
        success: false
    },
    {
        name: "Stringtough",
        launch_date: "6/18/2012",
        crew: "Luxembourgish",
        success: true
    },
    {
        name: "Cardify",
        launch_date: "11/9/1971",
        crew: "Burmese",
        success: false
    },
    {
        name: "Prodder",
        launch_date: "10/2/1965",
        crew: "Persian",
        success: false
    },
    {
        name: "Voltsillam",
        launch_date: "1/3/2008",
        crew: "Finnish",
        success: true
    },
    {
        name: "Y-find",
        launch_date: "12/28/1967",
        crew: "Swedish",
        success: false
    },
    {
        name: "Daltfresh",
        launch_date: "4/16/2016",
        crew: "Swahili",
        success: false
    },
    {
        name: "Toughjoyfax",
        launch_date: "11/29/2014",
        crew: "Arabic",
        success: false
    },
    {
        name: "Tres-Zap",
        launch_date: "8/26/1964",
        crew: "Fijian",
        success: false
    },
    {
        name: "Namfix",
        launch_date: "10/15/2007",
        crew: "Finnish",
        success: true
    },
    {
        name: "Latlux",
        launch_date: "12/5/1983",
        crew: "Azeri",
        success: false
    },
    {
        name: "Konklab",
        launch_date: "8/12/1980",
        crew: "Zulu",
        success: true
    },
    {
        name: "Mat Lam Tam",
        launch_date: "1/14/2018",
        crew: "Polish",
        success: true
    },
    {
        name: "Temp",
        launch_date: "2/7/1974",
        crew: "Bislama",
        success: false
    },
    {
        name: "Stim",
        launch_date: "2/9/2014",
        crew: "Bislama",
        success: false
    },
    {
        name: "Matsoft",
        launch_date: "2/13/1974",
        crew: "Aymara",
        success: true
    },
    {
        name: "Opela",
        launch_date: "2/16/2015",
        crew: "Malayalam",
        success: false
    },
    {
        name: "Mat Lam Tam",
        launch_date: "10/22/2020",
        crew: "Romanian",
        success: true
    },
    {
        name: "Ventosanzap",
        launch_date: "12/16/1980",
        crew: "Kurdish",
        success: true
    },
    {
        name: "Daltfresh",
        launch_date: "7/28/1990",
        crew: "Chinese",
        success: false
    },
    {
        name: "Lotstring",
        launch_date: "7/19/2015",
        crew: "Ndebele",
        success: true
    },
    {
        name: "Veribet",
        launch_date: "7/18/1990",
        crew: "Estonian",
        success: false
    },
    {
        name: "Tempsoft",
        launch_date: "8/4/1968",
        crew: "Dari",
        success: true
    },
    {
        name: "Lotlux",
        launch_date: "6/14/1986",
        crew: "Moldovan",
        success: true
    },
    {
        name: "Stronghold",
        launch_date: "3/14/1964",
        crew: "Arabic",
        success: true
    },
    {
        name: "Toughjoyfax",
        launch_date: "6/16/2009",
        crew: "Telugu",
        success: true
    },
    {
        name: "Tin",
        launch_date: "5/6/2011",
        crew: "Greek",
        success: true
    },
    {
        name: "Aerified",
        launch_date: "10/24/1987",
        crew: "Dutch",
        success: true
    },
    {
        name: "Pannier",
        launch_date: "7/24/1991",
        crew: "Catalan",
        success: false
    },
    {
        name: "Greenlam",
        launch_date: "12/21/1965",
        crew: "Malayalam",
        success: true
    },
    {
        name: "Konklab",
        launch_date: "1/16/1978",
        crew: "Belarusian",
        success: false
    },
    {
        name: "Flexidy",
        launch_date: "5/5/1978",
        crew: "Tajik",
        success: false
    },
    {
        name: "Sub-Ex",
        launch_date: "11/2/1987",
        crew: "English",
        success: true
    },
    {
        name: "Tin",
        launch_date: "11/7/1985",
        crew: "Hebrew",
        success: true
    },
    {
        name: "Hatity",
        launch_date: "6/28/1984",
        crew: "Tsonga",
        success: true
    },
    {
        name: "Otcom",
        launch_date: "7/2/1983",
        crew: "Arabic",
        success: true
    },
    {
        name: "Stronghold",
        launch_date: "12/28/1998",
        crew: "Japanese",
        success: true
    },
    {
        name: "Veribet",
        launch_date: "4/28/1970",
        crew: "Portuguese",
        success: true
    },
    {
        name: "Trippledex",
        launch_date: "4/15/1975",
        crew: "Dutch",
        success: true
    },
    {
        name: "Otcom",
        launch_date: "1/6/1965",
        crew: "Mongolian",
        success: false
    },
    {
        name: "Lotstring",
        launch_date: "4/5/1964",
        crew: "Finnish",
        success: true
    },
    {
        name: "Sonair",
        launch_date: "8/19/1975",
        crew: "Haitian Creole",
        success: true
    },
    {
        name: "It",
        launch_date: "5/14/1976",
        crew: "Swahili",
        success: true
    },
    {
        name: "Toughjoyfax",
        launch_date: "5/2/1985",
        crew: "Quechua",
        success: false
    },
    {
        name: "Cardguard",
        launch_date: "6/11/1975",
        crew: "Macedonian",
        success: true
    },
    {
        name: "Bigtax",
        launch_date: "8/26/1993",
        crew: "Kurdish",
        success: true
    },
    {
        name: "Span",
        launch_date: "2/26/2001",
        crew: "Dhivehi",
        success: false
    },
    {
        name: "It",
        launch_date: "9/17/1975",
        crew: "Bengali",
        success: true
    },
    {
        name: "Transcof",
        launch_date: "4/19/2001",
        crew: "Dari",
        success: true
    },
    {
        name: "Zoolab",
        launch_date: "6/27/2019",
        crew: "Albanian",
        success: false
    },
    {
        name: "Bitwolf",
        launch_date: "5/31/1986",
        crew: "Tok Pisin",
        success: false
    },
    {
        name: "Bamity",
        launch_date: "3/19/1973",
        crew: "French",
        success: false
    },
    {
        name: "Vagram",
        launch_date: "9/22/1961",
        crew: "Amharic",
        success: true
    },
    {
        name: "Solarbreeze",
        launch_date: "5/27/2015",
        crew: "Kashmiri",
        success: false
    },
    {
        name: "Konklab",
        launch_date: "12/19/2005",
        crew: "Polish",
        success: false
    },
    {
        name: "Zontrax",
        launch_date: "1/3/1973",
        crew: "Catalan",
        success: false
    },
    {
        name: "Asoka",
        launch_date: "7/18/1992",
        crew: "Northern Sotho",
        success: false
    },
    {
        name: "Job",
        launch_date: "4/25/1999",
        crew: "Swati",
        success: false
    },
    {
        name: "Fixflex",
        launch_date: "2/27/1972",
        crew: "French",
        success: false
    },
    {
        name: "Fixflex",
        launch_date: "5/25/1977",
        crew: "Hebrew",
        success: true
    },
    {
        name: "Konklab",
        launch_date: "4/16/1971",
        crew: "Bengali",
        success: false
    },
    {
        name: "Zamit",
        launch_date: "8/30/2015",
        crew: "Lithuanian",
        success: true
    },
    {
        name: "Sonsing",
        launch_date: "12/24/2014",
        crew: "Tswana",
        success: true
    },
    {
        name: "Tres-Zap",
        launch_date: "6/13/2005",
        crew: "Hungarian",
        success: true
    },
    {
        name: "Regrant",
        launch_date: "2/8/1998",
        crew: "Hiri Motu",
        success: false
    },
    {
        name: "Cardify",
        launch_date: "1/9/1984",
        crew: "Kazakh",
        success: true
    },
    {
        name: "Rank",
        launch_date: "8/31/1985",
        crew: "Tetum",
        success: true
    },
    {
        name: "Job",
        launch_date: "3/17/1980",
        crew: "Icelandic",
        success: true
    },
    {
        name: "Fixflex",
        launch_date: "12/16/2006",
        crew: "Mongolian",
        success: false
    },
    {
        name: "Daltfresh",
        launch_date: "5/4/1995",
        crew: "Moldovan",
        success: false
    },
    {
        name: "Domainer",
        launch_date: "10/17/1987",
        crew: "Bulgarian",
        success: false
    },
    {
        name: "Andalax",
        launch_date: "7/29/1972",
        crew: "Croatian",
        success: false
    },
    {
        name: "Sub-Ex",
        launch_date: "1/31/1990",
        crew: "Polish",
        success: false
    },
    {
        name: "Voltsillam",
        launch_date: "7/16/1976",
        crew: "Punjabi",
        success: true
    },
    {
        name: "Biodex",
        launch_date: "9/10/2009",
        crew: "Amharic",
        success: false
    },
    {
        name: "Bitchip",
        launch_date: "11/24/2006",
        crew: "Korean",
        success: false
    },
    {
        name: "Andalax",
        launch_date: "10/1/2008",
        crew: "Guaraní",
        success: false
    },
    {
        name: "Fixflex",
        launch_date: "4/8/2016",
        crew: "Khmer",
        success: true
    },
    {
        name: "Aerified",
        launch_date: "8/27/1973",
        crew: "Papiamento",
        success: true
    },
    {
        name: "Konklab",
        launch_date: "7/13/2000",
        crew: "Korean",
        success: false
    },
    {
        name: "Flexidy",
        launch_date: "5/1/2008",
        crew: "Afrikaans",
        success: false
    },
    {
        name: "Quo Lux",
        launch_date: "8/11/1971",
        crew: "Mongolian",
        success: false
    },
    {
        name: "Kanlam",
        launch_date: "12/17/2015",
        crew: "Maltese",
        success: false
    },
    {
        name: "Bamity",
        launch_date: "6/30/2016",
        crew: "Māori",
        success: false
    },
    {
        name: "Trippledex",
        launch_date: "10/30/1975",
        crew: "Icelandic",
        success: false
    },
    {
        name: "Konklux",
        launch_date: "2/26/2017",
        crew: "Chinese",
        success: true
    },
    {
        name: "Pannier",
        launch_date: "12/11/1977",
        crew: "Kazakh",
        success: false
    },
    {
        name: "Stim",
        launch_date: "7/6/1961",
        crew: "French",
        success: true
    },
    {
        name: "Stronghold",
        launch_date: "7/15/2018",
        crew: "Estonian",
        success: false
    },
    {
        name: "Keylex",
        launch_date: "1/28/2002",
        crew: "Swedish",
        success: true
    },
    {
        name: "Transcof",
        launch_date: "10/4/1995",
        crew: "Filipino",
        success: true
    }
]

module.exports = {
    shuttles
};