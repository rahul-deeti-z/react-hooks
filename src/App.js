import './App.css';
import IntervalCounter from './components/useeffect/IntervalCounter';
import MouseContainer from './components/useeffect/MouseContainer';
import UseEffectOne from './components/useeffect/UseEffectOne';
import UseEffectTwo from './components/useeffect/UseEffectTwo';

// this is for useState
// import HookCounter from './components/usestate/HookCounter';
// import HookCounterFour from './components/usestate/HookCounterFour';
// import HookCounterThree from './components/usestate/HookCounterThree';
// import HookCounterTwo from './components/usestate/HookCounterTwo';

function App() {
  return (
      <div>
        <UseEffectOne/>
        {/* <UseEffectTwo/> */}
        {/* <MouseContainer/> */}
        {/* <IntervalCounter/> */}
      </div>
  );
}

export default App;
