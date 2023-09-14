import { Vec4 } from 'cc';
//暂时以这个数据为参考
export const enum MjSize {
    width = 63,
    height = 100,
    length = 1.1,
}

export const enum MjTabel {
    innerSize = 34.7,
    outterSize = 37.2,
}

export enum PlayerRole { 
    ME = 1,
    RIGHT,
    TOP,
    LEFT,
}

export interface StackInfo {
    tByte: number,
    show?: boolean,
    operation?: string,
}

export let CardInfo: Vec4[] = []

for (let i = 1; i < 10; i++)
{
    CardInfo[i] = new Vec4(1, 1, i/9, -0.25) //万 1.2.3....
}

for (let i = 11; i < 20; i++)
{
    CardInfo[i] = new Vec4(1, 1, (i - 10)/9, 0) // 饼 1.2.3....
}

for (let i = 21; i < 30; i++)
{
    CardInfo[i] = new Vec4(1, 1, (i - 20)/9, 0.25) //条 1.2.3....
}

for (let i = 31; i < 35; i++)
{
    CardInfo[i] = new Vec4(1, 1, (i - 30)/9, 0.5) //东南西北
}

for (let i = 41; i < 44; i++)
{
    CardInfo[i] = new Vec4(1, 1, (i - 40 + 4)/9, 0.5) //中发白
}

export const drawCardDisRatio = 2;

export let CountDownInfo: Vec4[] = [
    new Vec4(-1, 1, 0.25, 0),
    new Vec4(-1, 1, 0.5, 0),
    new Vec4(-1, 1, 0.75, 0),
    new Vec4(-1, 1, 0, 0),
    new Vec4(-1, 1, 0.25, 0.333333),
    new Vec4(-1, 1, 0.5, 0.333333),
    new Vec4(-1, 1, 0.75, 0.333333),
    new Vec4(-1, 1, 0, 0.333333),
    new Vec4(-1, 1, 0.25, 0.666667),
    new Vec4(-1, 1, 0.5, 0.666667),
]


