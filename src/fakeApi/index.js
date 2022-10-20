import teamBadge from "../assets/panthers-badge.webp";
import PlaceholderBadge from "../assets/soccer.png";

export const users = [
  {
    id: 9987875566654,
    name: "Joe Bloggs",
    userName: "joe123",
    signUpDate: 12345678910,
    child: "1",
    isLoggedIn: false,
    teams: [588588858959],
  },
];

export const teams = [
  {
    id: "588588858959",
    name: "Ripon City Panthers",
    manager: users[0].name,
    ageGroup: "U13",
    teamBadge: teamBadge,
    venue: {
      address: {
        lineOne: "Hell Wath Lane",
        lineTwo: "",
        lineThree: "Ripon",
        postCode: "HG4 2SE",
      },
    },
  },
];

export const players = [
  {
    id: "1",
    name: "Liam Cooper",
    age: "12",
    team: 588588858959,
  },
  {
    id: "2",
    name: "Jack Harrison",
    age: "13",
    team: 588588858959,
  },
  {
    id: "3",
    name: "Tyler Adams",
    age: "13",
    team: 588588858959,
  },
  {
    id: "4",
    name: "Luke Ayling",
    age: "12",
    team: 588588858959,
  },
  {
    id: "5",
    name: "Joe Gelhart",
    age: "12",
    team: 588588858959,
  },
];

export const fixtures = [
  {
    id: "mUHZu4ipurRkS6smrbIenakK1woH74EoI6OPSrmuPCfYWSRXpAU1665412054682",
    // homeTeam: teams[0].name,
    // venue: teams[0].venue.address.lineOne,
    date: 1235678910,
    meetTime: 12345678910,
    kickOffTime: 12345678910,
    squad: players,
    awayTeam: "KillingHall Nomads",
    awayTeamBadge: PlaceholderBadge,
    teamBadge: teams[0].teamBadge,
  },

  // {
  //   id: 454635353545,
  //   homeTeam: teams[0].name,
  //   venue: teams[0].venue.address.lineOne,
  //   date: 1235678910,
  //   meetTime: 12345678910,
  //   kickOffTime: 12345678910,
  //   squad: players,
  //   awayTeam: "KillingHall Nomads",
  //   awayTeamBadge: PlaceholderBadge,
  //   teamBadge: teams[0].teamBadge,
  // },

  {
    id: 15463983893388,
    homeTeam: "Clifford Juniors",
    venue: teams[0].venue.address.lineOne,
    date: 1663569981,
    meetTime: 1663568857,
    kickOffTime: 1663568857,
    squad: players,
    awayTeam: teams[0].name,
    awayTeamBadge: teams[0].teamBadge,
    teamBadge: PlaceholderBadge,
  },
  {
    id: 454699953545,
    homeTeam: teams[0].name,
    venue: teams[0].venue.address.lineOne,
    date: 1663570057,
    meetTime: 12345678910,
    kickOffTime: 12345678910,
    squad: players,
    awayTeam: "Harrogate Railway",
    awayTeamBadge: PlaceholderBadge,
    teamBadge: teams[0].teamBadge,
  },
  {
    id: 454629353545,
    team: teams[0],
    homeTeam: "Pannal Sports",
    venue: teams[0].venue.address.lineOne,
    date: 1663570057,
    meetTime: 12345678910,
    kickOffTime: 12345678910,
    squad: players,
    awayTeam: teams[0].name,
    awayTeamBadge: teams[0].teamBadge,
    teamBadge: PlaceholderBadge,
  },
];
