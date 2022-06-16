import React, { useCallback, useEffect, useRef, useSyncExternalStore } from "react";

export default function EffectTest(props: {input?: string}) {
    const executedRef = useRef(false);

    useEffect(() => {
        // if (executedRef.current) {
        //     return;
        // }
        doSomething();  //Executed on mount, only once
        requestTest();
        // executedRef.current = true;
    }, []);

    const doSomething = useCallback(() => {
        console.log('do something');
    }, []);
    return (<div>Effect Test</div>);
}


function requestTest() {
    const url = 'https://ws-edge-dev-az-eastasia-meerkat.seismic-dev.com/api/workspace/v2/tenants/scratch03ws/spaces/1/items/40257496-3a55-4c42-8a74-e3ba9bd32cf8/comments';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function () {
        console.log(request.readyState);
        console.log(request);
        if (request.readyState === 4) {
            if (request.status === 200) {
                console.log('success');
            } else {
                console.log('error');
            }
        }
    }
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.send();
}