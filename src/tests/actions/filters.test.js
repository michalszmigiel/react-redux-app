import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setEndDate,
  setStartDate
} from "../../actions/filters";
import moment from "moment";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("should set the filter object to sort by date", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("should set the filter object to sort by amount", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("should set the text of the filter object to given string", () => {
  const action = setTextFilter("rent");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "rent"
  });
});

test("should set the text of the filter object to default", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});
