import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateSelector = document.querySelector('#datetime-picker');
const BtnStart = document.querySelector('button');
const counters = document.querySelectorAll('span');
BtnStart.disabled = true;
let timeDifference;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    console.log(`current Time is: ${currentDate.getTime()}`);
    timeDifference = selectedDates[0].getTime() - currentDate.getTime();

    if (timeDifference < 0) {
      // window.alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      BtnStart.disabled = false;
    }
  },
};

flatpickr(dateSelector, options);

BtnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    console.log(timeDifference);
    if (timeDifference > 999) {
      timeDifference = timeDifference - 1000;
    }
    counters[6].textContent = addLeadingZero(convertMs(timeDifference).seconds);
    counters[4].textContent = addLeadingZero(convertMs(timeDifference).minutes);
    counters[2].textContent = addLeadingZero(convertMs(timeDifference).hours);
    counters[0].textContent = addLeadingZero(convertMs(timeDifference).days);
  }, 1000);
  BtnStart.disabled = true;
});

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
