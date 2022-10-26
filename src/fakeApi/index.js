import teamBadge from "../assets/panthers-badge.webp";

export const users = [
  {
    id: "HyqzLdgYUU9bH60pIktYPmuv70CVbl3s9ipmK4zObmlz44N6zJW1665412010548",
    name: "David Manager",
    email: "manager@manager.com",
    phone: "07976387640",
    password: "password",
    userType: "manager",
    teams: [
      "mUHZu4ipurRkS6smrbIenakK1woH74EoI6OPSrmuPCfYWSRXpAU1665412054682",
      "O8Rd6yuJJWfToiGXX05xcNBkta3T3jPBgTDJCFVgGMftzkjkoP91665673268206",
    ],
  },

  {
    id: "dvQAK2dyD91gWfRdb4YBqD6loKqVV5LIHhbmDbugFvxkvE0oO1g1665412095765",
    name: "Pat Parent",
    email: "parent@parent.com",
    phone: "07967251798",
    password: "password",
    userType: "parent",
    children: [
      {
        id: "h4MYbS7UkPpxusVZ7pD4TMowNX3rcraO4MrXZqBW63ooQDI7ICX1665731649055",
        name: "Bob Roberts",
        age: "12",
        team: "mUHZu4ipurRkS6smrbIenakK1woH74EoI6OPSrmuPCfYWSRXpAU1665412054682",
        ageGroup: "U13",
        approved: true,
      },
      {
        id: "Q825ePFaZ2d8mXpxrmihz0xLXNF5yOMN7Awg9sfB3RQX04kWzyy1665731649055",
        name: "William Jones",
        age: "8",
        team: "O8Rd6yuJJWfToiGXX05xcNBkta3T3jPBgTDJCFVgGMftzkjkoP91665673268206",
        ageGroup: "U8",
        approved: true,
      },
    ],
  },
  {
    id: "uUaxLIvINlvrNrlo4uDP8DTBOOdync2UTbeUKnmJga9TKYf3Hkt1666431879259",
    name: "Garon Ross",
    email: "g@g.com",
    phone: "07976387640",
    password: "password",
    userType: "manager",
    teams: ["EJvrxHHJE9P2atx17WtdX64HUkdg3FnDK1HDqpi650YoKUK6pM41665587954141"],
  },

  {
    id: "7CO2xtUj8wcMnCgk21WQ3UCIhytE3Mfk8XrfjZEKvJsw9ZLqLSV1666590662808",
    name: "Marcelo Biesla",
    email: "m@m.com",
    phone: "07736198573",
    password: "password",
    userType: "manager",
    teams: ["ugHky4Re9t4LhLkr65bIlw2EsnMXyjP6PuWK1HeIXzUHseqO2tI1666592177758"],
  },
  {
    id: "3tiZYTjLky1XnwKKDfBsuyC1R2885xuSD4pjlHxX7l1eKBf66WM1666592523495",
    name: "Steve Beck",
    email: "ste@ste.com",
    phone: "07453217324",
    password: "password",
    userType: "manager",
    teams: ["6DfwsuyyG5p0IMtiTp5JKNwnhePMUdq3BRuO8JemyAURzWCeaar1666592940783"],
  },
  {
    id: "DCHiksObgoiWYwj6lOKi7OOoBIc4nallIkPFLSJwX3Kkd1ZbUDs1666593594089",
    name: "Amy Johnson",
    email: "a@a.com",
    phone: "074652148843",
    password: "password",
    userType: "parent",
    chlidren: [
      {
        name: "Jimmy Johnson",
        age: "13",
        team: "6DfwsuyyG5p0IMtiTp5JKNwnhePMUdq3BRuO8JemyAURzWCeaar1666592940783",
        ageGroup: "U13",
        approved: false,
        id: "bTzUEq5cP049GFkP1c9aeyIvi41x2qIk4lCmeaS6rKVUzLc9sz21666593651038",
      },
    ],
  },
];

