interface ILinks {
  pathname: string,
  title: string;
}


export const links:ILinks[] = [
  {  
    pathname: '/login',
    title: 'Login'
  }, 
  {
    pathname: '/',
    title: 'Home'
  },
  {
    pathname: '/shop',
    title: 'Weathers'
  },
];
