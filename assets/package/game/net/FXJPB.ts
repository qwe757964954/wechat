import { BaseProtobuf } from "../../../proj/gprotobuf/BaseProtobuf";

export class FXJPB extends BaseProtobuf {

    constructor(name: string) {
        super(name + "包装与解析...");
    };


    public encodeBody(pData: any, funcName?: string) {
        return super.encodeBody(pData, funcName);
    }


    public decodeBody(body: ArrayBuffer, funcName?: string) {
        return super.decodeBody(body, funcName);
    }

}