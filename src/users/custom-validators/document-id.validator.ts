import {ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments} from "class-validator";

@ValidatorConstraint({ name: "documentId", async: false })
export class IsDocumentId implements ValidatorConstraintInterface {

    validate(docId: string, args: ValidationArguments) {
        let PASSPORT = new RegExp(/^[a-z A-Z]{3}[0-9]{6}[a-z]?$/);
        let DNI = new RegExp(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/);
        let NIE = new RegExp(/^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/);
    
        let result = PASSPORT.test(docId);
        result = result || !docId;
        result = result || DNI.test(docId);
        result = result || NIE.test(docId);
        return result;
    }

    defaultMessage(args: ValidationArguments) {
        return "Invalid Documentation Id!";
    }

}