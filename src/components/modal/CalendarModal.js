import React, { useState } from 'react';
import styled from 'styled-components';
import { GoCheck } from 'react-icons/go';
import { InputStyle, centeredFlex, values } from '../../lib/style';
import Modal from '../common/Modal';
import Button from '../common/Button';
import range from '../../lib/range';
import palette from '../../lib/palette';
import getLastDay from '../../lib/getLastDay';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  width: 225px;
  display: flex;
  flex-direction: column;

  .select {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .calendar {
    border: 1px solid ${palette.gray[0]};
    border-radius: ${values.common.borderRadius};
    box-sizing: border-box;
    height: 8rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    div {
      ${centeredFlex}
      cursor:pointer;
      margin: auto;
      width: calc(100% / 7.2);
      height: calc(100% / 5.2);

      &.active {
        background: ${palette.gray[1]};
        border-radius: ${values.common.borderRadius};
      }

      &.hidden {
        visibility: hidden;
      }
    }

    &:hover {
      box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.2);
    }
  }

  & > * {
    margin-top: 1rem;
  }
`;

const StyledSelect = styled.select`
  ${InputStyle}
  width: 47.5%;
`;

const CalendarModal = ({ match, submitModal, closer, dDay }) => {
  const { year, month, day } = match.params;
  const today = new Date();
  const [thisYear, thisMonth, thisDay] = [
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  ];
  const date =
    dDay ||
    new Date(
      year || thisYear,
      month ? month - 1 : thisMonth,
      day || thisDay,
      12,
      0,
    );
  const [defaultYear, defaultMonth, defaultDay, defaultHour, defaultMinute] = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
  ];

  const [nextDDay, setNextDDay] = useState({
    year: defaultYear,
    month: defaultMonth,
    day: defaultDay,
    hour: defaultHour,
    minute: defaultMinute,
  });

  const selectChange = e => {
    const { name, value } = e.target;
    setNextDDay(dDay => ({ ...dDay, [name]: value }));
  };
  const dayChange = day => setNextDDay(dDay => ({ ...dDay, day }));
  const submit = () => {
    const { year, month, day, hour, minute } = nextDDay;
    submitModal(new Date(year, month - 1, day, hour, minute));
    closer();
  };

  return (
    <Modal closer={closer} title="날짜">
      <Wrapper>
        <div className="select">
          <StyledSelect
            name="year"
            value={nextDDay.year}
            onChange={selectChange}
          >
            {range(2100 - 1960, 1960).map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </StyledSelect>
          <StyledSelect
            name="month"
            value={nextDDay.month}
            onChange={selectChange}
          >
            {range(12, 1).map(month => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </StyledSelect>
        </div>
        <div className="calendar">
          {range(35, 1).map(day => (
            <div
              key={day}
              className={
                day === nextDDay.day
                  ? 'active'
                  : day <= getLastDay(nextDDay.year, nextDDay.month)
                  ? ''
                  : 'hidden'
              }
              onClick={() => dayChange(day)}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="select">
          <StyledSelect
            name="hour"
            value={nextDDay.hour}
            onChange={selectChange}
          >
            {range(24).map(hour => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </StyledSelect>
          <StyledSelect
            name="minute"
            value={nextDDay.minute}
            onChange={selectChange}
          >
            {range(60).map(minute => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </StyledSelect>
        </div>
        <Button width="100%" height="3rem" onClick={submit}>
          <GoCheck size="1.5rem" />
        </Button>
      </Wrapper>
    </Modal>
  );
};

export default withRouter(CalendarModal);
