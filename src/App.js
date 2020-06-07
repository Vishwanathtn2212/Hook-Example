import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';
import ComponentC from './ContextComponents/ComponentC';
import CounterOne from './ReducersComponents/CounterOne';
import CounterMemo from './MemoComponents/CounterMemo';
import FocusInput from './RefComponents/FocusInput';
import ParentComponent from './CallbackComponents/ParentComponent';
import ClassEffectCount from './EffectComponents/ClassEffectCount';
import HookEffectCount from './EffectComponents/HookEffectCount';
import DataFetching from './EffectComponents/DataFetching';
import IntervalHookCounter from './EffectComponents/IntervalHookCounter';
import CustomRef from './CustomRefComponents/CustomRef';
import UserForm from './CustomRefComponents/UserForm'


export const UserContext = React.createContext()
export const channelContext= React.createContext()

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}

      {/* <ClassEffectCount /> */}
      {/* <HookEffectCount /> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}

      {/* <UserContext.Provider value={"Vishwanath"}>
        <channelContext.Provider value={"Code-evolution"}>
          <ComponentC />
        </channelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne /> */}


      {/* <CounterMemo /> */}
      
      {/* <ParentComponent /> */}

      {/* <FocusInput /> */}

      {/* <CustomRef /> */}
      <UserForm />
    </div>
  );
}

export default App;
