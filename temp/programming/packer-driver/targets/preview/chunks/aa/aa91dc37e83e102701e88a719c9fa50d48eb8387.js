System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Size, Vec3, GConstants, GameRes, Encrypt, Utils, BaseCache, GoodsData, _crd;

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRes(extras) {
    _reporterNs.report("GameRes", "../config/GameRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../framework/vc/BaseCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "./User", _context.meta, extras);
  }

  _export("GoodsData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Size = _cc.Size;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GConstants = _unresolved_2.GConstants;
    }, function (_unresolved_3) {
      GameRes = _unresolved_3.GameRes;
    }, function (_unresolved_4) {
      Encrypt = _unresolved_4.Encrypt;
    }, function (_unresolved_5) {
      Utils = _unresolved_5.Utils;
    }, function (_unresolved_6) {
      BaseCache = _unresolved_6.BaseCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3bf36KCiuJBpqigOcgRXh0A", "GoodsData", undefined);

      __checkObsolete__(['Size', 'Vec3']);

      _export("GoodsData", GoodsData = class GoodsData extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        /** 用户类 */

        /** 物品 */

        /** 所有分类商品缓存列表 */

        /** 分类商品的支付渠道列表 */

        /** 分类商品的商品列表 */

        /** 角色配置(前两位不能替换位置) */
        //实例化
        constructor(superClass) {
          super("GoodsData");
          this.__User = null;
          this._goodsData = {};
          this._GoodsInfoList = {};
          this._GoodsPayWaysList = {};
          this._GoodsGiftList = {};
          this.RolesConf = [{
            role_id: "30",
            path: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Spine_Roles_XiaoBo,
            standby: ["idle1", "idle1", "idle1", "idle2"],
            hall: "dating",
            role: "interactive",
            clickSize: new Size(400, 630),
            // mask: GameRes.IMG_Roles_XiaoBo_Mask,
            // select: GameRes.IMG_Roles_XiaoBo_Select,
            name: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).IMG_Roles_XiaoBo_Name,
            get_new_role: {
              name: "小博",
              quality: "B",
              // B
              scale: 1.5,
              offset: new Vec3(23, -590, 0) // bg: GameRes.IMG_Roles_AnimBg_3,

            },

            /** 默认的皮肤ID (未完待续)*/
            skinId: 1,

            /** 皮肤配置 (未完待续)*/
            skin: {}
          }, {
            role_id: "31",
            path: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Spine_Roles_Xiaoya,
            standby: ["idle1", "idle1", "idle2"],
            hall: "dating",
            role: "interactive",
            clickSize: new Size(400, 580),
            // mask: GameRes.IMG_Roles_Xiaoya_Mask,
            // select: GameRes.IMG_Roles_Xiaoya_Select,
            name: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).IMG_Roles_Xiaoya_Name,
            get_new_role: {
              name: "小雅",
              quality: "B",
              // B
              scale: 1.5,
              offset: new Vec3(10, -512, 0) // bg: GameRes.IMG_Roles_AnimBg_3,

            }
          }];
          this.__User = superClass;
        }

        /**
         * 同步更新数据
         * @param type 详见GConstant.UserGoodsDataType的定义
         * @param body 
         */
        update(type, body) {
          if (!body || !body["content"]) {
            return;
          }

          switch (type) {
            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserGoodsDataType.GOODS_CONFIG:
              break;
          } // if (type == GConstants.UserGoodsDataType.GOODS_CONFIG) {//更新物品数据
          // 		if (body["version"] == this._goodsDataVer && body["version"] != null) {
          // 				return;
          // 		}
          // 		this._goodsData = {};
          // 		for (let key in body["content"]) {
          // 				if (Object.prototype.hasOwnProperty.call(body["content"], key)) {
          // 						let item = body["content"][key];
          // 						this._goodsData[String(item["id"])] = item;
          // 				}
          // 		}
          // 		this._goodsDataVer = Utils.nullToDefault(body["version"], null);
          // 		//通知：用户物品有更新
          // 		EventManager.dispatch(AppEvent.USER_UPDATE_GOODS, this._goodsData);
          // } else if (type == GConstants.UserGoodsDataType.ROLES_CONFIG) {//更新角色配置
          // 		if (body["version"] == this._rolesDataVer && body["version"] != null) {
          // 				return;
          // 		}
          // 		// 解析角色皮肤 skins:{role_id:[]}
          // 		let skins = {};
          // 		for (let key in body["content"]["skin_config"]) {
          // 				if (Object.prototype.hasOwnProperty.call(body["content"]["skin_config"], key)) {
          // 						let item = body["content"]["skin_config"][key];
          // 						let itemData = Encrypt.JsonDecode(item);
          // 						if (itemData) {
          // 								let roleID = String(itemData["role_id"]);
          // 								if (skins[roleID] == null) {
          // 										skins[roleID] = [];
          // 								}
          // 								if (itemData["skill_cfg"] != null && itemData["skill_cfg"][0] != null) {
          // 										itemData["skinName"] = itemData["skill_cfg"][0]["name"];
          // 								}
          // 								skins[roleID].push(itemData);
          // 						}
          // 				}
          // 		}
          // 		//解析角色配置
          // 		this._rolesData = [];
          // 		for (let key in body["content"]["role_config"]) {
          // 				if (Object.prototype.hasOwnProperty.call(body["content"]["role_config"], key)) {
          // 						let item = body["content"]["role_config"][key];
          // 						let itemData = Encrypt.JsonDecode(item);
          // 						if (itemData) {
          // 								itemData["role_id"] = String(key);
          // 								itemData["skins"] = skins[String(key)];
          // 								this._rolesData.push(itemData);
          // 						}
          // 				}
          // 		}
          // 		this.checkRoles();
          // 		this._rolesDataVer = Utils.nullToDefault(body["version"], null);
          // 		//通知：角色配置有更新
          // 		EventManager.dispatch(AppEvent.USER_UPDATE_ROLE_CONF, this._rolesData);
          // } else if (type == GConstants.UserGoodsDataType.ROLES_SKILL) {//更新角色技能
          // 		if (body["version"] == this._roleSkillVer && body["version"] != null) {
          // 				return;
          // 		}
          // 		this._roleSkill = [];
          // 		for (let key in body["content"]) {
          // 				if (Object.prototype.hasOwnProperty.call(body["content"], key)) {
          // 						let item = body["content"][key];
          // 						let itemData = Encrypt.JsonDecode(item);
          // 						if (itemData) {
          // 								itemData["skill_id"] = String(key);
          // 								this._roleSkill.push(itemData);
          // 						}
          // 				}
          // 		}
          // 		this._roleSkillVer = Utils.nullToDefault(body["version"], null);
          // 		//通知：用户角色技能有更新
          // 		EventManager.dispatch(AppEvent.USER_UPDATE_ROLE_SKILL, this._roleSkill);
          // }

        }
        /** 更新礼包数据 */


        updateGoods(body) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(body)) {
            return null;
          }

          var info = {
            "ginfo": {},
            //具体商品列表
            "paycfg": {},
            //支付配置{ payCnHost: https://paycnapi.boyaa.com/,pcAppid: 7300 }
            "scene": -1,
            //GoodsID
            "sceneinfo": {},
            //当前scene的描述信息
            "subTab": {}
          };
          var res = this.mergeArrayDefault(info, body);
          res["ginfo"] = this.updateGoodsInfoList(res["scene"], res["ginfo"], res["paycfg"]);
          this._GoodsInfoList[res["scene"]] = res;
          this._GoodsPayWaysList[res["scene"]] = res["paycfg"];
          this._GoodsGiftList[res["scene"]] = res["ginfo"];
          return res["scene"];
        }
        /**
         * 根据goodsID 获取商品数据
         * @param goodsID 详见 GoodsListID配置
         * @returns 
         */


        getGoodsInfoByGoodsID(goodsID) {
          if (!this._GoodsInfoList[goodsID]) {
            return null;
          }

          return this._GoodsInfoList[goodsID];
        }
        /**
         * 根据goodsID 获取商品数据中的商品列表
         * @param goodsID 详见 GoodsListID配置
         * @returns 
         */


        getGoodsGiftByGoodsID(goodsID) {
          if (!this._GoodsGiftList[goodsID]) {
            return null;
          }

          return this._GoodsGiftList[goodsID];
        }
        /**
         * 根据goodsID 和 gid 获取商品列表中的商品具体信息
         * @param goodsID 详见 GoodsListID配置
         * @returns 
         */


        getOneGoodGift(goodsID, gid) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(goodsID, gid) == false) {
            return null;
          }

          if (!this._GoodsGiftList[goodsID]) {
            return null;
          }

          gid = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(gid, -1);
          var goodsList = this._GoodsGiftList[goodsID];

          for (var i = 0; i < goodsList.length; i++) {
            if (goodsList[i]["id"] == gid) {
              return goodsList[i];
            }
          }

          return null;
        }
        /** 获取礼包 */

        /** 更新商品列表（ginfo） */


        updateGoodsInfoList(scene, goodsList, payConf) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(scene) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(goodsList)) {
            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNull(scene) == false) {
              return this._GoodsGiftList[scene];
            }

            return null;
          }

          payConf = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(payConf);
          var map = new Map();

          for (var key in goodsList) {
            if (Object.prototype.hasOwnProperty.call(goodsList, key)) {
              var goodInfo = goodsList[key];
              var info = {};
              info = {
                "scene": scene,
                "id": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(goodInfo["gid"]),
                //商品id
                "ptype": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(goodInfo["ptype"]),
                //商品类型 0：游戏币； 1：博雅币； 2：道具； 3：会员卡； 4：兑换券； 5：活动； 6：礼包； 7：表情包
                "name": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).nullToDefault(goodInfo["name"], ""),
                //商品名称
                "icon": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).nullToDefault(goodInfo["icon"], ""),
                //商品图标
                "desc": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).nullToDefault(goodInfo["desc"], ""),
                //商品描述
                "specialDesc": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).nullToDefault(goodInfo["specialDesc"], ""),
                //特殊描述(包含破产提示信息、商城特权描述)
                "crystal": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(goodInfo["crystal"]),
                //金条价格，如果>0，则代表支持金条购买，反之则不支持
                "crystalIcon ": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).nullToDefault(goodInfo["crystalIcon"], ""),
                // 金条角标
                "pchips": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(goodInfo["number"]),
                //商品数量
                "eventIcon": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).string_isEmpty(goodInfo["eventIcon"]) == false ? goodInfo["eventIcon"] : "",
                //特殊事件图标url，如推荐、新品等
                "appstoreid": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).nullToDefault(goodInfo["appstoreid"], ""),
                // 应用商店id(例：苹果应用商品商品id)
                "privilegeIcon": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).nullToDefault(goodInfo["privilegeIcon"], ""),
                //特权图标
                "privilegeTips": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).nullToDefault(goodInfo["privilegeTips"], ""),
                //特权提示
                "order": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(goodInfo["order"]),
                //顺序：排列从小到大
                "goods_id": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(goodInfo["goods_id"]),
                "switch": true,
                //是否开启游客禁止充值：true 打开  false 关闭
                "payCnHost": payConf["payCnHost"],
                //支付地址
                "pc_appid": payConf["pcAppid"],
                //支付的应用ID
                "award": this.__analysisGoodAwardInfo(goodInfo["award"]),
                //赠送奖励内容,如无则为空数组.{物品ID：物品数量}
                "currency": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(goodInfo["currency"], 1),
                //货币类型1RMB2银币3兑换券
                "pamount": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(goodInfo["price"], 0),
                //商品价格
                "pmodes": this.__getGoodsPmodes(goodInfo["pmodes"]),
                //支付模式选择
                "currency_desc": "元",
                "priorityDesc": "",
                "isFlash": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(goodInfo["isFlash"], -1),
                //是否是表情包  -1不是表情包
                "flash": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(goodInfo["flash"], -1),
                // 表情包标识
                "zoneId": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(goodInfo["zoneId"], 1) //商品分区ID

              };
              info["switch"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf(goodInfo["visitSwitch"] == 0);
              info["currency_desc"] = this.__getCurrencyDesc(info["currency"]);
              info["priorityDesc"] = this.__getDescByPriority(info["privilegeTips"], info["specialDesc"]);
              map.set(info["id"], info);
            }
          } //排序:排列从小到大


          if (map.size > 0) {
            var resultArray = [];
            var arrayLike = Array.from(map); //得到的array中索引0为map中的key,索引1为map中的value

            arrayLike.sort(function (a, b) {
              //从小到大
              return a[1]["order"] - b[1]["order"];
            });

            for (var index = 0; index < arrayLike.length; index++) {
              resultArray.push(arrayLike[index][1]);
            }

            this._GoodsGiftList[scene] = resultArray;
          }

          return this._GoodsGiftList[scene];
        }
        /** 序列化赠送奖励内容 */


        __analysisGoodAwardInfo(award) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(award)) {
            return {};
          }

          var _award = {
            id: -1,
            //物品id 对应GoodsClassify
            n: 0 //物品数量

          };
          return this.mergeArrayDefault(_award, award);
        }
        /** 获取pmodes */


        __getGoodsPmodes(strPmodes) {
          strPmodes = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(strPmodes, "");
          var pmodes = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonDecode(strPmodes);
          pmodes = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(pmodes);
          var res = [];

          for (var i = 0; i < pmodes.length; i++) {
            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(pmodes[i]) == false && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNull(pmodes[i]["id"]) == false) {
              var _item = {
                name: "",
                id: "0",
                icon: null,
                num: 0
              };
              var item = this.mergeArrayDefault(_item, pmodes[i]);
              item["name"] = pmodes[i]["n"];
              res.push(item);
            }
          }

          return res;
        }
        /** 获取货币描述 */


        __getCurrencyDesc(currencyType) {
          var currency_desc = "元";

          if (currencyType == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GoodMoneyType.diamond) {
            currency_desc = "兑换券";
          } else if (currencyType == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GoodMoneyType.gold) {
            currency_desc = "银币";
          }

          return currency_desc;
        }
        /** 描述信息优先级 privilegeTips > specialDesc */


        __getDescByPriority(privilegeTips, specialDesc) {
          var data = [privilegeTips, specialDesc];

          for (var i = 0; i < data.length; i++) {
            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(data[i]) == false) {
              return data[i];
            }
          }

          return "";
        }
        /**------------------------------------物品相关 Start--------------------------------------- */

        /** GoodsData:获取物品配置 */


        getGoodsData() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).clone(this._goodsData);
        }
        /** GoodsData:通过物品id获取物品详情信息 */


        getGoodsByID(goodID) {
          if (goodID == null) {
            return null;
          }

          goodID = String(goodID);

          if (this._goodsData[goodID] == null) {
            return null;
          }

          return this._goodsData[goodID];
        }
        /** GoodsData:通过物品id获取物品名称 */


        getGoodNameByID(goodID) {
          var data = this.getGoodsByID(goodID);
          return data != null ? data["item_name"] : "";
        }
        /** GoodsData:通过物品id获取物品的图标路径 */


        getGoodIconByID(goodID) {
          var data = this.getGoodsByID(goodID);
          return data != null ? data["item_res_url"] : "";
        }
        /** 通过id获取物品的子类型 */


        getGoodItemKindByID(goodID) {
          var data = this.getGoodsByID(goodID);
          return data != null ? data["item_kind"] : null;
        }
        /**------------------------------------角色相关 Start--------------------------------------- */
        // /**
        //  * RolesData:筛选当前版本支持的角色
        //  */
        // checkRoles() {
        //     let roleIds = this.getRolesLocalConfig();
        //     let temp = [];
        //     for (let k = 0; k < this._rolesData.length; k++) {
        //         for (let i = 0; i < roleIds.length; i++) {
        //             if (Utils.number_valueOf(this._rolesData[k]["role_id"], 0) == Utils.number_valueOf(roleIds[i]["role_id"], -1)) {
        //                 temp.push(this._rolesData[k]);
        //                 break;
        //             }
        //         }
        //     }
        //     this._rolesData = temp;
        // }
        // /** RolesData:获取角色配置 */
        // getRolesData() {
        //     return Utils.clone(this._rolesData);
        // }
        // /** RolesData:获取角色本地配置 */
        // getRolesLocalConfig() {
        //     return this.RolesConf;
        // }
        // /** RolesData:获取角色本地配置(根据角色ID) */
        // getRolesLocalConfigById(roleID) {
        //     if (roleID == null || isNaN(Number(roleID))) {
        //         return null;
        //     }
        //     for (let index = 0; index < this.RolesConf.length; index++) {
        //         let roleConf = this.RolesConf[index];
        //         if (Number(roleConf["role_id"]) == Number(roleID)) {
        //             return roleConf;
        //         }
        //     }
        //     return null;
        // }
        // /** 获取角色等级经验配置 */
        // getRoleExp(level: number) {
        //     if (level) {
        //         level = Utils.number_valueOf(level, -1);
        //         if (level == -1) {
        //             return null;
        //         }
        //         return this.RoleExp[level - 1];
        //     } else {
        //         return this.RoleExp;
        //     }
        // }
        // /** RolesData:通过角色id获取角色信息 */
        // getRoleDataByID(roleID) {
        //     if (!roleID) {
        //         return null;
        //     }
        //     roleID = String(roleID);
        //     if (this._rolesData.length == 0) {
        //         EventManager.dispatch(AppEvent.NET_CMD_REQ_ROLES_DATA);
        //         return null;
        //     }
        //     for (let i = 0; i < this._rolesData.length; i++) {
        //         if (this._rolesData[i]["role_id"] == roleID) {
        //             return this._rolesData[i];
        //         };
        //     }
        //     return null;
        // }
        // /** RolesData:通过id校验角色id是否存在配置中 */
        // isExistRoleByID(roleID: string) {
        //     return this.getRoleDataByID(roleID) != null;
        // }
        // /** RolesData:通过角色id获取本地配置的角色信息 */
        // getLocalRoleByID(roleID: string | any) {
        //     if (!roleID) {
        //         return null;
        //     }
        //     roleID = String(roleID);
        //     for (let i = 0; i < this.RolesConf.length; i++) {
        //         if (this.RolesConf[i]["role_id"] == roleID) {
        //             return this.RolesConf[i];
        //         };
        //     }
        //     return null;
        // }

        /**获取角色动画配置*/


        getRoleAnimConfigById(roleId) {
          if (this.__User.getUserSex() == 2) {
            return this.__User.GoodsData.RolesConf[1];
          } else {
            return this.__User.GoodsData.RolesConf[0];
          }
        }
        /**------------------------------------角色相关 End--------------------------------------- */


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa91dc37e83e102701e88a719c9fa50d48eb8387.js.map