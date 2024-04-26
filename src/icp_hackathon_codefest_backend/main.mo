import Time "mo:base/Time";
import TrieMap "mo:base/TrieMap";
import Result "mo:base/Result";
import Principal "mo:base/Principal";

// The Database actor is responsible for managing the user data.
actor Database {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

   // User type
   type User = {
      internet_identity : Principal;
      first_name : Text;
      last_name : Text;
      email : Text;
      birth_date : Text;
      company_ids : [Text];
      timestamp : Time.Time;
   };

    // TrieMap to store users, with Principal as the key and User as the value
   let users = TrieMap.TrieMap<Principal, User>(Principal.equal, Principal.hash);

    // Register a new user
   public shared (msg) func register(first_name : Text, last_name : Text, email : Text, birth_date : Text) : async Result.Result<User, Text> {

      let user_id = msg.caller;

      if (users.get(user_id) != null) {
         return #err("User already exists");
      };

      for (user in users.vals()) {
         if (user.email == email) {
            return #err("Email already exists");
         };
      };

      let user = {
         internet_identity = user_id;
         first_name = first_name;
         last_name = last_name;
         email = email;
         birth_date = birth_date;
         company_ids = [];
         selected_company_id = null;
         timestamp = Time.now();
      };

      users.put(user.internet_identity, user);

      return #ok(user);
   };

    // Function to get a user by their principal
   public query func getUser(principal : Principal) : async ?User {

      return users.get(principal);
   };
};
