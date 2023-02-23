import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dateSelector = document.querySelector('#datetime-picker');
console.log(dateSelector);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(dateSelector, options);
