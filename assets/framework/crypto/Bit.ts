/**
 * Name = Bit
 * URL = db://assets/framework/crypto/Bit.ts
 * Time = Thu May 12 2022 10:19:57 GMT+0800 (中国标准时间)
 * Author = xueya
 * 位运算
 */

import { MathEx } from "../extend/MathEx"

export namespace Bit {

	export const bnot = bit_not;
	export const band = bit_and;
	export const bor = bit_or;
	export const bxor = bit_xor;
	export const brshift = bit_rshift;
	export const blshift = bit_lshift;
	export const bxor2 = bit_xor2;

	export const rshift = _rshift;
	export const d2b = _d2b;


	// utility func
	export const tobits = to_bits;
	export const tonumb = tbl_to_number;

	const data32 = []
	for (let index = 0; index < 32; index++) {
		data32[index] = 2 ** (32 - index - 1)
	}
	export function check_int(n) {
		// checking not float
		if (n - Math.floor(n) > 0) {
			console.log("Error:trying to use bitwise operation on non-integer!")
		}

	}
	export function to_bits(n: number = null): number[] {
		if (n == null || n == undefined) {
			return null
		}
		if (n < 0) {
			// negative
			return to_bits(bit_not(Math.abs(n)) + 1)
		}
		// to bits table
		let tbl = []

		let cnt = 0
		while (n > 0) {
			let last = MathEx.mod(n, 2)
			if (last == 1) {
				tbl[cnt] = 1
			} else {
				tbl[cnt] = 0
			}
			n = (n - last) / 2
			cnt = cnt + 1
		}
		return tbl
	}
	export function tbl_to_number(tbl: number[]) {
		if (!tbl) {
			return 0
		}
		let n = tbl.length

		let rslt = 0
		let power = 1
		for (let index = 0; index < n; index++) {
			rslt = rslt + tbl[index] * power
			power = power * 2

		}
		return rslt
	}
	export function expand(tbl_m, tbl_n) {
		let big = []
		let small = []
		if (tbl_m.length > tbl_n.length) {
			big = tbl_m
			small = tbl_n
		} else {
			big = tbl_n
			small = tbl_m
		}
		// expand small
		if (small && big) {
			for (let index = small.length; index < big.length; index++) {
				small[index] = 0
			}
		}
	}

	export function bit_or(m: number, n: number) {

		let tbl_m = to_bits(m)
		let tbl_n = to_bits(n)
		expand(tbl_m, tbl_n)

		let tbl = []
		let rslt = Math.max(tbl_m.length, tbl_n.length)
		for (let i = 0; i < rslt; i++) {
			if (tbl_m[i] == 0 && tbl_n[i] == 0) {
				tbl[i] = 0
			} else {
				tbl[i] = 1
			}

		}
		return tbl_to_number(tbl)
	}

	export function bit_and(m, n) {
		let tbl_m = to_bits(m)
		let tbl_n = to_bits(n)
		expand(tbl_m, tbl_n)

		let tbl = []

		let rslt = Math.max(tbl_m.length, tbl_n.length)
		for (let i = 0; i < rslt; i++) {
			if (tbl_m[i] == 0 || tbl_n[i] == 0) {
				tbl[i] = 0
			} else {
				tbl[i] = 1
			}

		}
		return tbl_to_number(tbl)
	}

	export function bit_not(n) {
		let tbl = to_bits(n)
		let size = Math.max(tbl.length, 32)
		for (let i = 0; i < size; i++) {
			if (tbl[i] == 1) {
				tbl[i] = 0
			} else {
				tbl[i] = 1
			}
		}
		return tbl_to_number(tbl)
	}
	export function bit_xor(m, n) {
		let tbl_m = to_bits(m)
		let tbl_n = to_bits(n)
		expand(tbl_m, tbl_n)

		let tbl = []
		let rslt = Math.max(tbl_m.length, tbl_n.length)
		for (let i = 0; i < rslt; i++) {
			if (tbl_m[i] != tbl_n[i]) {
				tbl[i] = 1
			} else {
				tbl[i] = 0
			}
		}
		return tbl_to_number(tbl)
	}

	export function bit_rshift(n, bits) {
		check_int(n)
		let high_bit = 0
		if (n < 0) {
			// negative
			n = bit_not(Math.abs(n)) + 1
			high_bit = 2147483648 // 0x80000000
		}
		for (let index = 0; index < bits; index++) {
			n = n / 2
			n = bit_or(Math.floor(n), high_bit)
		}
		return Math.floor(n)
	}
	export function bit_lshift(n, bits) {
		check_int(n)
		if (n < 0) {
			// negative
			n = bit_not(Math.abs(n)) + 1
		}
		for (let index = 0; index < bits; index++) {
			n = n * 2
		}
		return bit_and(n, 9223372036854775807) // sint64
		// return bit_and(n, 4294967295) -- 0xFFFFFFFF
	}

	export function bit_xor2(m, n) {
		let rhs = bit_or(bit_not(m), bit_not(n))
		let lhs = bit_or(m, n)
		let rslt = bit_and(lhs, rhs)
		return rslt
	}

	export function _b2d(arg) {
		let nr = 0
		for (let i = 0; i < 32; i++) {
			if (arg[i] == 1) {
				nr = nr + data32[i]
			}
		}
		return nr
	}

	export function _d2b(arg) {
		arg = arg >= 0 ? arg : (0xFFFFFFFF + arg + 1)
		let tr = []
		for (let i = 0; i < 32; i++) {
			if (arg >= data32[i]) {
				tr[i] = 1
				arg = arg - data32[i]
			} else {
				tr[i] = 0
			}
		}
		return tr
	}

	export function _and(a, b) {
		let op1 = _d2b(a)
		let op2 = _d2b(b)
		let r = []
		for (let i = 0; i < 32; i++) {
			if (op1[i] == 1 && op2[i] == 1) {
				r[i] = 1
			} else {
				r[i] = 0
			}
		}
		return _b2d(r)
	}
	//返回a逻辑右偏移到n位 
	export function _rshift(a, n) {
		let op1 = _d2b(a)
		n = n <= 32 ? n : 32
		n = n >= 0 ? n : 0

		let count = 0
		for (let i = 32; i > n; i--) {
			count = count + 1
			op1[i - 1] = op1[i - 1 - n]
		}
		for (let i = 0; i < n; i++) {
			op1[i] = 0

		}
		return _b2d(op1)
	}

	export function _not(a) {
		let op1 = _d2b(a)
		let r = []
		for (let i = 0; i < 32; i++) {
			if (op1[i] == 1) {
				r[i] = 0
			} else {
				r[i] = 1
			}
		}
		return _b2d(r)

	}

	export function _or(a, b) {
		let op1 = _d2b(a)
		let op2 = _d2b(b)
		let r = []
		for (let i = 0; i < 32; i++) {
			if (op1[i] == 1 || op2[i] == 1) {
				r[i] = 1
			} else {
				r[i] = 0
			}
		}
		return _b2d(r)
	}


}
