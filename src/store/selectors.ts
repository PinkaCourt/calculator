import { createSelector } from "reselect";

import { IniteState } from "store/reducer";
import * as T from "store/types";

const oneMonth = 1;
const fourMonths = 4;
const startMonthlyPeriod = new Date().setMonth(
  new Date().getMonth() - oneMonth
);
const start4MonthlyPeriod = new Date().setMonth(
  new Date().getMonth() - fourMonths
);
const endPeriod = Date.now();

const averageDSbyMonth = (ar: T.Data[]) => {
  let newData = [];
  let accumulatorData = 0;
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    if (i === 0) {
      accumulatorData = parseFloat(ar[i].ds);
      count = 1;
    } else {
      const thisDate = ar[i].date;
      const prevDate = ar[i - 1].date;

      const thisDay = new Date(thisDate).getDate();
      const prevDay = new Date(prevDate).getDate();

      const thisMonth = new Date(thisDate).getMonth();
      const prevMonth = new Date(prevDate).getMonth();

      if (thisDay === prevDay && thisMonth === prevMonth) {
        accumulatorData = accumulatorData + parseFloat(ar[i].ds);
        count = count + 1;
      } else {
        newData.push({
          ds: accumulatorData / count,
          month: prevMonth,
          day: prevDay,
        });
        accumulatorData = 0;
        count = 0;
      }
    }
  }

  return newData;
};

export const selectToken = (state: IniteState) => state.accessToken;
export const selectAuth = (state: IniteState) => state.auth;
export const selectLogin = (state: IniteState) => state.login;
export const selectUser = (state: IniteState) => state.user;
export const selectData = (state: IniteState) => state.data;

const selectSortedData = createSelector(selectData, (data) =>
  data.slice().sort((a, b) => a.date - b.date)
);

export const monthlyData = createSelector(selectSortedData, (sortedData) =>
  sortedData.filter(
    (mnt) => mnt.date > startMonthlyPeriod && mnt.date < endPeriod
  )
);

export const FourMonthsData = createSelector(selectSortedData, (sortedData) =>
  sortedData.filter(
    (mnt) => mnt.date > start4MonthlyPeriod && mnt.date < endPeriod
  )
);

export const lastDatas = createSelector(
  monthlyData,
  (data) => data[data.length - 1]
);

export const selectAverageDatas = createSelector(FourMonthsData, (data) =>
  averageDSbyMonth(data)
);
