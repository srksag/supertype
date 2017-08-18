import {Supertype, supertypeClass, property} from '../../../index';

@supertypeClass
export class BaseType extends Supertype{
    @property({toServer: false, onlyOnBase: true})
    fieldToOverwrite : string
}

@supertypeClass
export class ConcreteType extends BaseType {
    @property({onlyOnConcrete: true})
    fieldToOverwrite : string
}