
import {Rotas} from "./routes/routes";
import React from 'react' 
import ThemeProvider from './theme/themeprovider'
import { AppProvider } from "./context/indexHook"


export default function App() {
   return (
    <React.StrictMode>
    <ThemeProvider>
      <AppProvider>
         
       <Rotas/>
      
       </AppProvider>
       </ThemeProvider>
       </React.StrictMode>
   );
}