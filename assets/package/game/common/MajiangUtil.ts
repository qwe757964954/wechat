
export class MajiangUtil {
    
    public static deleteHasInList(currList: number[], otherList: number[]) {
        let i = currList.length
        while (i--) {
          if (otherList.some((x) => {
            return currList[i] === x
          })) currList.splice(i, 1)
        }
    }

    public static swapElements<T>(arr: T[], index1: number, index2: number): void {
      [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }
}


