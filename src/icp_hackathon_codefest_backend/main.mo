
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
import Text "mo:base/Text";







// The Database actor is responsible for managing the user data.
actor {

   type User = Types.User;
   type UserRequest = Types.UserRequest;
   type Result<Ok, Err> = Types.Result<Ok, Err>;
   type TrieMap<K, V> = Types.TrieMap<K, V>;
   type Wallet = Types.Wallet;
   type Token = Types.Token;
   type Ticker = Types.Ticker;
   type TokenDetail = Types.TokenDetail;
   type TokenListing = Types.TokenListing;

   let users = TrieMap.TrieMap<Principal, User>(Principal.equal, Principal.hash);
   let tokens = HashMap.HashMap<Principal, Token>(0,Principal.equal, Principal.hash);
   let wallets = HashMap.HashMap<Principal, Wallet>(0, Principal.equal, Principal.hash);


      //minus suplay
   func _minSuply(caller : ?Principal,ticker : Ticker, value : Nat) : () {
      switch(caller){
         case (?caller){
            let wallet = wallets.get(caller);
            switch (wallet) {
               case (null) {
                  return;
               };
               case (?wallet) {
                  let detail = Array.map<TokenDetail, TokenDetail>(wallet.detail, func (tokenDetail) {
                     if (tokenDetail.ticker == ticker) {
                        let newTokenDetail : TokenDetail = {
                           ticker = tokenDetail.ticker;
                           value = tokenDetail.value - value;
                        };
                        return newTokenDetail;
                     } else {
                        return tokenDetail;
                     };
                  });

                  let newDetail = Buffer.fromArray<TokenDetail>(detail);
                  let updateWallet : Wallet = {
                     detail = Buffer.toArray(newDetail);
                  };
                  wallets.put(caller, updateWallet);
                  
               };
            };
         };
         case (null){
            return;
         };
      };
   };

   func _plusSuply(caller : ?Principal,ticker : Ticker, value : Nat) : () {
      switch(caller){
         case (?caller){
            if (_cekWalletToken(caller, ticker)) {
               let wallet = wallets.get(caller);
               switch (wallet) {
                  case (null) {
                     return;
                  };
                  case (?wallet) {
                     let detail = Array.map<TokenDetail, TokenDetail>(wallet.detail, func (tokenDetail) {
                        if (tokenDetail.ticker == ticker) {
                           let newTokenDetail : TokenDetail = {
                              ticker = tokenDetail.ticker;
                              value = tokenDetail.value + value;
                           };
                           return newTokenDetail;
                        } else {
                           return tokenDetail;
                        };
                     });

                     let newDetail = Buffer.fromArray<TokenDetail>(detail);
                     let updateWallet : Wallet = {
                        detail = Buffer.toArray(newDetail);
                     };
                     wallets.put(caller, updateWallet);
                     
                  };
               };
            }else {
               _addTokenToWallet(caller, ticker, value);
            }
         };
         case (null){
            return;
         };
      };
   };

   

   func _cekWalletToken(caller : Principal, ticker : Ticker) : Bool {
      switch (wallets.get(caller)) {
         case (null) {
            return false;
         };
         case (?wallet) {
            let token = Array.find<TokenDetail>(wallet.detail, func (tokenDetail) {
            tokenDetail.ticker == ticker;
            });
            return token != null;
         };
      };
      
   };

   func _createToken (ticker : Ticker, value : Nat, name : Text, caller : Principal) : () {
      let token : Token = {
         name ;
         ticker;
         suply = value;
      };

      tokens.put(caller, token);

      let token_detail : TokenDetail = {
            ticker ;
            value ;
      };

      switch(wallets.get(caller)) {
         case (null) {
            let addToken = Buffer.fromArray<TokenDetail>([token_detail]);
            let wallet : Wallet = {
               detail = Buffer.toArray(addToken);
            };
            wallets.put(caller, wallet);
         };
         case (?wallet) {
            
         };
      };
   };

   func _addTokenToWallet(caller : Principal,ticker : Ticker, value : Nat) : (){
      let tokenDetail : TokenDetail = {
         ticker;
         value;
      };
      switch(wallets.get(caller)) {
         case (null) {
            let addToken = Buffer.fromArray<TokenDetail>([tokenDetail]);
            let wallet : Wallet = {
               detail = Buffer.toArray(addToken);
            };
            wallets.put(caller, wallet);
         };
         case (?wallet) {
            let currentToken = Buffer.fromArray<TokenDetail>(wallet.detail);
            currentToken.add(tokenDetail);
            let updateWallet : Wallet = {
               detail = Buffer.toArray(currentToken);
            };
            wallets.put(caller, updateWallet);
         };
      };
      
   };


   func _getTokenDetail(wallet : Wallet, ticker: Ticker) : ?TokenDetail {
      let token = Array.find<TokenDetail>(wallet.detail, func (tokenDetail) {
         tokenDetail.ticker == ticker;
      });
      return token;
   };

   //initialize coins
   let tin_ticker = "TIN";
   
   var dev_claim = false;
   var dev : ?Principal = null;

   public shared func claimDev(caller : Principal) : async Result.Result<Text, Text> {
      if (dev_claim == false) {
         dev_claim := true;
         dev := ?caller;
         switch(dev){
            case(?dev){
               _createToken("TIN", 100000000, "Tin Coin",dev);
               return #ok("Dev claim successful");
            };
            case(null){
               return #err("Dev claim failed");
            };
         };
      } else {
         return #err("Dev claim already claimed");
      };
   };

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

      if (count <= 100000){
         
         _addTokenToWallet(caller, tin_ticker, 15);
         _minSuply(dev,tin_ticker,15);
         
         count += 1;
      };

      return #ok(user);
   };

   


    // Function to get a user by their principal
   public query func getUser(caller : Principal) : async Result.Result<User, Text>{
      switch (users.get(caller)) {
         case (null) {
            return #err("User not found");
         };
         case  (?user) {
            return #ok(user);
         };
      };
      
   };

   // Function to get all users
   public query func getAllUsers() : async [User] {
      return Iter.toArray(users.vals());
   };



   type Company = Types.Company; 
   type CompanyDetail = Types.CompanyDetail;
   type CompanyId = Types.CompanyId;

   let companies = HashMap.HashMap<CompanyId, Company>(0, Nat64.equal, Nat64.toNat32);
   var company_id : Nat64 = 0;

   //fucntion to create company
   public shared func createCompany(caller : Principal,detail : CompanyDetail, token : Token) : async Result.Result<CompanyId, Text> {
      switch(users.get(caller)) {
         case(null){
            return #err("Not authorized");
         };
         case(?user){
            let company : Company = {
               id = company_id;
               created = Time.now();
               creator = caller;
               detail;
               token;
            };
            
            companies.put(company_id, company);
            _minSuply(?caller,tin_ticker,5);
            _plusSuply(dev,tin_ticker,5);

            tokens.put(caller, token);

            _plusSuply(?caller, token.ticker, token.suply);

            company_id +=  1;
            return #ok(company_id - 1);
         };
      };
   };


   
   //fuction to get company by ID
   public query func getCompany(id : CompanyId) : async ?Company {
      return companies.get(id);
   };

   let listings = HashMap.HashMap<Ticker, TokenListing>(0, Text.equal, Text.hash);

   public shared func listingToken(caller : Principal, ticker : Ticker, suplay : Nat, liquidity : Nat) : (){
      let callerTokenValue = _getBalance(caller,ticker);
      if (callerTokenValue <= suplay) {
         return;
      };
      let callerTinValue = _getBalance(caller,tin_ticker);
      if (liquidity > callerTinValue) {
         return;
      };
      let listing : TokenListing = {
         ticker;
         creator = caller;
         suplay;
         liquidity = liquidity;
      };

      _minSuply(?caller,ticker,suplay);
      _minSuply(?caller,tin_ticker,liquidity);
      listings.put(ticker, listing);
   };

   public query func getAllListings() : async [TokenListing] {
      return Iter.toArray(listings.vals());
   };

   public query func getListing(ticker : Ticker) : async ?TokenListing {
      return listings.get(ticker);
   };

   public shared func buyToken(caller : Principal, ticker : Ticker, value : Nat) : async Result.Result<Text, Text> {
      switch(listings.get(ticker)) {
         case(null){
            return #err("Token not listed");
         };
         case(?listing){
            let price = listing.liquidity / listing.suplay;
            let totalToken = value/price;
            if (listing.suplay >= value) {
               _plusSuply(?caller, ticker, totalToken);
               _minSuply(?caller, tin_ticker, value);
               
               let updateListing : TokenListing = {
                  ticker;
                  creator = listing.creator;
                  suplay = listing.suplay - value;
                  liquidity = listing.liquidity + value;
               };
               listings.put(ticker, updateListing);
               return #ok("Transaction successful");
            } else {
               return #err("Invalid value");
            };
         };
      };
   };


   public func getTokenPrice (ticker : Ticker) : async Result.Result<Nat, Text> {
      switch(listings.get(ticker)) {
         case(null){
            return #err("Token not listed");
         };
         case(?listing){
            let price = listing.liquidity / listing.suplay;
            return #ok(price);
         };
      };
   };




   public query func getBalance(caller : Principal,ticker : Ticker) : async Result.Result<Nat, Text> {
      switch(wallets.get(caller)) {
         case(null){
            return #err("Wallet not found");
         };
         case(?wallet){
            switch(_getTokenDetail(wallet, ticker)) {
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

   func _getBalance(caller : Principal,ticker : Ticker) : Nat {
      switch(wallets.get(caller)) {
         case(null){
            return 0;
         };
         case(?wallet){
            switch(_getTokenDetail(wallet, ticker)) {
               case(null){
                  return 0;
               };
               case(?coinDetail){
                  return coinDetail.value;
               };
            };
         };
      };
   };


   public shared ({caller}) func whoami() : async Principal {
      caller
   };






   public query  func getWallet(caller : Principal) : async ?Wallet {
      return wallets.get(caller);
   };

   
};