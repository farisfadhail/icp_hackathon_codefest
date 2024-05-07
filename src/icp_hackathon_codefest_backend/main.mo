
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Types "types";
import Time "mo:base/Time";
import TrieMap "mo:base/TrieMap";
import Iter "mo:base/Iter";
import HashMap "mo:base/HashMap";
import Nat64 "mo:base/Nat64";



// The Database actor is responsible for managing the user data.
actor {

   type User = Types.User;
   type UserRequest = Types.UserRequest;
   type Result<Ok, Err> = Types.Result<Ok, Err>;
   type TrieMap<K, V> = Types.TrieMap<K, V>;

   let users = TrieMap.TrieMap<Principal, User>(Principal.equal, Principal.hash);


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

      return #ok(user);
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
            company_id +=  1;
            return #ok(company_id - 1);
         };
      };
   };

   public query func getCompany(id : CompanyId) : async ?Company {
      return companies.get(id);
   };


};
