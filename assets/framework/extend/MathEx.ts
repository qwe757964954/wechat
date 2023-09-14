/**
 * Name = MathEx
 * URL = db://assets/framework/extend/MathEx.ts
 * Time = Thu May 12 2022 10:29:28 GMT+0800 (中国标准时间)
 * Author = xueya
 * Math的扩展类
 */

export namespace MathEx {

	/**
	 * 取模 
	 * @param bNum 被除数
	 * @param dNum 除数
	 */
	export function mod(bNum: number, dNum: number) {
		if (!bNum || !dNum) {
			console.log(`Error: MathEx.mod 参数不能为空 nNum=${bNum} dNum=${dNum}`)
			return null
		}
		if (dNum == 0) {
			console.log(`Error: MathEx.mod 除数不能为0 nNum=${bNum} dNum=${dNum}`)
			return null
		}
		return ((bNum % dNum) + dNum) % dNum

	}

}

