export const useUtils = () => {
  const sayHello = () => {
    console.log('Hello from the main page! by useUtils');
  };

  return {
    sayHello,
  };
};
