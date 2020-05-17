export class Patient {

    constructor(
        public id: number,
        public first_name: string,
        public last_name: string,
        public email: string,
        public gender: string,
        public diagnosis_code: string,
        public diagnosis_description: string,
        public diagnosis_description_detailed: string,
        public administered_drug_treatment: string
    ) {}
}
