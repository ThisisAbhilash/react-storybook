import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import { withKnobs, text, select, date } from '@storybook/addon-knobs';
import DayPicker from '../components/date-picker';

const store = new Store({
  value: new Date(),
});

const defaultDate = new Date('2017-11-17T13:00:00Z')

function timestamp(name, defaultValue) {
  const value = date(name, defaultValue || defaultDate)
  const d = new Date(value)
  return d;
}

const actions = {
  onDateSelect: onDateSelect
};

const formats = ['DD-MM-YYYY', 'Do MMM YYYY', 'DD/MMM/YYYY'];

function onDateSelect(value) {
  store.set({ value });
}

storiesOf('DayPicker', module)
  .addDecorator(withKnobs)
  .add('default', () => <State store={store}><DayPicker {...actions} /></State>)
  .add('background-lightgrey', () => <State store={store}><DayPicker backgroundColor={text('background color', 'lightgrey')} {...actions} /></State>)
  .add('different time formats', () => <State store={store}><DayPicker dateFormat={select('format', formats)} {...actions} /></State>)
  .add('with restricted date range', () => <State store={store}><DayPicker minDate={timestamp('minimum date')} maxDate={timestamp('max date')} {...actions} /></State>);