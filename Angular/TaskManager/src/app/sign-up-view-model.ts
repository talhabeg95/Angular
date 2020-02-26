export class SignUpViewModel 
{
    personName: any;
    email: string;
    phoneNumber: string;
    dateOfBirth: string;
    password: string;
    sex: string;
    countryID: number;
    receiveNewsLetter: boolean;
    skills: any;

    constructor(personName: any =null,
        email: string =null,
        phoneNumber: string =null,
        dateOfBirth: any =null,
        password: string = null,
        sex: string =null,
        countryID: number =null,
        receiveNewsLetter: boolean =false,
        skills: any =null,)
        {
            this.personName = personName;
            this.email = email;
            this.phoneNumber = phoneNumber;
            this.dateOfBirth = dateOfBirth;
            this.password = password;
            this.sex = sex;
            this.countryID = countryID;
            this.receiveNewsLetter = receiveNewsLetter;
            this.skills = skills;
        }
}
