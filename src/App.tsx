import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Anchor from './Anchor';
import EffectTest from './EffectTest';

function Tabs() {
    const [tab, setTab] = React.useState(0);
    return (
        <div>
            <button onClick={() => setTab(tab === 0 ? 1 : 0)}>Switch Tab</button>
            {tab === 0 && <div><Anchor /></div>}
            {tab === 1 && <EffectTest />}
        </div>
    );
}

//new way
//useEffect in 'EffectTest' will be run twice if it is inside 'StrictMode'
// const root = createRoot(document.getElementById('root')!);
// root.render(<StrictMode>
//     <EffectTest input='hello'/>  
// </StrictMode>);
// root.render(<EffectTest />);


//old way
//useEffect in 'EffectTest' will be run only once
ReactDOM.render(<StrictMode>
    <Tabs />
</StrictMode>, document.getElementById('root'));


export { };