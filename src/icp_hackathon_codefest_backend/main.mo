
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Types "types";
import Time "mo:base/Time";
import TrieMap "mo:base/TrieMap";
import Iter "mo:base/Iter";
import HashMap "mo:base/HashMap";
import Nat64 "mo:base/Nat64";
import Buffer "mo:base/Buffer";
import Nat "mo:base/Nat";
import Array "mo:base/Array";





// The Database actor is responsible for managing the user data.
actor {

   type User = Types.User;
   type UserRequest = Types.UserRequest;
   type Result<Ok, Err> = Types.Result<Ok, Err>;
   type TrieMap<K, V> = Types.TrieMap<K, V>;
   type Wallet = Types.Wallet;
   type Coin = Types.Coin;
   type CoinId = Types.CoinId;
   type CoinDetail = Types.CoinDetail;

   let users = TrieMap.TrieMap<Principal, User>(Principal.equal, Principal.hash);
   let coins = HashMap.HashMap<Nat64, Coin>(0, Nat64.equal, Nat64.toNat32);
   var coin_id : Nat64 = 0;
   //initialize coins
   let coin : Coin = {
      name = "Together Investment Coin";
      symbol = "TIN";
      suply = 12000000;
      curent_suply = 12000000;
   };
   coins.put(coin_id, coin);
   coin_id += 1;

   let wallets = HashMap.HashMap<Principal, Wallet>(0, Principal.equal, Principal.hash);
   var count : Nat64 = 0;

    // Register a new user
   public shared ({caller}) func register(newUser : UserRequest) : async Result.Result<User, Text> {

      if (users.get(caller) != null) {
         return #err("User already exists");
      };

      let email = newUser.email;
      for (user in users.vals()) {
         if (user.email == email) {
            return #err("Email already exists");
         };
      };
      

      let user : User = {
         email = newUser.email;
         first_name = newUser.first_name;
         last_name = newUser.last_name;
         timestamp = Time.now();
      };
      

      users.put(caller, user);

      if (count <= 100){
         
         let coin_detail : CoinDetail = {
            coin_id = 0;
            value = 10;
         };

         

         let newCoin = Buffer.fromArray<CoinDetail>([coin_detail]);
         let wallet : Wallet = {
            detail = Buffer.toArray(newCoin);
         };

         _minSuply(0,10);
         wallets.put(caller, wallet);
         
         count += 1;
      };

      return #ok(user);
   };

   func _minSuply(id : CoinId, value : Nat) : () {
      switch(coins.get(id)) {
         case (?coin) {
            let coinUpdate : Coin = {
               name = coin.name;
               symbol = coin.symbol;
               suply = coin.suply;
               curent_suply = coin.curent_suply - value;
            };

            coins.put(id, coinUpdate);
         };
         case (null) {
            return;
         };
      };
   };

   func _plusSuply(id : CoinId, value : Nat) : () {
      switch(coins.get(id)) {
         case (?coin) {
            let coinUpdate : Coin = {
               name = coin.name;
               symbol = coin.symbol;
               suply = coin.suply;
               curent_suply = coin.curent_suply + value;
            };

            coins.put(id, coinUpdate);
         };
         case (null) {
            return;
         };
      };
   };


    // Function to get a user by their principal
   public query ({caller}) func getUser() : async Result.Result<User, Text>{

      switch (users.get(caller)) {
         case (null) {
            return #err("User not found");
         };
         case  (?user) {
            return #ok(user);
         };
      };
      
   };

   public query func getAllUsers() : async [User] {
      return Iter.toArray(users.vals());
   };

   type Company = Types.Company; 
   type CompanyDetail = Types.CompanyDetail;
   type CompanyId = Types.CompanyId;
   let companies = HashMap.HashMap<CompanyId, Company>(0, Nat64.equal, Nat64.toNat32);
   var company_id : Nat64 = 0;

   public shared ({caller}) func createCompany(detail : CompanyDetail) : async Result.Result<CompanyId, Text> {
      switch(users.get(caller)) {
         case(null){
            return #err("Not authorized");
         };
         case(?user){
            let company : Company = {
               id = company_id;
               created = Time.now();
               creator = caller;
               holder = [];
               detail;
            };
            
            companies.put(company_id, company);
            _plusSuply(0,2);
            company_id +=  1;
            return #ok(company_id - 1);
         };
      };
   };
   
   public query func getCompany(id : CompanyId) : async ?Company {
      return companies.get(id);
   };

   public query func getAllCompanies() : async [Company] {
      return Iter.toArray(companies.vals());
   };

   public query ({caller})  func getWallet() : async ?Wallet {
      return wallets.get(caller);
   };

   public query func getCoin(id : Nat64) : async ?Coin {
      return coins.get(id);
   };

   func _getCoinDetail(wallet : Wallet, id: CoinId) : ?CoinDetail {
      let coin = Array.find<CoinDetail>(wallet.detail, func (coinDetail) {
         coinDetail.coin_id == id
      });
   };


   public query ({caller}) func getBalance(id : CoinId) : async Result.Result<Nat, Text> {
      switch(wallets.get(caller)) {
         case(null){
            return #err("Wallet not found");
         };
         case(?wallet){
            switch(_getCoinDetail(wallet, id)) {
               case(null){
                  return #err("Coin not found");
               };
               case(?coinDetail){
                  return #ok(coinDetail.value);
               };
            };
         };
      };
   };


   public shared (msg) func whoami() : async Principal {
      msg.caller
   };

   public query ({caller}) func cekUser() : async Result.Result<Text, Text> {
      switch(users.get(caller)) {
         case(null){
            return #err("User not found");
         };
         case(?user){
            return #ok("User found");
         };
      };
   };
};