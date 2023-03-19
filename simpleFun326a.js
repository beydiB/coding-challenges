function shorterestTime(n, m, speeds) {
  const walkingTime = Math.abs(n) * speeds[3];
  const elevatorTime1 = Math.abs(n - m) * speeds[0] + speeds[1] + speeds[2] + n * speeds[0] + speeds[1];
  const elevatorTime2 = Math.abs(n - m) * speeds[3] + speeds[1] + speeds[2] + m * speeds[0] + speeds[1];
  return Math.min(walkingTime, elevatorTime1, elevatorTime2);
}