export const teams = [
  {
    id: "mUHZu4ipurRkS6smrbIenakK1woH74EoI6OPSrmuPCfYWSRXpAU1665412054682",
    name: "Ripon City Panthers",
    ageGroup: "U13",
    manager: "HyqzLdgYUU9bH60pIktYPmuv70CVbl3s9ipmK4zObmlz44N6zJW1665412010548",
    teamBadge: teamBadge,
    venue: {
      address: {
        line1: "Hell Wath Lane",
        city: "Ripon",
        postCode: "HG4 2SE",
      },
    },
  },
  {
    id: "ugHky4Re9t4LhLkr65bIlw2EsnMXyjP6PuWK1HeIXzUHseqO2tI1666592177758",
    name: "Clifford",
    ageGroup: "U13",
    manager: "7CO2xtUj8wcMnCgk21WQ3UCIhytE3Mfk8XrfjZEKvJsw9ZLqLSV1666590662808",
    venue: {
      address: {
        line1: "Boston Road",
        city: "Wetherby",
        postCode: "LS22 2SE",
      },
    },
  },

  {
    id: "O8Rd6yuJJWfToiGXX05xcNBkta3T3jPBgTDJCFVgGMftzkjkoP91665673268206",
    name: "Hampsthwaite United",
    ageGroup: "U8",
    manager: "HyqzLdgYUU9bH60pIktYPmuv70CVbl3s9ipmK4zObmlz44N6zJW1665412010548",
    venue: {
      address: {
        line1: "Green Lane",
        city: "Harrogate",
        postCode: "HG2 3TY",
      },
    },
  },
  {
    id: "EJvrxHHJE9P2atx17WtdX64HUkdg3FnDK1HDqpi650YoKUK6pM41665587954141",
    name: "Bishop Monkton",
    ageGroup: "U8",
    manager: "uUaxLIvINlvrNrlo4uDP8DTBOOdync2UTbeUKnmJga9TKYf3Hkt1666431879259",
    venue: {
      address: {
        line1: "Knaresborough Road",
        line2: "Bishop Monkton",
        city: "Harrogate",
        postCode: "HG3 2RS",
      },
    },
  },
  {
    id: "6DfwsuyyG5p0IMtiTp5JKNwnhePMUdq3BRuO8JemyAURzWCeaar1666592940783",
    name: "Beckwithshaw",
    ageGroup: "U13",
    manager: "3tiZYTjLky1XnwKKDfBsuyC1R2885xuSD4pjlHxX7l1eKBf66WM1666592523495",
    venue: {
      address: {
        line1: "Pannal Ash Road",
        line2: "",
        city: "Harrogate",
        postCode: "HG2 2ES",
      },
    },
  },
];

export const fixtures = [
  {
    id: "cKazxAla1nhsp3aA1Hg286TCDMm5q5PUU0igjQkZoAK64JXYkcY1666594659518",
    date: 1666516801,
    meetTime: "11:30",
    kickOff: "12:00",
    homeTeam:
      "mUHZu4ipurRkS6smrbIenakK1woH74EoI6OPSrmuPCfYWSRXpAU1665412054682",
    awayTeam:
      "6DfwsuyyG5p0IMtiTp5JKNwnhePMUdq3BRuO8JemyAURzWCeaar1666592940783",
  },

  {
    id: "CimK4ERvz3GzcYSkEcnefN83g1ytmZX9HeaWrG9H4cCUQTCZ8J51666595024168",
    date: 1670112000,
    meetTime: "12:00",
    kickOff: "13:00",
    homeTeam:
      "ugHky4Re9t4LhLkr65bIlw2EsnMXyjP6PuWK1HeIXzUHseqO2tI1666592177758",
    awayTeam:
      "mUHZu4ipurRkS6smrbIenakK1woH74EoI6OPSrmuPCfYWSRXpAU1665412054682",
  },
];
