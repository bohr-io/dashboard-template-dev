import { User } from '../types';

const data = (() => {
  let a: User[] = []
  for (let i = 0;i<97;i++) {
    a.push({
      id: i.toString(),
      name: `John Doe - ${i}`,
      status: 'allowed',
    })
  }
  return a
})()

export default data;
