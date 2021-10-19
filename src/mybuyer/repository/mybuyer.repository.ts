import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { MybuyerAddDTO } from "../dto/mybuyer.add.dto";
import { MybuyerEditDTO } from "../dto/mybuyer.edit.dto";
import { Mybuyer, MybuyerDocument } from "../schema/mybuyer.schema";

@Injectable()
export class MybuyerRepository {
    constructor(@InjectModel(Mybuyer.name) private mybuyerModel: Model<MybuyerDocument>) {}

    async countBy(param: {}): Promise<number> {
        return this.mybuyerModel.findOne(param).countDocuments();
    }
    
    async create(myBuyer: MybuyerAddDTO): Promise<Mybuyer> {
        if(await this.countBy({ company_id: myBuyer.company_id, buyer_id: myBuyer.buyer_id }) !== 0) {
            throw new BadRequestException('Duplicate entity');
        }
        return await this.mybuyerModel.create(myBuyer);
    }

    async update(mybuyer: MybuyerEditDTO): Promise<Mybuyer> {
        const docs =  await this.mybuyerModel.findOneAndUpdate({ company_id : mybuyer.company_id, buyer_id: mybuyer.buyer_id }, mybuyer, {new:true});
        if(!docs?.company_id) {
            throw new BadRequestException('Document not exists');
        }
        return docs;
    }
}