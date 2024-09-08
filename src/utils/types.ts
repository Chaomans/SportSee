export type user = {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  score: number;
  todayScore: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
};

export type userMock = {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  score?: number;
  todayScore?: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
};

type kindList = {
  1: "cardio";
  2: "energy";
  3: "endurance";
  4: "strength";
  5: "speed";
  6: "intensity";
};

type kindValue = {
  value: number;
  kind: number;
};

export type performance = {
  userId: number;
  kind: kindList;
  data: kindValue[];
};

type session = {
  day: string;
  kilogram: number;
  calories: number;
};

export type activity = {
  userId: number;
  sessions: session[];
};

export type averageSession = {
  day: number;
  sessionLength: number;
};

export type averageSessions = {
  userId: number;
  sessions: averageSession[];
};

export type DataContextType<T> = {
  data: T | null;
  isPending: boolean;
  error: string | null;
};

export type outletContextType = {
  userId: number | null;
  setUserId: React.Dispatch<number>;
};
