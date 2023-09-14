/**
 * Name = NodePoolCache
 * URL = db://assets/extend/NodePoolCache.ts
 * Time = Thu Apr 07 2022 13:02:05 GMT+0800 (中国标准时间)
 * Author = xueya
 * 缓存池
 */

export class NodePoolCache {

	private nodeCache;
	//实例化
	constructor() {
		this.nodeCache = {}
	};

	get(key: string) {
		if (this.nodeCache[key]) {
			if (this.nodeCache[key].length > 0) {
				return this.nodeCache[key].shift()
			}
		}
		return null
	};

	add(key: string, obj: Object) {
		if (!this.nodeCache[key]) {
			this.nodeCache[key] = []
		}
		this.nodeCache[key].push(obj)
	}

	release(key: string) {
		if (!this.nodeCache[key]) {
			return;
		} else {
			this.nodeCache[key] = [];
		}
	}

}
// export let nodePoolCache = new NodePoolCache();

