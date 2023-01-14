import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserLoggedIn } from './features/userSlice/userSlice';
import { authentication } from './firebase/firebase.config';
import AppRouter from './routes/AppRouter';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(authentication, (user) => {
      if (user) {
        console.log(user);
        dispatch(
          setUserLoggedIn({
            userName: user.displayName,
            userEmail: user.email,
            isLoggedIn: true,
          })
        );
        const userInfo = {
          name: user.displayName,
          email: user.email,
        };

        localStorage.setItem('token', JSON.stringify(user.uid));
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
      }
      return () => {
        unsub();
      };
    });
  }, []);
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
