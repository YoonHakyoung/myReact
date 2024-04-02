import React from 'react';


const Map = () => {
    return (
        <iframe src="http://211.183.3.100:30002/app/dashboards#/create?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,syncColors:!f,useMargins:!t),panels:!((embeddableConfig:(hiddenLayers:!(),isLayerTOCOpen:!f,mapBuffer:(maxLat:37.71859,maxLon:127.61719,minLat:37.43997,minLon:126.38672),mapCenter:(lat:37.5623,lon:126.98562,zoom:10.87),openTOCDetails:!()),gridData:(h:27,i:d41ac27e-4c61-4a11-a098-007dfeb9c84e,w:46,x:0,y:0),id:'5c62cd20-f0e5-11ee-96e2-4b7bc1ca63a3',panelIndex:d41ac27e-4c61-4a11-a098-007dfeb9c84e,type:map,version:'7.17.18')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:'',viewMode:edit)&hide-filter-bar=true" height="600" width="800"></iframe>
    );
};

export default Map;