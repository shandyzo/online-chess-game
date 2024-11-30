import { alphaBet, tileSize } from "./constant";
import * as THREE from "three";


export const rad2Ang = (rad) => rad * 180 / Math.PI;

export const ang2Rad = (ang) => ang * Math.PI / 180;

export const getRandomVal = (range) => Math.ceil(Math.random() * 100000000) % range;

export const getMatrixIndexFromFen = (val) => ({
    rowIndex: val[1] - 1,
    colIndex: alphaBet.indexOf(val[0])
});

export const getFenFromMatrixIndex = (rowIndex, colIndex) => alphaBet[ colIndex ] + ( rowIndex + 1 );

export const isSamePoint = (point1, point2) => point1.x === point2.x && point1.y === point2.y && point1.z === point2.z;

export const getMeshPosition = (rowIndex, colIndex) => ({
    x: colIndex * tileSize - tileSize * 3.5,
    y: 0.6,
    z: -(rowIndex * tileSize - tileSize * 3.5)
})

export const createSpotlight = (props) => {
    const light = new THREE.SpotLight(props.color, props.intensity);
    light.position.set(-props.position.x, props.position.y, props.position.z);
    light.castShadow = props.castShadow;
    light.shadow.bias = props.shadow.bias;
    light.shadow.mapSize.set(props.shadow.mapSize.width, props.shadow.mapSize.height);
    return light;
}

export const setOutline = (props) => {
    const outline = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera, []);
    outline.renderToScreen = true;
    outline.edgeStrength = props.outlineParams.edgeStrength;
    outline.edgeGlow = props.outlineParams.edgeGlow;
    outline.visibleEdgeColor.set(props.visibleEdgeColor);
    outline.hiddenEdgeColor.set(props.hiddenEdgeColor);
    return outline
}
