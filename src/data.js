const data = {
  recommendations: [
    {
      "stockId": "123",
      "stockName":"abc",
      "reason": "some random reason",
      "rank": "1"
  },
  {
      "stockId": "345",
      "stockName":"vbkfd",
      "reason": "some reason randomly given part 2",
      "rank": "2"
  }
  ],
  portfolio:[
    {
      name: "Twitter",
      stockId: "122",
      Qty: "4",
      Invested: "1000",
      Current:"1500",
      PL: "+500",
      DaysPL: "+23",
      AvgPrice: "1200",
      Sector: "Social Media"
    },
    {
      name: "Twitter",
      stockId: "122",
      Qty: "4",
      Invested: "1000",
      Current:"1500",
      PL: "+500",
      DaysPL: "+23",
      AvgPrice: "1200",
      Sector: "Social Media"
    },
    {
      name: "Twitter",
      stockId: "122",
      Qty: "4",
      Invested: "1000",
      Current:"1500",
      PL: "+500",
      DaysPL: "+23",
      AvgPrice: "1200",
      Sector: "Social Media"
    },

    {
      name: "Apple",
      stockId: "32",
      Qty: "8",
      Invested: "4000",
      Current:"6000",
      PL: "+2000",
      DaysPL: "+200",
      AvgPrice: "5500",
      Sector: "Hardware"
    }
  ],
  exchanges: [
    {
      name: "OSEBX",
      index: 841.42,
      change: 1.54,
    },
    {
      name: "Frankfurt DAX",
      index: 841.42,
      change: 1.54,
    },
    {
      name: "Euronext 100",
      index: 841.42,
      change: 1.54,
    },
    {
      name: "Hang Seng",
      index: 841.42,
      change: 1.54,
    },
  ],
  stocks: [
    {
      name: "Veidekke",
      ticker: "VEI",
      bid: 128.5,
      ask: 129.0,
      sector: "Industry",
      change: 1.54,
      dividends: {
        2020: 20,
        2019: 19,
        2018: 18,
        2017: 15,
        2016: 13,
        2015: 10,
        2014: 12,
        2013: 15,
        2012: 10,
        2011: 15,
        2010: 12,
        2009: 3,
        2008: 5,
        2007: 12,
        2006: 15,
        2005: 5,
        2004: 3,
      },
      homepage: "https://google.com",
      investorpage: "https://google.com",
      pe: 15,
      research: [
        {
          title: "First research",
          description:
            "This is the description. It is usually a lot longer than the title and contains information about the research that has been done",
          link: "https://google.com",
          author: { name: "Jake", authorId: "author123" },
          id: 1,
        },
      ],
    },
    {
      name: "Aker",
      ticker: "AKER",
      bid: 128.5,
      ask: 129.0,
      sector: "Industry",
      change: 1.54,
      dividends: {
        2020: 23,
        2019: 5,
        2018: 18,
        2017: 15,
        2016: 13,
        2015: 10,
      },
      homepage: "https://google.com",
      investorpage: "https://google.com",
      pe: 15,
      research: [
        {
          title: "First research",
          description:
            "This is the description. It is usually a lot longer than the title and contains information about the research that has been done",
          link: "https://google.com",
          author: { name: "Jake", authorId: "author123" },
          id: 1,
        },
        {
          title: "Second research",
          description:
            "This is the description. It is usually a lot longer than the title and contains information about the research that has been done",
          link: "https://google.com",
          author: { name: "Jake", authorId: "author123" },
          id: 2,
        },
      ],
    },
    {
      name: "Yara",
      ticker: "YARA",
      bid: 128.5,
      ask: 129.0,
      sector: "Industry",
      change: 1.54,
      dividends: {
        2020: 13,
        2019: 15,
        2018: 18,
        2017: 15,
        2016: 13,
        2015: 10,
      },
      homepage: "https://google.com",
      investorpage: "https://google.com",
      pe: 15,
      research: [
        {
          title: "First research",
          description:
            "This is the description. It is usually a lot longer than the title and contains information about the research that has been done",
          link: "https://google.com",
          author: { name: "Jake", authorId: "author123" },
          id: 1,
        },
      ],
    },
    {
      name: "Leroy",
      ticker: "LSG",
      bid: 128.5,
      ask: 129.0,
      sector: "Industry",
      change: 1.54,
      dividends: {
        2020: 2,
        2019: 3,
        2018: 18,
        2017: 15,
        2016: 13,
        2015: 10,
      },
      homepage: "https://google.com",
      investorpage: "https://google.com",
      pe: 15,
      research: [
        {
          title: "First research",
          description:
            "This is the description. It is usually a lot longer than the title and contains information about the research that has been done",
          link: "https://google.com",
          author: { name: "Jake", authorId: "author123" },
          id: 1,
        },
      ],
    },
    {
      name: "DNO ASA",
      ticker: "DNO",
      bid: 128.5,
      ask: 129.0,
      sector: "Industry",
      change: 1.54,
      dividends: {
        2020: 0.2,
        2019: 3,
        2018: 18,
        2017: 15,
        2016: 13,
        2015: 10,
      },
      homepage: "https://google.com",
      investorpage: "https://google.com",
      pe: 15,
      research: [
        {
          title: "First research",
          description:
            "This is the description. It is usually a lot longer than the title and contains information about the research that has been done",
          link: "https://google.com",
          author: { name: "Jake", authorId: "author123" },
          id: 1,
        },
      ],
    },
  ],
};

export default data;
