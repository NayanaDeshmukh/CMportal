export class Portal {
    name: string;
    owner: string;
    addr: string;city:string;
    email: string;web:string;
    industry: string;
    phoneNumber: number;
    country: string;zip:Number;state:string;capital:string;
    desc:string;

    constructor(name: string, owner: string, addr: string, email: string, industry: string, phoneNumber: number, country: string,
        zip:Number,state:string,capital:string,desc:string,city:string,web:string) {
        this.name = name;
        this.owner = owner;
        this.addr = addr;this.city=city;
        this.email = email;this.web=web;
        this.industry = industry;
        this.phoneNumber = phoneNumber;
        this.country = country;this.zip=zip;this.state=state;this.capital=capital;
        this.desc=desc;
    }
};

export class employee {
    fname: string;
    lname: string;
    company: string;
    designation:string
    addr: string;
    email: string;
    gender: string;
    phoneNumber: number;
    country: string;
    zip:number;
    status: string;
    dob: string;

    constructor(fname: string, lname: string, company: string, addr: string, email: string, gender: string, phoneNumber: number,
        country: string, zip:number,status: string, dob: string,designation:string) {
        this.fname = fname;
        this.lname = lname;
        this.company = company;
        this.designation=designation;
        this.addr = addr;
        this.email = email;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.country = country;
        this.zip=zip;
        this.status = status;
        this.dob = dob;
    }
};
export class user {
    fname: string;
    lname: string;
   username: string;
    email: string;
    gender: string;
    password:string;
    constructor(fname: string, lname: string,username: string, email: string, gender: string,password:string ) {
        this.fname = fname;
        this.lname = lname;
        this.username =username;
        this.email = email;
        this.gender = gender;
        this.password=password;

    }
};
export class blog {
    title: string;
    description: string;
    wby: string;
    date:string;
    constructor(title: string, description: string, wby: string,date:string ) {
        this.title = title;
        this.description = description;
        this.wby = wby;
        this.date=date;
    }
};
export class contactquery {
    fname: string;
    lname: string;
    phone: Number;
    email: string;
    message: string;
    constructor(fname: string, lname: string, phone: Number,email: string, message: string ) {
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.email = email;
        this.message = message;
    }
};