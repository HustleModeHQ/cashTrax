import Image from 'next/image'
import React from 'react'
import LoginBox from '../pages/login'
import BottomNavBar from './components/BottomNavBar'
import Router from 'next/router'
import Contact from '../pages/contact'

export default function Home() {
  return (
    <main style={{height: '100vh'}}>
      <div className='center'>
        <LoginBox/>
      </div>
      <div style={{height: '10%'}}>
        <BottomNavBar/>
      </div>
    </main>
  )
}

// initializeApp(config.firebaseConfig);

// export interface IApplicationProps {}

// const Application: React.FunctionComponent<IApplicationProps> = (props) => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route
//                     path="/"
//                     element={
//                         <AuthRoute>
//                             <HomePage />
//                         </AuthRoute>
//                     }
//                 />
//                 <Route path="/login" element={<LoginPage />} />
//             </Routes>
//         </BrowserRouter>
//     );
// };

// export default Application;