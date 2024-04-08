import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class User {
    
    @Prop({ required: true })
    name: string
    
    @Prop({ required: true })
    lastname: string
    
    @Prop({ required: true })
    age: string
    
    @Prop({ required: true })
    gender: string
    
    @Prop({ default: false })
    status: boolean
    
    @Prop({ required: true })
    birthdate: string
    
    @Prop({ minlength: 7, required: true })
    phone: string
}

export const UserSchema = SchemaFactory.createForClass( User );
