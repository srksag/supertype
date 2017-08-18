import {expect} from 'chai';
import * as mocha from 'mocha';
import {ConcreteType} from "./model/decorator";
import {amorphicStatic} from "../../index";

describe('Property checks', function () {
    it ('has proper attribute', function () {
        let props = ConcreteType.getProperties();
        expect(props.fieldToOverwrite.type).to.equal(String);
    });

    it ('has property attribute from the base class', function () {
        let props = ConcreteType.getProperties();
        expect(props.fieldToOverwrite.onlyOnBase).to.equal(true);
    });

    it ('has property attribute from the concrete class', function () {
        let props = ConcreteType.getProperties();
        expect(props.fieldToOverwrite.onlyOnConcrete).to.equal(true);
    });

    it ('value over-written by the subclass', function () {
        let props = ConcreteType.defineProperties();
        expect(props.fieldToOverwrite.toServer).to.equal(true);
    });

    it ('has proper attribute', function () {
        let prop = ConcreteType.amorphicGetPropertyDefinition('fieldToOverwrite');
        expect(prop.type).to.equal(String);
    });

    it ('has property attribute from the base class', function () {
        let prop = ConcreteType['fieldToOverwrite'];
        expect(prop.onlyOnBase).to.equal(true);
    });

    it ('has property attribute from the concrete class', function () {
        let prop = ConcreteType['fieldToOverwrite'];
        expect(prop.onlyOnConcrete).to.equal(true);
    });

    it ('value over-written by the subclass', function () {
        let prop = ConcreteType['fieldToOverwrite'];
        expect(prop.toServer).to.equal(true);
    });
});