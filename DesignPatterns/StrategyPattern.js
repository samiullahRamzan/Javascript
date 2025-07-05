// shipping cost , all have own strategy to calculate shipping cost
function Fedex(){
    this.calculate=package=> 2.45;
}

function UPS(){
    this.calculate=package=> 1.56;
}

function USPS(){
    this.calculate=package=> 3.45;
}

function Shipping(){
    this.company=null;
    this.setStrategy=(company)=>{
        this.company=company;
    }
    
    this.calculate=package=>{
        return this.company.calculate(package);
    }
}

const fedex=new Fedex();
const ups=new UPS();
const usps=new USPS();

const package={from:'Lahore',to:'Karachi',weight:1.5};

const shipping=new Shipping();
shipping.setStrategy(fedex);
console.log('fedex cost ',shipping.calculate(package)); // 2.45

