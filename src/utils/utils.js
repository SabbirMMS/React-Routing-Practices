export const loadData = () => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        resolve(data);
      }, 300);
    });
  };
export const loadSingleData = (userId) => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        resolve(data);
      }, 300);
    });
  };
  