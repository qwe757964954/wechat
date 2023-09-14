/** 引擎 utils.ts 中有一些基础数学方法 */

/** 随机管理 */
export namespace RandomManager {

    // constructor() {
    //     RandomManager.setSeed(1);

    //     for (let index = 0; index < 10; index++) {
    //         console.log(RandomManager.getRandomInt(0, 100));
    //     }

    //     let a = RandomManager.getRandomByMinMaxList(50, 100, 5)
    //     console.log("随机的数字", a);

    //     let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //     let r = RandomManager.getRandomByObjectList(b, 5);
    //     console.log("原始的对象", b);
    //     console.log("随机的对象", r);

    //     let c = RandomManager.getRandomBySumList(5, -100,);
    //     console.log("定和随机分配", c);
    // }

    export const seedrandom: any = null;

    export function getRandom(): number {
        if (RandomManager.seedrandom) {
            return RandomManager.seedrandom.quick();
        }
        return Math.random();
    }

    /** 设置随机种子 */
    export function setSeed(seed: number) {
        // @ts-ignore
        RandomManager.seedrandom = new Math.seedrandom(seed);
    }

    /**
     * 生成指定范围的随机整数
     * @param min   最小值
     * @param max   最大值
     * @param type  类型
     */
    export function getRandomInt(min: number, max: number, type: number = 2): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        switch (type) {
            case 1: // [min,max) 得到一个两数之间的随机整数,这个值不小于min（如果min不是整数的话，得到一个向上取整的 min），并且小于（但不等于）max  
                return Math.floor(RandomManager.getRandom() * (max - min)) + min;
            case 2: // [min,max] 得到一个两数之间的随机整数，包括两个数在内,这个值比min大（如果min不是整数，那就不小于比min大的整数），但小于（但不等于）max
                return Math.floor(RandomManager.getRandom() * (max - min + 1)) + min;
            case 3: // (min,max) 得到一个两数之间的随机整数
                return Math.floor(RandomManager.getRandom() * (max - min - 1)) + min + 1;
        }
        return 0;
    }

    /**
     * 根据最大值，最小值范围 生成随机数数组
     * @param min   最小值
     * @param max   最大值
     * @param n     随机个数
     * @param type  类型
     * @returns 
     */
    export function getRandomByMinMaxList(min: number, max: number, n: number, type: number = 2): Array<number> {
        let result: Array<number> = [];
        for (let i = 0; i < n; i++) {
            result.push(RandomManager.getRandomInt(min, max))
        }
        return result;
    }

    /**
     * 获取数组中随机对象
     * @param objects 对象数组
     * @param n 随机个数
     * @returns 
     */
    export function getRandomByObjectList<T>(objects: Array<T>, n: number): Array<T> {
        let temp: Array<T> = objects.slice();
        let result: Array<T> = [];
        for (let i = 0; i < n; i++) {
            let index = RandomManager.getRandomInt(0, n, 1);
            result.push(temp.splice(index, 1)[0]);
        }
        return result;
    }

    /**
     * 定和随机分配
     * @param n     随机数量
     * @param sum   随机元素合
     * @returns 
     */
    export function getRandomBySumList(n: number, sum: number) {
        let residue = sum;
        let value = 0;
        let result: Array<number> = [];
        for (let i = 0; i < n; i++) {
            value = RandomManager.getRandomInt(0, residue, 3);
            if (i == n - 1) {
                value = residue;
            }
            else {
                residue -= value;
            }
            result.push(value);
        }
        return result;
    }
}
