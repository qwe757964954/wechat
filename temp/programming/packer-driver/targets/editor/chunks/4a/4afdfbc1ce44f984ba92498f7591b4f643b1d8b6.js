System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Layout, Node, Sprite, SpriteAtlas, _decorator, instantiate, GCache, AppEvent, GConstants, GameTxt, Utils, Encrypt, resLoader, EventManager, BaseComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, menu, mailPrefabCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../../../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTxt(extras) {
    _reporterNs.report("GameTxt", "../../../config/GameTxt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../../../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../../framework/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      GConstants = _unresolved_4.GConstants;
    }, function (_unresolved_5) {
      GameTxt = _unresolved_5.GameTxt;
    }, function (_unresolved_6) {
      Utils = _unresolved_6.Utils;
    }, function (_unresolved_7) {
      Encrypt = _unresolved_7.Encrypt;
    }, function (_unresolved_8) {
      resLoader = _unresolved_8.resLoader;
    }, function (_unresolved_9) {
      EventManager = _unresolved_9.EventManager;
    }, function (_unresolved_10) {
      BaseComponent = _unresolved_10.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "23257iI6HJJZJsHuXf0lxiq", "mailPrefabCtr", undefined);

      __checkObsolete__(['EventTouch', 'Label', 'Layout', 'Node', 'Sprite', 'SpriteAtlas', '_decorator', 'instantiate']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = mailPrefabCtr
       * URL = db://assets/package/hall/scripts/mailPrefabCtr.ts
       * Time = Wed Sep 14 2022 09:54:06 GMT+0800 (中国标准时间)
       * Author = Tomoe
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("mailPrefabCtr", mailPrefabCtr = (_dec = ccclass('mailPrefabCtr'), _dec2 = menu('prefab/activity/mailPrefabCtr'), _dec3 = property({
        tooltip: "左边邮件Item",
        type: Node
      }), _dec4 = property({
        tooltip: "左边邮件Layer",
        type: Node
      }), _dec5 = property({
        tooltip: "无邮件显示节点",
        type: Node
      }), _dec6 = property({
        tooltip: "邮件显示",
        type: Node
      }), _dec7 = property({
        tooltip: "邮件标题",
        type: Label
      }), _dec8 = property({
        tooltip: "邮件内容文本-无道具",
        type: Label
      }), _dec9 = property({
        tooltip: "邮件内容文本-有道具",
        type: Label
      }), _dec10 = property({
        tooltip: "邮件内容-无道具",
        type: Node
      }), _dec11 = property({
        tooltip: "邮件内容-有道具",
        type: Node
      }), _dec12 = property({
        tooltip: "道具列表",
        type: Node
      }), _dec13 = property({
        tooltip: "道具Item",
        type: Node
      }), _dec14 = property({
        tooltip: "用户头像框",
        type: Label
      }), _dec15 = property({
        tooltip: "邮件按钮",
        type: Node
      }), _dec16 = property({
        tooltip: "邮件图集",
        type: SpriteAtlas
      }), _dec(_class = _dec2(_class = (_class2 = class mailPrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mailItem", _descriptor, this);

          _initializerDefineProperty(this, "mailLayer", _descriptor2, this);

          _initializerDefineProperty(this, "noMailNode", _descriptor3, this);

          _initializerDefineProperty(this, "mailLayout", _descriptor4, this);

          _initializerDefineProperty(this, "mailTitle", _descriptor5, this);

          _initializerDefineProperty(this, "noMailContent", _descriptor6, this);

          _initializerDefineProperty(this, "hasMailContent", _descriptor7, this);

          _initializerDefineProperty(this, "noMailLayout", _descriptor8, this);

          _initializerDefineProperty(this, "hasMailLayout", _descriptor9, this);

          _initializerDefineProperty(this, "itemLayer", _descriptor10, this);

          _initializerDefineProperty(this, "itemNode", _descriptor11, this);

          _initializerDefineProperty(this, "mailNum", _descriptor12, this);

          _initializerDefineProperty(this, "btnLayer", _descriptor13, this);

          _initializerDefineProperty(this, "mailAtlas", _descriptor14, this);

          this.mailData = [];
          this.curentIndex = null;
          this.currentData = null;
          this.currentItem = null;
        }

        /**初始化添加事件绑定 */
        onInitModuleEvent() {
          //刷新邮件界面
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NOTIFY_EMAIL_CHANGE, this.updateView); //请求领奖成功

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_EMAIL_REWARD, this.respGetAward); //邮件红点更新

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, this.redDotUpdate);
        }

        onLoad() {
          this.initData();
          this.initView();
        }

        start() {
          //请求拉取信箱数据
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_REQ_WATCH);
        }

        initData() {
          this.mailData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).MailInfo.sortMsgData((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).MailInfo.MailData);
        }

        initView() {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this.mailData)) {
            this.mailLayout.active = false;
            this.noMailNode.active = true;
            this.mailNum.string = `0/100`;
            this.setMailBtn();
          } else {
            this.mailNum.string = `${this.mailData.length}/100`;
          }

          this.showView();
        }

        showView() {
          this.mailLayer.removeAllChildren();

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this.mailData)) {
            return;
          }

          this.noMailNode.active = false;
          let maxlenth;

          if (this.mailData.length > (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).MessageMaxNum) {
            maxlenth = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).MessageMaxNum;
          } else {
            maxlenth = this.mailData.length;
          }

          for (let i = 0; i < maxlenth; i++) {
            let mailStatus = this.mailData[i].status;
            let data = this.mailData[i];
            let node = instantiate(this.mailItem);
            this.mailLayer.addChild(node);
            node["mailData"] = this.mailData[i];
            node["index"] = i;
            let img_new = node.getChildByName("img_new");
            let img_gift = node.getChildByName("img_gift");

            if (this.curentIndex == null && i == 0) {
              let currentData = this.mailData[0];
              this.initRightView(currentData);
              node.getChildByName("img_selected").active = true;

              if (currentData.status == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).MsgStatus.MSG_STATUS_FRESH) {
                currentData.status = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).MsgStatus.MSG_STATUS_READ;
                (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).MailInfo.updateMailDataInCache(currentData);
              } // 记录一下当前展示内容的下标


              this.curentIndex = i;
              this.updateCurrentData();
            } else if (this.curentIndex != null && this.curentIndex == i) {
              let currentData = this.mailData[i]; //界面打开状态

              this.initRightView(currentData);
              node.getChildByName("img_selected").active = true;
              this.updateCurrentData();
            } //设置标题


            let titleNode = node.getChildByName("label_title");
            titleNode.getComponent(Label).string = data.title; //设置日期

            let timeNode = node.getChildByName("label_time");
            let time = "";

            if (data.time != null) {
              let timeArray = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).timeToDataArray(data.time);
              time = `${timeArray["year"]}-${timeArray["month"]}-${timeArray["day"]}`;
            }

            timeNode.getComponent(Label).string = time; //显示 new 标识图片,是否打开,是否领取标识

            let awardArr = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(data.awards);
            let giftSprite = img_gift.getComponent(Sprite);

            if (mailStatus == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).MsgStatus.MSG_STATUS_FRESH) {
              img_new.active = true;

              if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).table_isEmpty(awardArr)) {
                giftSprite.spriteFrame = this.mailAtlas.spriteFrames["mail/unRead"];
              }
            } else if (mailStatus == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).MsgStatus.MSG_STATUS_READ) {
              if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).table_isEmpty(awardArr)) {
                giftSprite.spriteFrame = this.mailAtlas.spriteFrames["mail/Read"];
              }

              img_new.active = false;
            } else {
              giftSprite.spriteFrame = this.mailAtlas.spriteFrames["mail/gift_open"];
              img_new.active = false;
            }

            node.active = true;
          }

          this.mailLayer.getComponent(Layout).updateLayout(); //更新右边邮件总数

          this.mailNum.string = `${maxlenth}/100`;
        }
        /**
         * 渲染邮件内容区域
         * @param dataList 
         */


        initRightView(dataList) {
          this.itemLayer.removeAllChildren();
          this.noMailLayout.active = false;
          this.hasMailLayout.active = false; //设置邮件标题

          this.mailTitle.string = dataList.title;
          let show_layout;
          let awardArr = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonDecode(dataList.awards); //先判断是否带附件

          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(awardArr)) {
            this.hasMailContent.string = dataList.body;
            this.hasMailLayout.active = true;
            show_layout = this.hasMailLayout;

            for (let i = 0; i < awardArr.length; i++) {
              let v = awardArr[i];
              let node = instantiate(this.itemNode);
              this.itemLayer.addChild(node);
              let numLabel = node.getComponentInChildren(Label);
              let img_item = node.getChildByName("img_item");
              numLabel.string = String(v.num);

              if (dataList.status == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).MsgStatus.MSG_STATUS_HANDLED) {
                //已领取
                node.getComponent(Sprite).grayscale = true; //领取状态 道具置灰

                img_item.getComponent(Sprite).grayscale = true;
              }

              let propType = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf(v['type'], 0);
              let conf = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).PropsConf.getPropsInfoById(propType);
              let url = conf['url'];
              this.setSpriteFrame(img_item, url);
            }

            if (dataList.status == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).MsgStatus.MSG_STATUS_HANDLED) {
              this.setMailBtn();
            } else {
              this.setMailBtn(0);
            }
          } else {
            this.noMailContent.string = dataList.body;
            this.noMailLayout.active = true;
            show_layout = this.noMailLayout;
            this.setMailBtn();
          }

          let senderLabel = show_layout.getChildByName("label_sender");
          let timeLabel = show_layout.getChildByName("label_time");
          senderLabel.active = false;
          timeLabel.active = false;
          this.mailLayout.active = true;
        }
        /**
         * 更新界面
         * @param event 
         * @param pData 
         */


        updateView(event = null, pData = null) {
          this.initData();
          this.addSchedulerOnce(1, () => {
            console.log("mail request");
            this.initView();
          });
        } //点击邮件


        onMailClick(event) {
          for (let child of this.mailLayer.children) {
            child.getChildByName("img_selected").active = false;
          }

          let node = event.target;
          node.getChildByName("img_selected").active = true;
          let img_new = node.getChildByName("img_new");
          img_new.active = false;
          let img_gift = node.getChildByName("img_gift");
          let currentData = node["mailData"]; //文字点击即算opened ,奖励要领取才算

          console.log("点击邮件:", currentData);

          if (currentData.status == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).MsgStatus.MSG_STATUS_FRESH) {
            currentData.status = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).MsgStatus.MSG_STATUS_READ;
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).MailInfo.updateMailDataInCache(currentData);
            let awardArr = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(currentData.awards);

            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(awardArr)) {
              img_gift.getComponent(Sprite).spriteFrame = this.mailAtlas.spriteFrames["mail/Read"];
            }
          } // 记录一下当前展示内容的下标


          this.curentIndex = node["index"];
          this.updateCurrentData();
          this.initRightView(currentData);
        }
        /**
         * 刷新当前选中邮件数据
         */


        updateCurrentData() {
          let index = Number(this.curentIndex);
          let len = this.mailLayer.children.length;

          for (let i = 0; i < len; i++) {
            let node = this.mailLayer.children[index];

            if (index == i) {
              this.currentItem = node;
            }
          }

          this.currentData = this.mailData[this.curentIndex];
        }
        /**
         * 设置远端图片
         * @param node 节点
         * @param path 图片地址
         */


        setSpriteFrame(node, path) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isHttp(path)) {
            let self = this;
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadRemote(path, {
              ext: '.jpg'
            }, (err, imageAsset) => {
              if (!imageAsset) {
                //资源可能还在加载中
                return;
              }

              if (!self.node || self.node.isValid == false) {
                return;
              }

              let spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).image_ImageAssetToSpriteFrame(imageAsset);

              if (spriteFrame) {
                node.getComponent(Sprite).spriteFrame = spriteFrame;
              }
            });
          }
        }
        /**
         * 设置按钮状态
         * index：0（领取）1（删除） null(不显示)
         * */


        setMailBtn(index = null) {
          if (index == null) {
            this.btnLayer.active = false;
            return;
          }

          this.btnLayer.active = true;

          for (let i = 0; i < this.btnLayer.children.length; i++) {
            let child = this.btnLayer.children[i];

            if (i == index) {
              child.active = true;
            } else {
              child.active = false;
            }
          }
        }
        /**
         * 领取道具
         * @param event 
         */


        onReceiveClick(event) {
          console.log("领取道具", this.currentData);
          let awardArr = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonDecode(this.currentData.awards);

          if (this.currentData && !(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(awardArr)) {
            if (this.currentData.status == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).MsgStatus.MSG_STATUS_HANDLED) {
              //如果已经领取
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                  error: Error()
                }), GameTxt) : GameTxt).item_has_receive
              });
              this.currentItem.getComponent(Sprite).grayscale = true; //领取状态 道具置灰

              let img_item = this.currentItem.getChildByName("img_item");
              img_item.getComponent(Sprite).grayscale = true;
              this.setMailBtn();
            } else {
              console.log("发起领取邮件奖励请求", this.currentData, this.currentData.id);
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_EMAIL_REWARD, this.currentData.id);
            }
          }
        }
        /**
         * 领奖返回
         * @param event
         * @param isSuccess 是否成功 
         * @param respData 响应数据
         * @param reqData 请求数据
         * @returns 
         */


        respGetAward(event, isSuccess, respData, reqData) {
          if (isSuccess != true) {
            return;
          }

          if (this.currentItem && this.currentItem.getChildByName("img_gift")) {
            this.currentItem.getChildByName("img_gift").getComponent(Sprite).spriteFrame = this.mailAtlas.spriteFrames["mail/gift_open"];
          }

          this.initRightView(this.currentData);
        }
        /**
         * 关闭
         * @param event 
         */


        onCloseClick(event) {
          this.node.destroy();
        } //销毁


        onDestroy() {}

        /**
         * 红点更新
         * @param event 
         * @param keyType 红点类型
         */
        redDotUpdate(event, keyType, flag) {
          if (keyType == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Email) {}
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mailItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mailLayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "noMailNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "mailLayout", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mailTitle", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "noMailContent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "hasMailContent", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "noMailLayout", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "hasMailLayout", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "itemLayer", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "itemNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "mailNum", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "btnLayer", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "mailAtlas", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4afdfbc1ce44f984ba92498f7591b4f643b1d8b6.js.map