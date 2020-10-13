export const validtePhone = (phone: string | number) => {
  const phoneTest = /^1[3456789]\d{9}$/;
  return phoneTest.test(`${phone}`);
};

export const requestSim = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ success: true, state: 200 });
  }, 2000);
});
