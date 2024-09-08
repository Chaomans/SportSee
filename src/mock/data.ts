import { activity, averageSessions, performance, user } from "../utils/types"

export const data: {
  user: user[],
  performance: performance[],
  averageSessions: averageSessions[],
  activity: activity[]
} = {
  user: [
    {
      id: 18,
      userInfos: {
        firstName: "Cecilia",
        lastName: "Ratorez",
        age: 34
      },
      score: 0.3,
      todayScore: 0.3,
      keyData: {
        calorieCount: 2500,
        proteinCount: 90,
        carbohydrateCount: 150,
        lipidCount: 120
      }
    },
    {
      id: 12,
      userInfos: {
        firstName: "Cecilia",
        lastName: "Ratorez",
        age: 34
      },
      score: 0.3,
      todayScore: 0.3,
      keyData: {
        calorieCount: 2500,
        proteinCount: 90,
        carbohydrateCount: 150,
        lipidCount: 120
      }
    }
  ],
  performance: [
    {
      userId: 18,
      kind: {
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity"
      },
      data: [
        {
          value: 200,
          kind: 1
        },
        {
          value: 240,
          kind: 2
        },
        {
          value: 80,
          kind: 3
        },
        {
          value: 80,
          kind: 4
        },
        {
          value: 220,
          kind: 5
        },
        {
          value: 110,
          kind: 6
        }
      ]
    },
    {
      userId: 12,
      kind: {
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity"
      },
      data: [
        {
          value: 200,
          kind: 1
        },
        {
          value: 240,
          kind: 2
        },
        {
          value: 80,
          kind: 3
        },
        {
          value: 80,
          kind: 4
        },
        {
          value: 220,
          kind: 5
        },
        {
          value: 110,
          kind: 6
        }
      ]
    }
  ],
  averageSessions: [
    {
      userId: 18,
      sessions: [
        {
          day: 1,
          sessionLength: 30
        },
        {
          day: 2,
          sessionLength: 40
        },
        {
          day: 3,
          sessionLength: 50
        },
        {
          day: 4,
          sessionLength: 30
        },
        {
          day: 5,
          sessionLength: 30
        },
        {
          day: 6,
          sessionLength: 50
        },
        {
          day: 7,
          sessionLength: 50
        }
      ]
    },
    {
      userId: 12,
      sessions: [
        {
          day: 1,
          sessionLength: 30
        },
        {
          day: 2,
          sessionLength: 40
        },
        {
          day: 3,
          sessionLength: 50
        },
        {
          day: 4,
          sessionLength: 30
        },
        {
          day: 5,
          sessionLength: 30
        },
        {
          day: 6,
          sessionLength: 50
        },
        {
          day: 7,
          sessionLength: 50
        }
      ]
    }
  ],
  activity: [
    {
      userId: 18,
      sessions: [
        {
          day: "2020-07-01",
          kilogram: 70,
          calories: 240
        },
        {
          day: "2020-07-02",
          kilogram: 69,
          calories: 220
        },
        {
          day: "2020-07-03",
          kilogram: 70,
          calories: 280
        },
        {
          day: "2020-07-04",
          kilogram: 70,
          calories: 500
        },
        {
          day: "2020-07-05",
          kilogram: 69,
          calories: 160
        },
        {
          day: "2020-07-06",
          kilogram: 69,
          calories: 162
        },
        {
          day: "2020-07-07",
          kilogram: 69,
          calories: 390
        }
      ]
    },
    {
      userId: 12,
      sessions: [
        {
          day: "2020-07-01",
          kilogram: 70,
          calories: 240
        },
        {
          day: "2020-07-02",
          kilogram: 69,
          calories: 220
        },
        {
          day: "2020-07-03",
          kilogram: 70,
          calories: 280
        },
        {
          day: "2020-07-04",
          kilogram: 70,
          calories: 500
        },
        {
          day: "2020-07-05",
          kilogram: 69,
          calories: 160
        },
        {
          day: "2020-07-06",
          kilogram: 69,
          calories: 162
        },
        {
          day: "2020-07-07",
          kilogram: 69,
          calories: 390
        }
      ]
    }
  ]
}

const parseURL = (url: string) => {
  const regex = /http:\/\/\w+:3000\/user\/(?<request>.+)/
  if (!regex.test(url)) throw Error("Bad request");
  const match = regex.exec(url);
  const groups = match?.groups ?? { request: "" };
  const parts = groups.request.split("/").filter(part => part.length !== 0);
  if (parts.length === 1) return { id: parts[0], endpoint: "user" };
  return { id: parts[0], endpoint: parts[1] }
}

const getData = (url: string) => {
  const { id, endpoint } = parseURL(url)
  switch (endpoint) {
    case "user":
      return data.user.find(user => user.id === parseInt(id));
    case "activity":
      return data.activity.find(act => act.userId === parseInt(id));
    case "average-sessions":
      return data.averageSessions.find(avg => avg.userId === parseInt(id));
    case "performance":
      return data.performance.find(perf => perf.userId === parseInt(id));
    default:
      throw Error("Bad request");
  }
}

export default getData;