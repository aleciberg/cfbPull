const cfb = require('cfb-data');

const inputs = {
  year: 2021,
};

let groups = {
    FBS: 80,
    ACC: 1,
    AAC: 151,
    B12: 4,
    B1G: 5,
    CUSA: 12,
    Independents: 18,
    MAC: 15,
    MWC: 17,
    P12: 9,
    SEC: 8,
    SunBelt: 37,
  };

getSched = async (conference) => {
  const inputs = {
    groups: conference, // all FBS games
    year: 2021,
    week: 2,
  };

  const result = await cfb.schedule.getSchedule(inputs);
  let games = result.content.schedule['20210911'].games;
  games.forEach((game) => {
    let stadium = JSON.stringify(game['competitions'][0]['venue']['fullName']);
    console.log(game.name + ' at ' + stadium);
  });
};

getConferences = async () => {
  const results = await cfb.scoreboard.getConferences();
  console.log(results);
};

getRankings = async (inputs) => {
  const result = await cfb.rankings.getRankings(inputs);
  let ranks = result['rankings'][0]['ranks'];
  ranks.forEach((rank) => {
    console.log(rank.current + '. ' + rank.team.location);
  });
};

//getSched(5);
//getConferences();
getRankings(inputs);

