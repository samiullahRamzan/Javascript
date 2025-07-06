function CryptocurrencyApi(){
    this.getValue=function(coin){
        console.log(`Fetching value for ${coin}...`);

        switch(coin){
            case 'Bitcoin':
                return 45000;
            case 'Ethereum':
                return 3000;
            case 'Litecoin':
                return 150;
            default:
                throw new Error('Unknown cryptocurrency');
        }
    }
}

// bad idea  
// const api=new CryptocurrencyApi();

// console.log(api.getValue('Bitcoin')); // 45000
// console.log(api.getValue('Bitcoin')); // 45000
// console.log(api.getValue('Bitcoin')); // 45000
// console.log(api.getValue('Bitcoin')); // 45000
// console.log(api.getValue('Bitcoin')); // 45000
// console.log(api.getValue('Bitcoin')); // 45000

// then we need a object that is middle to get external api request.. for example we can add cache
// instead of calling the api directly we can call the proxy object
// if the proxy already have value for this coin then we can return it  

function CryptocurrencyApiProxy(){
  this.api=new CryptocurrencyApi();
  this.cache={};

  this.getValue=function(coin){
    if(this.cache[coin]==null){
        this.cache[coin]=this.api.getValue(coin);
    }

    return this.cache[coin];
  }
}

const proxy=new CryptocurrencyApiProxy();

console.log(proxy.getValue('Bitcoin')); // 45000
console.log(proxy.getValue('Bitcoin')); // 45000
console.log(proxy.getValue('Bitcoin')); // 45000
console.log(proxy.getValue('Bitcoin')); // 45000
console.log(proxy.getValue('Bitcoin')); // 45000
console.log(proxy.getValue('Bitcoin')); // 45000
console.log(proxy.getValue('Litecoin')); // 150