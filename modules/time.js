const updateTime = () => {
  const today = new Date();
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const date = today.toLocaleString('en-US', options);
  const time = today.toLocaleTimeString();
  document.getElementById('date-time').innerHTML = `${date} , ${time}`;
};

setInterval(updateTime, 1000);

export default updateTime;